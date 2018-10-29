from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from .models import Location

def index(request):
    return render(request, 'frontend/index.html')

def check_in(request):
    locations = Location.objects.all()
    return render(request, 'frontend/check_in.html', { 'locations': locations})

def view_map(request):
    mapbox_access_token = 'pk.eyJ1IjoiYWJzdXJkdmFjYXRpb24iLCJhIjoiY2puamxqNXV2MG4yeDNwbGs1MmozcDZvdCJ9.AWfhzxC6hwtwrq8yFbfBOA'
    return render(request, 'frontend/view_map.html', { 'mapbox_access_token': mapbox_access_token })