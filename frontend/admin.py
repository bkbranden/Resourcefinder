from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import User

# Register your models here.
from .models import Location, Student

admin.site.register(Location)
admin.site.register(Student, UserAdmin)

