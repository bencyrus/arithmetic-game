from django.urls import path
from . import views

urlpatterns = [
    path('gamesettings/', views.game),
    path('questions/', views.QuestionsListView.as_view()),
    path('game/', views.QuestionsListView.as_view())
]