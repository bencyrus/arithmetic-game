from django.shortcuts import render

def game(request):
    return render(request, 'base/index.html')