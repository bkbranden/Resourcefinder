from django.test import TestCase
from django.test import Client
import datetime
from .models import *
from .views import *


# Tests if client can access the site
class TestAccess(TestCase):
	def test_check_in_is_loaded(self):
		response = self.client.get('')
		self.assertEqual(response.status_code, 200)

# Tests if client can access .../check_in/
class TestCheckinAccess(TestCase):
	def test_check_in_is_loaded(self):
		response = self.client.get('/check_in/')
		self.assertEqual(response.status_code, 200)

# Tests Location and Student models
class TestCheckingMembers(TestCase):
	def test_get_percentage_full(self):
		l = Location(location_name = "Test Library")
		l.clear_votes()
		l.occupancy_list = [(50, datetime.datetime.now()), (70, datetime.datetime.now())]
		self.assertEqual(l.get_percentage_full(), 60)

	def test_check_in(self):
		l = Location(location_name = "Test Library")
		l.clear_votes()
		l.check_in(50)
		self.assertEqual(l.get_percentage_full(), 50)

	def test_check_in_average(self):
		l = Location(location_name = "Test Library")
		l.clear_votes()
		l.check_in(50)
		l.check_in(25)
		l.check_in(75)
		self.assertEqual(l.get_percentage_full(), 50)

	def test_check_in_old_vote(self):
		l = Location(location_name = "Test Library")
		l.clear_votes()
		l.check_in(50)
		l.occupancy_list.append(l.manual_estimate_time(100, datetime.datetime(2000, 1, 1)))  #This sets the second check in value to a time in the past
		l.check_votes()
		self.assertEqual(l.get_percentage_full(), 50)

	def test_check_in_no_votes(self):
		l = Location(location_name="Test Library")
		l.clear_votes()
		self.assertEqual(l.get_percentage_full(), -1)

	def test_check_into(self):
		l = Location(location_name = "Test Library")
		l.clear_votes()
		s = Student(student_name = "Test Boi", student_computing_id = "tst1bi")
		s.check_into(l, 70)
		self.assertEqual(s.student_location, l.location_name)
		self.assertEqual(l.get_percentage_full(), 70)

	def test_check_into_multiple(self):
		l1 = Location(location_name = "Test Library")
		l2 = Location(location_name="Test Library 2")
		s = Student(student_name = "Test Boi", student_computing_id = "tst1bi")
		s.check_into(l1, 70)
		s.check_into(l2, 70)
		self.assertEqual(s.student_location, l2.location_name)

	def test_time_out(self):
		l = Location(location_name = "Test Library")
		l.clear_votes()
		s = Student(student_name = "Test Boi", student_computing_id = "tst1bi")
		s.check_into(l, 70)

		s.enter_time = datetime.datetime(2000, 1, 1)
		s.time_out()
		self.assertEqual(s.student_location, '')

# #Tests login
# class TestStudentLogin(TestCase):
#    #Test if student has credentials, then direct them to page
#    #Test if student has incorrect credentials, then prompt that login fields are incorrect or prompt to create an account
#    #Test if user tries to login while already logged in, prompt with invalid credentials
#    #Test that user cannot check in if not logged in




