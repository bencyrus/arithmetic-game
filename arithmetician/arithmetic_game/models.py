from django.db import models

class QuestionsList(models.Model):
    addExists = models.BooleanField()
    rangeAddNum11 = models.IntegerField(null=True)
    rangeAddNum12 = models.IntegerField(null=True)
    rangeAddNum21 = models.IntegerField(null=True)
    rangeAddNum22 = models.IntegerField(null=True)

    mulsExists = models.BooleanField()
    rangeMulNum11 = models.IntegerField(null=True)
    rangeMulNum12 = models.IntegerField(null=True)
    rangeMulNum21 = models.IntegerField(null=True)
    rangeMulNum22 = models.IntegerField(null=True)
    
    duration = models.IntegerField()

    def __str__(self):
        return 'Question List {}'.format(self.id)

    # oSign = models.CharField(max_length=1)
    # answer = models.IntegerField() 