var Name=document.getElementById('Name');
var email=document.getElementById('email');
var password=document.getElementById('password');
var confpassword=document.getElementById('confpassword');
var phonenumber=document.getElementById('phonenumber');
var form2=document.getElementById('form2');

var userDataFromStorage = JSON.parse(localStorage.getItem('Data'));

var alluser = userDataFromStorage || [];

form2.addEventListener('submit',function(e){
    e.preventDefault()


    var userData = {
       Name: Name.value,
        email: email.value,
        password: password.value,  
        confpassword:confpassword.value,
        phonenumber:phonenumber.value
    };

    alluser.push(userData);
    localStorage.setItem('Data', JSON.stringify(alluser));
window.location.href='index.html'

});


// Login

var form1 = document.getElementById('form1'); 
var emaillogin = document.getElementById('emaillogin');
var passwordlogin = document.getElementById('passwordlogin');

form1.addEventListener('submit', function(event) { 
  event.preventDefault(); 

  var allUsers = JSON.parse(localStorage.getItem('Data')); 

  if (!allUsers) { 
    alert('No user data found in localStorage.');
    return; 
  }

  for (var i = 0; i < allUsers.length; i++) {
    if (allUsers[i].email == emaillogin.value && allUsers[i].password == passwordlogin.value) {
      alert('Login successful!');
      localStorage.setItem('loginUser', JSON.stringify(allUsers[i]));
      window.location.href = 'index.html';
      return; 
    }
  }

  
  alert('Invalid email or password.');}
);



