from django.test import TestCase
from django.test import Client
import datetime
from .models import *
from .views import *


#Tests if client can access the site
class TestAccess(TestCase):
    def test_checkin_is_loaded(self):
        response = self.client.get('')
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
<<<<<<< HEAD
class TestCheckin(TestCase):
=======
class TestCheckingMembers(TestCase):
>>>>>>> aaf302d5078a68c90ddaab8e72d60990fda7a682
	def test_check_in(self):
		l = Location(location_name = "Test Library", maximum_capacity = 50)
		l.check_in()
		self.assertEqual(l.current_occupancy, 1)
<<<<<<< HEAD

#Tests if Location.check_out() works properly
class TestCheckout(TestCase):
=======
	
>>>>>>> aaf302d5078a68c90ddaab8e72d60990fda7a682
	def test_check_out(self):
		l = Location(location_name = "Test Library", maximum_capacity = 50, current_occupancy = 1)
		l.check_out()
		self.assertEqual(l.current_occupancy, 0)

	#Edge case scenario (check out when current_occupancy = 0)
	def test_check_out_edge(self):
		l = Location(location_name = "Test Library", maximum_capacity = 50, current_occupancy = 0)
		l.check_out()
		self.assertEqual(l.current_occupancy, 0)

<<<<<<< HEAD
#Tests if Location.get_percentage_full() works properly
class TestGetPercentageFull(TestCase):
	def test_get_percentage_full(self):
		l = Location(location_name = "Test Library", maximum_capacity = 50, current_occupancy = 20)
		self.assertEqual(l.get_percentage_full(), 20/50)

#Tests student check in
class TestStudentCheckInto(TestCase):
=======
	def test_get_percentage_full(self):
		l = Location(location_name = "Test Library", maximum_capacity = 50, current_occupancy = 20)
		self.assertEqual(l.get_percentage_full(), 20/50)
	
>>>>>>> aaf302d5078a68c90ddaab8e72d60990fda7a682
	def test_check_into(self):
		l = Location(location_name = "Test Library", maximum_capacity = 50)
		s = Student(student_name = "Test Boi", student_computing_id = "tst1bi")
		s.check_into(l)
		self.assertEqual(s.student_location, l.location_name)
		self.assertEqual(l.current_occupancy, 1)
<<<<<<< HEAD

#Tests student time out after 2 hours (*Assumes TestStudentCheckInto passes)
class TestStudentTimeOut(TestCase):
=======
	
>>>>>>> aaf302d5078a68c90ddaab8e72d60990fda7a682
	def test_time_out(self):
		l = Location(location_name = "Test Library", maximum_capacity = 50)
		l.save()
		s = Student(student_name = "Test Boi", student_computing_id = "tst1bi")
		s.check_into(l)
		
		s.enter_time = datetime.datetime(2000, 1, 1)
		s.time_out()
		self.assertEqual(s.student_location, '')
<<<<<<< HEAD
		self.assertEqual(l.current_occupancy, 0)
=======
		self.assertEqual(l.current_occupancy, 1)
>>>>>>> aaf302d5078a68c90ddaab8e72d60990fda7a682


##class CheckForCredentials(TestCase):
##    def setUp(self):
##	#Do things
##
##    def test_check_for_credentials(self):
##	#Do more things
##
##
##





