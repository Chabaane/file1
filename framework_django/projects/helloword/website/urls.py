from django.urls import path

from website.views import about_view, home_view


urlpatterns = [
   
     path('about/',about_view,name='about'),
    path('home/',home_view,name='home')
]