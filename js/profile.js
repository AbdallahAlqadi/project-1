var fname=document.getElementById('name')
var email=document.getElementById('email')
var password=document.getElementById('Password')



var profile =JSON.parse(localStorage.getItem('loginUser'));

email.innerHTML=profile.email;
fname.innerHTML=profile.username;
password.innerHTML=profile.password;
