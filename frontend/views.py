from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect
from .models import Student
from .forms import UserForm

def index(request):
    return render(request, 'frontend/index.html')

def check_in(request):
   
    return render(request, 'frontend/check_in.html')

def view_map(request):
    mapbox_access_token = 'pk.eyJ1IjoiYWJzdXJkdmFjYXRpb24iLCJhIjoiY2puamxqNXV2MG4yeDNwbGs1MmozcDZvdCJ9.AWfhzxC6hwtwrq8yFbfBOA'
    return render(request, 'frontend/view_map.html', { 'mapbox_access_token': mapbox_access_token })

   

def posttest(request):
    username = request.POST.get("username")
    pwd= request.POST.get("password")
    sendData = Student(student_name = username, pwds =pwd)
    sendData.save()
    students = Student.objects.all()
    return render(request, 'frontend/viewusers.html', {'students': students})