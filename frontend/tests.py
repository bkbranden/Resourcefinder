from django.test import TestCase
from django.test import Client
import datetime
from .models import *
from .views import *


#Tests if client can access the site
class TestAccess(TestCase):
    def test_checkin_is_loaded(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)

#Tests if client can access .../view_map/
class TestMapAccess(TestCase):
    def test_map_is_loaded(self):
        response = self.client.get('/view_map/')
        self.assertEqual(response.status_code, 200)

#Tests if client can access .../check_in/
class TestCheckinAccess(TestCase):
    def test_checkin_is_loaded(self):
        response = self.client.get('/check_in/')
        self.assertEqual(response.status_code, 200)

#Tests if Location.check_in() works properly
class TestCheckingMembers(TestCase):
	def test_check_in(self):
		l = Location(location_name = "Test Library", maximum_capacity = 50)
		l.check_in()
		self.assertEqual(l.current_occupancy, 1)
	
	def test_check_out(self):
		l = Location(location_name = "Test Library", maximum_capacity = 50, current_occupancy = 1)
		l.check_out()
		self.assertEqual(l.current_occupancy, 0)

	#Edge case scenario (check out when current_occupancy = 0)
	def test_check_out_edge(self):
		l = Location(location_name = "Test Library", maximum_capacity = 50, current_occupancy = 0)
		l.check_out()
		self.assertEqual(l.current_occupancy, 0)

	def test_get_percentage_full(self):
		l = Location(location_name = "Test Library", maximum_capacity = 50, current_occupancy = 20)
		self.assertEqual(l.get_percentage_full(), 20/50)
	
	def test_check_into(self):
		l = Location(location_name = "Test Library", maximum_capacity = 50)
		s = Student(student_name = "Test Boi", student_computing_id = "tst1bi")
		s.check_into(l)
		self.assertEqual(s.student_location, l.location_name)
		self.assertEqual(l.current_occupancy, 1)
	
	def test_time_out(self):
		l = Location(location_name = "Test Library", maximum_capacity = 50)
		l.save()
		s = Student(student_name = "Test Boi", student_computing_id = "tst1bi")
		s.check_into(l)
		
		s.enter_time = datetime.datetime(2000, 1, 1)
		s.time_out()
		self.assertEqual(s.student_location, '')
		self.assertEqual(l.current_occupancy, 1)


##class CheckForCredentials(TestCase):
##    def setUp(self):
##	#Do things
##
##    def test_check_for_credentials(self):
##	#Do more things
##
##
##





