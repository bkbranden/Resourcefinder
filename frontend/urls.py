from django.urls import path
from . import views
from django.conf import settings

urlpatterns = [
    path('', views.check_in, name="checkin"),
    path('check', views.logincheck),
    path('view_map/', views.view_map, name='view_map'),
    path('sign_in/', views.signpost, name="sign_in"),
    path('logout', views.logout_view, name="logout"),
    path('index', views.index, name="index"),
    path('forgotpassword', views.forgotpassword, name="forgotpassword"),
    path('forgotpassword/emailsend', views.sendEmail, name="emailsend"),
    path('changepassword', views.changepass, name="changepass"),
    path('changepassword/change', views.changePassword),
    path('view_map', views.updateOccupancy, name="update"),
]
