import datetime
import json
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import AbstractUser


# Create your models here.


class Student(AbstractUser):
	student_name = models.CharField(max_length=200)
	enter_time = models.DateTimeField(null = True)
	student_computing_id = models.CharField(max_length=200)
	student_location = models.CharField(max_length=200, default='')

	friends = models.ManyToManyField("Student")

	def __str__(self):
		return self.student_name

    # Takes in a Location model and an estimate value
	def check_into(self, location, estimate):
		self.enter_time = datetime.datetime.now()
		self.student_location = location.check_in(estimate)

	# Do we need this anymore?
	def time_out(self):
		elapsed_time = datetime.datetime.now() - self.enter_time
		if abs(elapsed_time) > datetime.timedelta(hours = 3):
			# l = Location.objects.get(location_name = self.student_location)
			self.student_location = ''

class Location(models.Model):
	location_name=models.CharField(max_length=200)
	iconsize=models.CharField(max_length=200, default='')
	coordinates=models.CharField(max_length=200, default='')
	title=models.CharField(max_length=500, default='')
	description=models.CharField(max_length=2000, default='')
	percent_full=models.IntegerField(default=0)

	occupancy_list = []  # occupancy_list should contain tuples in the form of (estimated occupancy, time subitted)

	def __str__(self):
		return self.location_name

	def set_list(self, x):
		self.lists = json.dumps(x)

	def get_list(self):
		return json.loads(self.lists)
	# Calculates average of all votes. Returns -1 if no votes
	def get_percentage_full(self):
		if len(self.occupancy_list) == 0:
			return 0
		percentage_full = 0
		for x in self.occupancy_list:
			percentage_full += x
		return percentage_full/len(self.occupancy_list)

	# Estimation is the value given by the user when they are asked "How full is this space?"
	def check_in(self, estimation):
		self.occupancy_list.append(estimation)

	# Call this method every interval
	def check_votes(self):
		for x in self.occupancy_list:
			if abs(datetime.datetime.now() - x[1]) > datetime.timedelta(hours = 3):  # Change this to set time votes get deleted
				self.occupancy_list.remove(x)

	def clear_votes(self):
		self.occupancy_list.clear()

	# Helper method to run test cases. Sets a manual time value in a tuple
	@staticmethod
	def manual_estimate_time(estimate, time):
		return estimate, time
