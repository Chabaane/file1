from django.urls import path # type: ignore

from meeting.views import meeting_list



urlpatterns = [
   
     path('meeting/',meeting_list,name='meeting'),
   
]