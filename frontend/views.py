from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect
from .models import Student, Location
from .forms import UserForm
from absurdvacations.settings import MAILJET_API_KEY, MAILJET_API_SECRET
from django.contrib.auth import authenticate, login, logout

from mailjet_rest import Client
mailjet = Client(auth=(MAILJET_API_KEY, MAILJET_API_SECRET), version='v3')



def index(request):
    return render(request, 'frontend/index.html')

def check_in(request):

    return render(request,'frontend/check_in.html')
   
def logout_view(request):
    logout(request)
    request.session.flush()
    return render(request, 'frontend/check_in.html')

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

    mapbox_access_token = 'pk.eyJ1IjoiYWJzdXJkdmFjYXRpb24iLCJhIjoiY2puamxqNXV2MG4yeDNwbGs1MmozcDZvdCJ9.AWfhzxC6hwtwrq8yFbfBOA'
    return render(request, 'frontend/view_map.html', { 'mapbox_access_token': mapbox_access_token })

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
                'Text-part': 'Click this link to reset your email! https://www.morning-wildwood-43683.herokuapp.com/changepassword',
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

def changepass(request):
    return render(request, 'frontend/changepass.html')