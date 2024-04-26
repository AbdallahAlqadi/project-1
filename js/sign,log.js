var username=document.getElementById('username');
var email=document.getElementById('email');
var password=document.getElementById('password');
var form1=document.getElementById('form1');

var userDataFromStorage = JSON.parse(localStorage.getItem('Data'));

var alluser = userDataFromStorage || [];

form1.addEventListener('submit',function(e){
    e.preventDefault()


    var userData = {
        username: username.value,
        email: email.value,
        password: password.value,  
    };

    alluser.push(userData);
    localStorage.setItem('Data', JSON.stringify(alluser));


});


// Login

var formLogin = document.getElementById('formlogin'); 
var emailLogin = document.getElementById('emaillogin');
var passwordLogin = document.getElementById('passwordlogin');

formLogin.addEventListener('submit', function(event) { 
  event.preventDefault(); 

  var allUsers = JSON.parse(localStorage.getItem('Data')); 

  if (!allUsers) { 
    alert('No user data found in localStorage.');
    return; 
  }

  for (var i = 0; i < allUsers.length; i++) {
    if (allUsers[i].email === emailLogin.value && allUsers[i].password === passwordLogin.value) {
      console.log('Login successful!');
      localStorage.setItem('loginUser', JSON.stringify(allUsers[i]));
      window.location.href = 'index.html';
      return; 
    }
  }

  console.log('Invalid email or password.');
  alert('Invalid email or password.');
});



