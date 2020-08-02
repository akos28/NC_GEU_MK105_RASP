import requests
import urllib.request
import time
from bs4 import BeautifulSoup
import json
import os
import numpy as np
from datetime import date

def get_random_ua():   ####to randomise the header (it is pulling a header from list of headers in txt file)
	random_ua = ''
	ua_file = 'ua_file.txt'
	try:
		with open(ua_file) as f:
			lines = f.readlines()
		if len(lines) > 0:
			prng = np.random.RandomState()
			index = prng.permutation(len(lines) - 1)
			idx = np.asarray(index, dtype=np.integer)[0]
			random_ua = lines[int(idx)]
	except Exception as ex:
		print('Exception in random_ua')
		print(str(ex))
	finally:        
		return random_ua
       
user_agent = get_random_ua()
headers = {
        'user-agent': user_agent,
    }
    
def search_for_next(link):#link for page 2    ####to check if there is next page of jobs in industry
																		
	print('link for page = '+ link) 
	while 1:
		r3 = requests.get(link, headers = headers)
		soup3 = BeautifulSoup(r3.text, "html.parser")
		next1 = soup3.find('div', class_='srp-navigation')
		if not next1:
			print('no more pages')
			break
		else:
			link1 = next1.findAll('a') #list of button urls in page 2
			if len(link1) < 2:
				return None
			else:
				link2 = link1[1]['href'] #url for next page
				time.sleep(0.01)
				r4 = requests.get(link2, headers = headers)
				soup4 = BeautifulSoup(r4.text, "html.parser") #soup of page 3
				#print(link2)
				return link2, soup4 #returns url for page 3 and soup of page 3

def append_jobs(soup):  ####trial function to print job title
	for job in soup.findAll('div', class_='job-tittle'):
		print(job.text)
		

def add_to_jobs(soup):    ####adding all the jobs in a page to json file (page-specific)
	total_jobs = []	
	i=0 #counter for jobs (VERY IMPORTANT)
	j=0 #counter for job posting_date (IMPORTANT)
	for job in soup.findAll('div', class_='job-tittle'):#this is the job part of one job in the particular industry
		try:
			job_desc = soup.findAll('p', class_='job-descrip')[i].text.strip()
		except IndexError:
			job_desc = 'null'
		#print('job_desc is null')
		try:	
			job_skills = soup.findAll('p', class_='descrip-skills')[i].text.replace("\n","") #.get('label',class_ = 'grey_link')
		except:
			job_skills = 'null'
				
		job_title = job.find('a').text.strip()
		posting_date = soup.findAll('span', class_='posted')[j].text
		company = job.find('span' , class_ = 'company-name').text.strip()
		loc_dur = job.findAll('span' , class_ = 'loc')
		try:
			location = loc_dur[0].text.replace("\n","")	
		except IndexError:
			location = 'null'
		try:
			duration = loc_dur[1].text.strip()
		except IndexError:
			duration = 'null'
		try:
			salary = loc_dur[2].text.strip()
		except IndexError:
			salary = 'null'
	
		issa_job = {
			'job-title' : job_title,
			'company' : company,
			'date posted' : posting_date,
			'location' : location,
			'duration' : duration,
			'salary' : salary,
			'description' : job_desc,
			'skills' : job_skills
		}
		i=i+1
		j=j+2
		total_jobs.append(issa_job)
		
	print('added page')
	return total_jobs
	
##################################### This basically appends all jobs in particular industry to a json file ###################################	

#headers = requests.utils.default_headers()
url = 'https://www.monsterindia.com/jobs-by-industry.html'
time.sleep(0.01)
response  = requests.get(url, headers = headers)

soup = BeautifulSoup(response.text, "html.parser") #this soup is the page which lists all industries
industries = soup.findAll('a', class_='ar_lnk') #finding all the industries which have jobs

industry_count = 1
for industry in industries:
	half_link = industry['href']
	full_link = 'https:' + half_link #now this is the link to each industry
	r2 = requests.get(full_link, headers = headers)
	soup2 = BeautifulSoup(r2.text, "html.parser") #this soup is the page with list of jobs in that industry
	print('industry: ' + industry.text + 'link: ' + full_link)

	file_name = industry_count
	page_count = 1
	jobs_all = []
	
	                  #########appending industry name to the beginning of the JSON file########
	iname = industry.text
	industry_name = {
		'INDUSTRY' : iname
	}
	jobs_all.append(industry_name) 
	                   ###########appending current date to beginning of json file################

	now = date.today()
	the_today = now.strftime('%b-%d-%Y')
	
	current_date = {
		'DATE' : the_today
	}
	jobs_all.append(current_date)	                        
	
	
	
	jobs_all.append(add_to_jobs(soup2)) #page 1 is added	
	next1 = soup2.find('div', class_='srp-navigation') 
	if not next1:
		print('There is only one page')
	else:
		link1 = next1.find('a')['href'] #url of page 2
		time.sleep(0.01)
		response1 = requests.get(link1, headers = headers)
		soup3 = BeautifulSoup(response1.text, "html.parser")
		jobs_all.append(add_to_jobs(soup3)) #page 2 has been appended
		page_count+=1
		while True:
			link = link1	#link for page 2
			soup_link = search_for_next(link) #soup of page 2+i
			if soup_link is None:
				print('No more pages')
				break
			elif page_count>=4:
				break
			else:
				page_count += 1
				soup4 = soup_link[1]
				#print(soup.prettify())
				jobs_all.append(add_to_jobs(soup4)) #page 2+i has been added 
				#print("added page" + str(page_count))
				link1 = soup_link[0]  # link for page 2+i
				continue

		
	print(page_count)
	packet = '%s.json' % (file_name)
	
	with open(packet,'w+') as outfile:
		json.dump(jobs_all, outfile, indent = 4)
	industry_count += 1

#next = soup2.find('div', class_='srp-navigation')
#link = next.a.get('href')

#print_jobs(soup2)
#search_for_next(link)
	
	
