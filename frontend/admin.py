from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model

from .forms import CustomUserCreationForm, CustomUserChangeForm

# Register your models here.
from .models import Location, Student

class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = Student
    list_display = ['email', 'username',]

admin.site.register(Location)
admin.site.register(Student, UserAdmin)

