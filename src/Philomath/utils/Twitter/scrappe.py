from os import environ
from time import sleep
from json import load
from pathlib import Path
from csv import writer as csv_writer

from tweepy import API as tweepy_API
from tweepy import OAuthHandler, API

class Twitter:
	def __init__(self, output_dir : Path, verbose : bool = None, testing : bool = None):
		self.verbose = False
		if verbose:
			self.verbose = True

		self.testing = False
		if testing:
			self.testing = True

		self.output_dir = output_dir


	def username_tweets_to_df(self, username, count):
		with open(Path("res/TweepyCreds.json"), 'r') as F:
			creds = load(F)
			consumer_api = creds["consumer_api"]
			consumer_secret = creds["consumer_secret"]
			access_token = creds["access_token"]
			access_secret = creds["access_secret"]

		auth = OAuthHandler(consumer_api, consumer_secret)
		auth.set_access_token(access_token, access_secret)
 
		api = tweepy_API(auth)

		tweets_username = []
		try:
			# Pulling individual tweets from query
			if self.verbose:
				print ("Pulling Tweets")
			for tweet in api.user_timeline(id=username, count=count):
				# Adding to list that contains all tweets
				tweets_username.append([str(tweet.created_at), username, tweet.text.replace("\n", " ")])

			return tweets_username

		except BaseException as e:
			print('failed on_status,', str(e))

			return -1

	def run(self):
		username_arr = ['Uttarakhand_Job', 'UttarakhandJobs', 'JobsinSidcul']
		# This is due to Tweepy's limitation. To get as high as 3,200, one needs to use the tweepy.Cursor
		count = 1000

		if self.testing:
			count = 100
			username_arr = username_arr[:3]

		out_file = Path("TwitterOutput.csv")

		with open(self.output_dir / out_file, 'a') as F:
			writer = csv_writer(F)
			writer.writerow(["Time", "Username", "Text"])

		for user in username_arr:
			if self.verbose:
				print ("user:", user)
			tweets_username = self.username_tweets_to_df(user, count)
			if tweets_username == -1:
				break

			if self.verbose:
				print ("Writing to file")
			with open(self.output_dir / out_file, 'a') as F:
				writer = csv_writer(F)
				for row in tweets_username:
					writer.writerow(row)

			sleep(5)


if __name__ == "__main__":
	t = Twitter(Path("."), True)
	t.run()
