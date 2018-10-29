import datetime
from django.db import models
from django.utils import timezone

# Create your models here.


class Student(models.Model):
        student_name = models.CharField(max_length=200)
        enter_time = models.DateTimeField()
        student_computing_id = models.CharField(max_length=200)
        student_location = models.CharField(max_length=200, default='')
        def __str__(self):
                return self.student_name

        #Takes in a Location model
        def check_into(self, location):
                self.enter_time = datetime.datetime.now()
                self.student_location = location.check_in()

        def time_out(self):
                elapsed_time = datetime.datetime.now() - self.enter_time
                if(abs(elapsed_time) > datetime.timedelta(hours = 2)):
                        l = Location.objects.get(location_name = self.student_location)
                        l.check_out()
                        self.student_location = ''


class Location(models.Model):
	location_name=models.CharField(max_length=200)
	maximum_capacity= models.IntegerField(default=0)
	current_occupancy = models.IntegerField(default=0)
	def __str__(self):
		return self.location_name

	def get_percentage_full(self):
		return self.current_occupancy/self.maximum_capacity

	def check_in(self):
		self.current_occupancy += 1
		return self.location_name

	def check_out(self):
		self.current_occupancy -= 1
		if(self.current_occupancy < 0):
			self.current_occupancy = 0

