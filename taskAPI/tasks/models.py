from django.db import models

# Create your models here.


class tasksModel(models.Model):
    title = models.CharField(max_length=128)
    description = models.TextField()
    status = models.BooleanField(default=False)

    def __str__(self) -> str:
        return self.title