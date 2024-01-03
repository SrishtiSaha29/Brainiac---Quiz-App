from django.db import models
from django.contrib.auth.models import User

# Create your models here.

# class quiz_profile(models.Model):
#     file=models.ImageField()
#     first_name=models.CharField(max_length=50)
#     last_name=models.CharField(max_length=50)
#     email=models.EmailField()
#     username=models.CharField(max_length=80)
#     location=models.CharField(max_length=50)
#     gender=models.CharField(max_length=20)
#     bio=models.TextField(max_length=200)
#     class Meta:
#         db_table='quiz_profile'




class ContactUs(models.Model):
    username = models.CharField(max_length=150)
    subject=models.CharField(max_length=200)
    message_text=models.TextField(max_length=500)

    
    class Meta:
        db_table='contact_us'



class Player(models.Model):
    user=models.OneToOneField(User,blank=True,null=True,on_delete=models.CASCADE,related_name='player')
    profile_pic=models.ImageField(default="default-avatar-profile.jpg",null=True,blank=True)
    name=models.CharField(max_length=200,null=True)
    last_name=models.CharField(max_length=200,null=True)
    email=models.EmailField(max_length=200,null=True)
    location=models.CharField(max_length=200,null=True)
    gender=models.CharField(max_length=200,null=True)
    bio=models.TextField(max_length=200,null=True)


    # name=models.CharField(max_length=200,null=True)
    # phone=models.CharField(max_length=200,null=True)
    
    
    # date_created=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Quiz(models.Model):
    title=models.CharField(max_length=300,null=False)

    def __str__(self):
        return self.title


#------------------for ref---------------------
# class UserRank(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE)
#     rank = models.IntegerField(null=True, blank=True)
#     total_score = models.IntegerField(null=True, blank=True)

#     def __str__(self):
#         return f"{self.rank}, {self.user.username}"