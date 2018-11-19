from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect
from .models import Student, Location
<<<<<<< HEAD
=======
from .forms import UserForm
import json
from django.core.serializers.json import DjangoJSONEncoder
>>>>>>> cd7c48fda2d9c8f31b8f9b76aa2c63c8867ea2d9


from django.contrib.auth import authenticate, login, logout

def index(request):
    all_libraries = Location.objects.all().order_by('location_name')
    library_occupancies = {}
    for library in all_libraries:
        library_occupancies[library.location_name] = library.get_percentage_full()

    occupancies_json = json.dumps(library_occupancies)
    loaded_occupancies = json.loads(occupancies_json)
    print(occupancies_json)
    print(loaded_occupancies)
    mapbox_access_token = 'pk.eyJ1IjoiYWJzdXJkdmFjYXRpb24iLCJhIjoiY2puamxqNXV2MG4yeDNwbGs1MmozcDZvdCJ9.AWfhzxC6hwtwrq8yFbfBOA'
    return render(request, 'frontend/index.html', { 'mapbox_access_token': mapbox_access_token, 'all_libraries' : all_libraries, 'library_occupancies' : loaded_occupancies})

def check_in(request):

    return render(request,'frontend/check_in.html')
<<<<<<< HEAD

def logout_view(request):
    logout(request)
    request.session.flush()
    return render(request, "frontend/check_in.html")

def forgotpass(request):
    return render(request, 'frontend/index.html')

=======
    
   
>>>>>>> cd7c48fda2d9c8f31b8f9b76aa2c63c8867ea2d9
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

<<<<<<< HEAD
def view_map(request):
    locations = Location.objects.all()
    mapbox_access_token = 'pk.eyJ1IjoiYWJzdXJkdmFjYXRpb24iLCJhIjoiY2puamxqNXV2MG4yeDNwbGs1MmozcDZvdCJ9.AWfhzxC6hwtwrq8yFbfBOA'
    return render(request, 'frontend/view_map.html', { 'mapbox_access_token': mapbox_access_token, 'locations': locations })
=======
# def view_map(request):
#     all_libraries = Location.objects.all()

#     mapbox_access_token = 'pk.eyJ1IjoiYWJzdXJkdmFjYXRpb24iLCJhIjoiY2puamxqNXV2MG4yeDNwbGs1MmozcDZvdCJ9.AWfhzxC6hwtwrq8yFbfBOA'
#     return render(request, 'frontend/view_map.html', { 'mapbox_access_token': mapbox_access_token, 'all_libraries' : all_libraries, })
>>>>>>> cd7c48fda2d9c8f31b8f9b76aa2c63c8867ea2d9

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


