from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from .models import Student, Location
import json
from django.core.serializers.json import DjangoJSONEncoder
from django.views.decorators.csrf import csrf_exempt

from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from absurdvacations.settings import MAILJET_API_KEY, MAILJET_API_SECRET

from mailjet_rest import Client
mailjet = Client(auth=(MAILJET_API_KEY, MAILJET_API_SECRET), version='v3')

import json
from django.core import serializers
import re

@login_required(login_url='/')
def index(request):
    all_libraries = Location.objects.all().order_by('location_name')
    library_occupancies = {}
    for library in all_libraries:
        library_occupancies[library.location_name] = library.get_percentage_full()

    occupancies_json = json.dumps(library_occupancies)
    loaded_occupancies = json.loads(occupancies_json)
    mapbox_access_token = 'pk.eyJ1IjoiYWJzdXJkdmFjYXRpb24iLCJhIjoiY2puamxqNXV2MG4yeDNwbGs1MmozcDZvdCJ9.AWfhzxC6hwtwrq8yFbfBOA'
    return render(request, 'frontend/index.html', { 'mapbox_access_token': mapbox_access_token, 'all_libraries' : all_libraries, 'library_occupancies' : loaded_occupancies})

def check_in(request):

    return render(request,'frontend/check_in.html')

@login_required(login_url='/')
def logout_view(request):
    logout(request)
    request.session.flush()
    return render(request, "frontend/check_in.html")

def forgotpass(request):
    return render(request, 'frontend/index.html')

    
   

def logincheck(request):
    if(request.method == "POST"):
        username = request.POST.get('username')
        passwd = request.POST.get('password')
        user = authenticate(username=username, password= passwd)
        if user is not None:
            login(request, user)
            return render(request, 'frontend/index.html')
        else:
            return render(request, 'frontend/check_in.html', {'message': "Invalid Username or Password"})
    else:
        return render(request, 'frontend/index.html')

@login_required(login_url='/')
def view_map(request):
    libraries_json = serializers.serialize('json', Location.objects.all())
    getvalues = Location.objects.all()
    mapbox_access_token = 'pk.eyJ1IjoiYWJzdXJkdmFjYXRpb24iLCJhIjoiY2puamxqNXV2MG4yeDNwbGs1MmozcDZvdCJ9.AWfhzxC6hwtwrq8yFbfBOA'
    return render(request, 'frontend/view_map.html', { 'mapbox_access_token': mapbox_access_token, 'all_libraries' : libraries_json, 'locationvalues': getvalues})

@login_required(login_url='/')
@csrf_exempt
def updateOccupancy(request):
    libraries_json = serializers.serialize('json', Location.objects.all())
    getvalues = Location.objects.all()
    mapbox_access_token = 'pk.eyJ1IjoiYWJzdXJkdmFjYXRpb24iLCJhIjoiY2puamxqNXV2MG4yeDNwbGs1MmozcDZvdCJ9.AWfhzxC6hwtwrq8yFbfBOA'
    if(request.method == "POST"):
        occupancyvalue = request.POST.get('myRange')
        locationname = request.POST.get('location')
        rating = request.POST.get('ratingstars')
        locationupdate = Location.objects.get(location_name =locationname)
        locationupdate.check_in(int(occupancyvalue))
        locationupdate.add_rating(int(rating))
        updatedrating = locationupdate.get_rating()
        updatedValue = int(locationupdate.get_percentage_full())
        locationupdate.rating = updatedrating
        locationupdate.percent_full = updatedValue
        locationupdate.save()
        libraries_json = serializers.serialize('json', Location.objects.all())
        return render(request, 'frontend/view_map.html', { 'mapbox_access_token': mapbox_access_token, 'all_libraries' : libraries_json, 'locationvalues': getvalues})
    else:
        return render(request, 'frontend/view_map.html', { 'mapbox_access_token': mapbox_access_token, 'all_libraries' : libraries_json, 'locationvalues': getvalues})

def viewusers(request):
    students = Student.objects.all()
    return render(request, 'frontend/viewusers.html', {'students': students})
     
def signpost(request):
    if(request.method == "POST"):
        username = request.POST.get("username")
        pwd= request.POST.get("password")
        pwd2 = request.POST.get("re_pass")
        email = request.POST.get('email')
        if(Student.objects.filter(username=username)):
            return render(request, 'frontend/signup.html', {"message": "That user already exists!"})
        if(username == "" or pwd == "" or email == ""):
            return render(request, "frontend/signup.html", {'message': "Please fill out all the information"})
        if not(re.match(r'^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$', pwd)):
            return render(request, "frontend/signup.html", {"message": "You must include at least 1 uppercase letter, one number, and at least 8 characters long" })
        if (pwd != pwd2):
            return render(request, "frontend/signup.html", {"message": "The two passwords do not match!"})
        
        sendData = Student.objects.create_user(username, email, pwd)
        sendData.save()
        return HttpResponseRedirect('/')
    else:
        return render(request, 'frontend/signup.html')

def estimatecapacity(location, userestimate):
    model = Location
    library_name = location.check_in(userestimate)
    location.check_votes()


    return library_name


def getlibraries():
    Library_list = Location.objects.all()
    return Library_list

def forgotpassword(request):
    return render(request, 'frontend/forgotpassword.html')

def sendEmail(request):
    if(request.method == "POST"):
        email = request.POST.get("emailret")
        userEmail = Student.objects.filter(email=email)
        message = "Success!"
        if not userEmail:
            message = "Email not found"
            return render(request, 'frontend/forgotpassword.html', {'message': message})
        else:
            data = {
                'FromEmail': 'bkbrandenkim97@gmail.com',
                'FromName': 'Branden Kim',
                'Subject': 'Testing Reset Password',
                'Text-part': 'Click this link to reset your email! https://absurdvacations.herokuapp.com/changepassword',
                'Recipients': [
                                {
                                    "Email": email
                                }
                        ]
            }
            result = mailjet.send.create(data=data)
            return render(request, 'frontend/forgotpassword.html', {'message': message })
            
    else:
        return render(request, 'frontend/signup.html')

@login_required(login_url='/')
def changePassword(request):
    if request.method == 'POST':
        post_text = request.POST.get('the_post')
        username = request.POST.get('user')
        u = Student.objects.get(username=username)
        if u is not None:
            u.set_password(post_text)
            u.save()
            return render(request, 'frontend/check_in.html')
        else:
            return HttpResponseRedirect('/')
    else:
        return render(request, 'frontend/changepass.html')

@login_required(login_url='/')
def changepass(request):
    return render(request, 'frontend/changepass.html')

@csrf_exempt
def listresource(request, search):
    resources_json = serializers.serialize('json', Location.objects.filter(title_name__istartswith = search))
    return JsonResponse(resources_json, safe=False)

@csrf_exempt
def allresources(request):
    resources_json = serializers.serialize('json', Location.objects.all().order_by('pk'))
    return JsonResponse(resources_json, safe=False)