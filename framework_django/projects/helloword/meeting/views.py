from django.shortcuts import render # type: ignore

from meeting.models import Meeting

# Create your views here.
def meeting_list(request):
    
    meeting = Meeting.objects.all()
     
    return render(request, 'meetings.html', {"meeting": meeting})

