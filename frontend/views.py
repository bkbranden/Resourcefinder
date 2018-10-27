from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return render(request, 'frontend/index.html')

def check_in(request):
    return HttpResponse("Hello, world. Are you ready to check into a library?")

def view_map(request):
    mapbox_access_token = 'pk.eyJ1IjoiYWJzdXJkdmFjYXRpb24iLCJhIjoiY2puamxqNXV2MG4yeDNwbGs1MmozcDZvdCJ9.AWfhzxC6hwtwrq8yFbfBOA'
    return render(request, 'frontend/view_map.html', { 'mapbox_access_token': mapbox_access_token })