import datetime
from django.db import models

# Create your models here.


class Student(models.Model):
    student_name = models.CharField(max_length=200)
    enter_time = models.DateTimeField('time entered')
    leave_time = models.DateTimeField('time left')
    student_computing_id = models.CharField(max_length=200)
    student_location = models.CharField(max_length=200)
class Location(models.Model):
    location_name=models.CharField(max_length=200)
    maximum_capacity= models.IntegerField(default=0)
    current_occupancy = models.IntegerField(default=0)
    def __str__(self):
        return self.location_name
    def get_percentage_full(self):
        return current_occupancy/maximum_capacity
        

    
