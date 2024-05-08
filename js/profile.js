var Name=document.getElementById('Name');
var email=document.getElementById('Email');
var password=document.getElementById('Password');
var confpassword=document.getElementById('Confpassword');
var phone=document.getElementById('Phone');


var profile = JSON.parse(localStorage.getItem('loginUser'));

Name.innerHTML=profile.Name;
email.innerHTML=profile.email;
password.innerHTML=profile.password;
confpassword.innerHTML=profile.confpassword;
phone.innerHTML=profile.phonenumber;