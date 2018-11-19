from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect
from .models import Student, Location


from django.contrib.auth import authenticate, login, logout

def index(request):
    return render(request, 'frontend/index.html')

def check_in(request):

    return render(request,'frontend/check_in.html')

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
            return HttpResponseRedirect('/')
    else:
        return render(request, 'frontend/index.html')

def view_map(request):
    locations = Location.objects.all()
    mapbox_access_token = 'pk.eyJ1IjoiYWJzdXJkdmFjYXRpb24iLCJhIjoiY2puamxqNXV2MG4yeDNwbGs1MmozcDZvdCJ9.AWfhzxC6hwtwrq8yFbfBOA'
    return render(request, 'frontend/view_map.html', { 'mapbox_access_token': mapbox_access_token, 'locations': locations })

def viewusers(request):
    students = Student.objects.all()
    return render(request, 'frontend/viewusers.html', {'students': students})

def signpost(request):
    if(request.method == "POST"):
        username = request.POST.get("username")
        pwd= request.POST.get("password")
        email = request.POST.get('email')
        if(username == "" or pwd == "" or email == ""):
            return render(request, "frontend/signup.html", {'messsage': "Please fill out all the information"})
        sendData = Student.objects.create_user(username, email, pwd)
        sendData.student_name = username
        sendData.save()
        return HttpResponseRedirect('frontend/check_in.html')
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


