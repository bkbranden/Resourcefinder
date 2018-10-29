from django.shortcuts import render, get_object_or_404
<<<<<<< HEAD
from django.http import HttpResponse
from .models import Location
=======
from django.http import HttpResponse, HttpResponseRedirect
from .models import Student
from .forms import UserForm
>>>>>>> aaf302d5078a68c90ddaab8e72d60990fda7a682

def index(request):
    return render(request, 'frontend/index.html')

def check_in(request):
<<<<<<< HEAD
    locations = Location.objects.all()
    return render(request, 'frontend/check_in.html', { 'locations': locations})
=======
   
    return render(request, 'frontend/check_in.html')
>>>>>>> aaf302d5078a68c90ddaab8e72d60990fda7a682

def view_map(request):
    mapbox_access_token = 'pk.eyJ1IjoiYWJzdXJkdmFjYXRpb24iLCJhIjoiY2puamxqNXV2MG4yeDNwbGs1MmozcDZvdCJ9.AWfhzxC6hwtwrq8yFbfBOA'
    return render(request, 'frontend/view_map.html', { 'mapbox_access_token': mapbox_access_token })

def viewusers(request):
    students = Student.objects.all()
    return render(request, 'frontend/viewusers.html', {'students': students})

# def get_user(request):
#     if (request.method == "POST"):
#         temp = request.POST.get("username", "")
#         # student_instance = Student.objects.update_or_create(student_name = request.POST['username'])
#         # student_instance.save()
#         # return HttpResponseRedirect("frontend/viewusers.html")
#     return HttpResponse(temp)
#     # return render(request, 'frontend/viewusers.html')