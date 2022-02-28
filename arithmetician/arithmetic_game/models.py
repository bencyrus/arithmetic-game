from django.db import models

class QuestionsList(models.Model):
    addExists = models.BooleanField()
    rangeAddNum12 = models.IntegerField()
    rangeAddNum21 = models.IntegerField()
    rangeAddNum11 = models.IntegerField()
    rangeAddNum22 = models.IntegerField()

    mulsExists = models.BooleanField()
    rangeMulNum12 = models.IntegerField()
    rangeMulNum21 = models.IntegerField()
    rangeMulNum11 = models.IntegerField()
    rangeMulNum22 = models.IntegerField()
    
    duration = models.IntegerField()

    # oSign = models.CharField(max_length=1)
    # answer = models.IntegerField() 