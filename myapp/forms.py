from django.forms import ModelForm
# from .models import *
# quiz_profile

from django.contrib.auth.forms import UserCreationForm

from django.contrib.auth.models import User

from .models import *



# class ProfileForm(forms.ModelForm):
#     class Meta:
#         model=quiz_profile
#         fields = "__all__"



class ContactForm(ModelForm):
    class Meta:
        model=ContactUs
        fields="__all__"


class CreateUserForm(UserCreationForm):
    class Meta:
        model=User
        fields=['username','email','password1','password2']

class PlayerForm(ModelForm):
    class Meta:
        model=Player
        fields='__all__'
        exclude=['user']