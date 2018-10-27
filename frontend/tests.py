from django.test import TestCase
from django.test import Client
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


##class CheckForCredentials(TestCase):
##    def setUp(self):
##	#Do things
##
##    def test_check_for_credentials(self):
##	#Do more things
##
##
##
##class CheckOccupancyCount(TestCase):
##    def check_in_empty_room(self):
##	#Room count = 0
##	#check_in()
##	#Test(Room count == 1)
##
##    def check_out_room(self):
##	#Room count = 10
##	#check_out()
##	#Test(Room count == 9)



