from time import sleep
from pathlib import Path
from requests import get
from bs4 import BeautifulSoup
from csv import writer as csv_writer

from utils.scraping.user_agent import get_random_user_agent


class Indeed:
	def __init__(self, location : str, output_dir : Path, verbose : bool = None,
		testing : bool = None):
		"""
			location (str) : Location of where to search for. If you want a
				particular city and state, use a space in the middle.
				Ex: "Detroit Michigan"
			output_dir (Path) : A pathlib.Path instance of the directory of the
				output to save it to.
			verbose (bool) : Verbosity. [Defaults: False]
			testing (bool) : Testing for Travis CI. [Defaults: False]
		"""
		self.verbose = False
		if verbose == True:
			self.verbose = True

		self.testing = False
		if testing == True:
			self.testing = True

		location_substring = "%2C+".join(location.split())

		self.base_url = "https://www.indeed.co.in/jobs?q=&l=%s&start=" % \
			location_substring

		self.output_dir = output_dir
		# CSV because CSV is easier to store and retrieve from disk compared to
		# JSON.
		self.output_file = "indeed.csv"

	###################################
	######## UTILITY FUNCTIONS ########
	###################################
	def __extract_job_title_from_result(self, soup):
		jobs = []
		for div in soup.find_all(name="div", attrs={"class":"row"}):
			for a in div.find_all(name="a", attrs={"data-tn-element":"jobTitle"}):
				jobs.append(a["title"])
		return(jobs)


	def __extract_company_from_result(self, soup):
		companies = []
		for div in soup.find_all(name="div", attrs={"class":"row"}):
			company = div.find_all(name="span", attrs={"class":"company"})
			if len(company) > 0:
				for b in company:
					companies.append(b.text.strip())
			else:
				sec_try = div.find_all(name="span", attrs={
					"class":"result-link-source"})
				for span in sec_try:
					companies.append(span.text.strip())
		return(companies)


	def __extract_location_from_result(self, soup):
		locations = []
		spans = soup.findAll("span", attrs={"class": "location"})
		for span in spans:
			locations.append(span.text)
		return(locations)


	def __extract_salary_from_result(self, soup):
		salaries = []
		for div in soup.find_all(name="div", attrs={"class":"row"}):
			try:
				salaries.append(div.find("nobr").text)
			except:
				try:
					div_two = div.find(name="div", attrs={"class":"sjcl"})
					div_three = div_two.find("div")
					salaries.append(div_three.text.strip())
				except:
					salaries.append("Nothing_found")
		return(salaries)


	def __extract_summary_from_result(self, soup):
		summaries = []
		spans = soup.findAll("div", attrs={"class": "summary"})
		for span in spans:
			summaries.append(span.text.strip())
		return(summaries)


	def __is_last_page(self, soup):
		next_link = soup.find("a", attrs={"aria-label" : "Next"})
		if next_link == None:
			return True
		return False


	def __ScrapeData(self, page_count):
		if self.verbose:
			print ("Entering Indeed.ScrapeData...")
		url = self.base_url + str(page_count)

		if self.verbose:
			print ("Sending request to:", url)
		response = get(url, headers = {"User-Agent" : get_random_user_agent()})
		
		if self.verbose:
			print ("Response received! Attempting to soupify...")
		soup = BeautifulSoup(response.text, "html.parser")

		if self.verbose:
			print ("Extracting job_titles...")
		job_titles = self.__extract_job_title_from_result(soup)

		if self.verbose:
			print ("Extracting companies...")
		companies = self.__extract_company_from_result(soup)

		if self.verbose:
			print ("Extracting summaries...")
		summaries = self.__extract_summary_from_result(soup)

		# CSV because CSV is easier to store and retrieve from disk compared to
		# JSON.
		output_path = self.output_dir / Path(self.output_file)
		if self.verbose:
			print ("Writing to:", str(output_path))
		with open(output_path, 'a') as F:
			writer = csv_writer(F)

			for job_title, company, summary in zip(job_titles, companies,
			summaries):
				writer.writerow([job_title, company, summary])

		# This returns whether we can continue or not
		proceed = not self.__is_last_page(soup)
		if self.verbose:
			print ("Completed ScrapeData! Returning", proceed)

		return proceed


	###################################
	########### MAIN DRIVER ###########
	###################################
	def run(self, interval : int = None):
		"""
			interval (int) : The amount of time (seconds) to sleep between every
				iteration. [Defaults: 60]
		"""
		if self.verbose:
			print ("Entering Indeed.run()...")

		if self.testing:
			if self.verbose:
				print ("Performing unit tests on Indeed.ScrapeData...")
				print ("\nPerforming unit test on Indeed.ScrapeData(0)")
			self.__ScrapeData(0)
			if self.verbose:
				print ("Completed unit test on Indeed.ScrapeData(0).")
				print ("\nPerforming unit test on Indeed.ScrapeData(10)...")
			sleep (5)
			self.__ScrapeData(10)
			if self.verbose:
				print ("Completed unit test on Indeed.ScrapeData(10).")
				print ("\nPerforming unit test on Indeed.ScrapeData(20)...")
			sleep (5)
			self.__ScrapeData(20)
			if self.verbose:
				print ("Completed unit test on Indeed.ScrapeData(20).")
				print ("\nCompleted unit tests on Indeed.ScrapeData.")

			if self.verbose:
				print ("\nReturning 1 for Indeed.run().")
			return 1

		if interval == None:
			interval = 60

		if self.verbose:
			print ("Time Interval set to:", interval)

		page_count = 0
		while True:
			if self.verbose:
				print("page_count:", page_count, "| Iteration:", page_count/10)
			flag_next_page = self.__ScrapeData(page_count)
			page_count += 10
			if flag_next_page:
				sleep(interval)
			else:
				break

		if self.verbose:
			print ("Completed Indeed.run(). Returning 1")

		return 1

if __name__ == "__main__":
	i = Indeed("dehradun uttarakhand", Path("."), verbose=True, testing=False)
	i.run()
