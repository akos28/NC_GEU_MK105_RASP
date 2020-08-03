import requests
import urllib.request
from bs4 import BeautifulSoup 
import numpy as np
import feedparser
import json
               ###################ultimately create a list of news channels from which to parse feed######################
              
news_channel = []
news_channel.append('https://economictimes.indiatimes.com/industry/rssfeeds/13352306.cms') 
news_channel.append('https://economictimes.indiatimes.com/news/company/rssfeeds/2143429.cms')  
news_channel.append('https://timesofindia.indiatimes.com/rssfeeds/1898055.cms')
#news_channel.append('https://www.businesstoday.in/rss/rssstory.jsp?sid=111')

for channel in news_channel:
	news_feed = feedparser.parse(channel)  #gets newsfeed rss to parse
	all_entries = news_feed.entries 

	#entry = all_entries[0]
	#print(entry.keys())

	articles_all = []
	for entry in all_entries:
		title = entry.title
		summary = entry.summary
		date = entry.published
		print ('\nTitle: ', title , '\nSummary: ', summary, '\nDate Published: ', date)
		print('added article\n')
	
		issa_article = {
			'Title' : title,
			'Summary' : summary,
			'Date Published' : date
		}
	
		articles_all.append(issa_article)
	print('added: ' , channel)
	

with open('newsarticles.json' ,'w+') as outfile:
	json.dump(articles_all, outfile, indent = 4)
