from django.shortcuts import render
from datetime import datetime
# Create your views here.
def indexView(request):
    
   context = {
      
     'thedate': datetime.today(),
     'name': 'fawzi'
   }
   return render(request, 'index.html', context) 

