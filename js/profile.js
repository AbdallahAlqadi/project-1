var fname=document.getElementById('name')
var email=document.getElementById('email')
var password=document.getElementById('Password')
var confpassword=document.getElementById('confPassword')
var phonenumber=document.getElementById('phonenumber')




var profile =JSON.parse(localStorage.getItem('loginUser'));

email.innerHTML=profile.email;
fname.innerHTML=profile.Name;
password.innerHTML=profile.password;
confpassword.innerHTML=profile.confpassword;
phonenumber.innerHTML=profile.phonenumber;
