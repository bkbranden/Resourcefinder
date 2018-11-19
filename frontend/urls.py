from django.urls import path
from . import views
from django.conf import settings

urlpatterns = [
    path('', views.check_in, name = "check_in"),
    path('index', views.logincheck),
    path('view_map/', views.view_map, name='view_map'),
    path('viewusers/', views.viewusers, name='viewusers'),
    path('sign_in/', views.signpost, name="sign_in"),
    path('logout', views.logout_view, name="logout"),
    path('forgot_password', views.forgotpass, name="forgot_password")
]
