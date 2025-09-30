from pages.views import indexView
from django.urls import path

urlpatterns = [
    path('index/', indexView, name='index'),
]