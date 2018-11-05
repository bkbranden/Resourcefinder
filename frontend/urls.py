from django.urls import path
from . import views


urlpatterns = [
    path('', views.index),
    path('check_in/', views.check_in, name='check_in'),
    path('view_map/', views.view_map, name='view_map'),
    path('viewusers/', views.viewusers, name='viewusers'),
    path('sign_in/', views.signpost, name="sign_in"),
    path('check_in/check', views.logincheck)
]