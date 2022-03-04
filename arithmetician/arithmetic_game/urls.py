from django.urls import path
from . import views

urlpatterns = [
    path('gamesettings/', views.game),
    path('game/', views.gametime)
]