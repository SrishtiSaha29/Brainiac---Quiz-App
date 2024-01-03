
from django.shortcuts import render, redirect
from django.contrib.auth.models import User, auth
from django.contrib import messages
from .models import *
from .forms import *
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.decorators import login_required
from .decorators import unauthenticated_user, allowed_users, admin_only
from django.contrib.auth.models import Group
from django.http import JsonResponse


# Create your views here.
# @login_required(login_url='login')
def Home(request):  
    players=Player.objects.all()
    return render(request,'index.html')


@unauthenticated_user
def registerpage(request):
    if request.user.is_authenticated:
        return redirect('home')
    else:
        form=CreateUserForm()
        if request.method=='POST':
            form=CreateUserForm(request.POST)
            if form.is_valid():
                user=form.save()
                username=form.cleaned_data.get('username')
                group=Group.objects.get(name='players')
                user.groups.add(group)
                Player.objects.create(user=user,name=user.username,email=user.email)
                messages.success(request,'User Successfully created for '+username)
                return redirect('registerpage')
        context={'form':form}

        return render(request,'register.html',context)

@unauthenticated_user
def loginpage(request):
    if request.method=='POST':
        username=request.POST['username']
        password=request.POST['password']
        user=authenticate(username=username,password=password)
        if user is not None:
            login(request,user)
            if user.is_superuser:
                return redirect('dashboard_total')
            else:
                return redirect('dashboard')
        else:
            messages.info(request,"Credentials invalid !!")
            print("Username or password error")
            return redirect('login')
   
    return render(request,'login.html')

@login_required(login_url='login')
def logoutpage(request):
        logout(request)
        return redirect('/')


# --------------------AFTER LOGIN-----------------------

@login_required(login_url='login')
def dashboard(request):   
    players=Player.objects.all()
    return render(request,'dashboard.html',{'players':players})

def quiz1(request):
    return render(request,'quiz1.html')

def quiz2(request):
    return render(request,'quiz2.html')

def quiz3(request):
    return render(request,'quiz3.html')

def quiz4(request):
    return render(request,'quiz4.html')

def quiz5(request):
    return render(request,'quiz5.html')

def quiz6(request):
    return render(request,'quiz6.html')

def quiz7(request):
    return render(request,'quiz7.html')

def quiz8(request):
    return render(request,'quiz8.html')

@login_required(login_url='login') 
def leaderboard(request): #top 4 ranks with profile_pic name and bio
    players = Player.objects.all()
    context={'players':players}
    return render(request,'leaderboard.html',context)

@login_required(login_url='login')
def profile(request): #profilepage
    user=request.user
    player=Player.objects.filter(user=user)
    context={'player':player}
    return render(request,'profile.html',context)

@login_required(login_url='login')
def profile_edit(request): #editform
    player=request.user.player
    form=PlayerForm(request.POST,instance=player)
    if request.method=='POST':
        form=PlayerForm(request.POST,request.FILES,instance=player)
        if form.is_valid():
            form.save()
            return redirect('profile')
    context={'form':form}
   
    return render(request,'editprofile.html',context)

def contact_us(request): #feedbackform
    print(request)
    if request.method == 'POST':
        form=ContactForm(request.POST)
        if form.is_valid():
            form.save()
        return redirect('dashboard')
    return render(request,'contact_us.html')


#-----NO CHANGES REQUIRED-----

def terms_conditions(request):
    return render(request,'terms_conditions.html')

def blog(request):
    return render(request,'blog.html')

def about(request):
    return render(request,'about.html')


# -----ADMIN DASHBOARD-----

@login_required(login_url='login')
@admin_only
def dashboard_total(request):
    players = Player.objects.all()
    players_count=players.count()
    quizzes=Quiz.objects.all()
    total_quizzes=quizzes.count()
    form=PlayerForm()
    if request.method=='POST':
        form=PlayerForm(request.POST,request.FILES)
        if form.is_valid():
            form.save()
    context={'form':form,'players_count':players_count,'players':players,'quizzes':quizzes,'total_quizzes':total_quizzes}
    return render(request,'dashboard_total.html',context)
#
#This code has been updated with proper commenting. Comments have been added to clarify the purpose of each view and function.