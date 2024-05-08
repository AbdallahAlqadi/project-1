var number = document.getElementById('number');
var cardbody=document.getElementById('CardBody');



var item1=0;
var item2=0;
var item3=0;
var item4=0;
var item5=0;
var item6=0;
var item7=0;
var item8=0;
var item9=0;
var item10=0;
var item11=0;
var item12=0;
var item13=0;
var item14=0;
var item15=0;
var item16=0;
var item17=0;
var item18=0;



function shop(index) {
  switch (index) {
    case 1:
        number.innerHTML = parseFloat(number.innerHTML) + 3.00;
        item1++;
      break;
    case 2:
        number.innerHTML = parseFloat(number.innerHTML) + 2.00;
        item2++;
      break;
    case 3:
        number.innerHTML = parseFloat(number.innerHTML) + 2.50;
        item3++;
      break;
    case 4:
      number.innerHTML= parseFloat(number.innerHTML) + 5.00;
      item4++;
      
      break;
    case 5:
        number.innerHTML = parseFloat(number.innerHTML) + 3.00;
      break;
    case 6:
        number.innerHTML = parseFloat(number.innerHTML) + 4.00;
      break;
    case 7:
        number.innerHTML = parseFloat(number.innerHTML) + 2.00;
      break;
    case 8:
        number.innerHTML = parseFloat(number.innerHTML) + 2.50;
      break;
    case 9:
        number.innerHTML = parseFloat(number.innerHTML) + 4.00;
      break;
    case 10:
        number.innerHTML = parseFloat(number.innerHTML) + 1.50;
      break;
    case 11:
        number.innerHTML = parseFloat(number.innerHTML) + 1.75;
      break;
    case 12:
        number.innerHTML = parseFloat(number.innerHTML) + 1.25;
      break;
    case 13:
        number.innerHTML= parseFloat(number.innerHTML) + 1.50;
      break;
    case 14:
        number.innerHTML= parseFloat(number.innerHTML) + 1.00;
      break;
    case 15:
        number.innerHTML = parseFloat(number.innerHTML) + 1.00;
      break;
    case 16:
        number.innerHTML = parseFloat(number.innerHTML) + 1.50;
      break;
    case 17:
        number.innerHTML = parseFloat(number.innerHTML) + 2.75;
      break;
    case 18:
        number.innerHTML = parseFloat(number.innerHTML) + 2.00;
      break;
    default:
   
      break;
  }
 
}

function addCard() {

  if (typeof localStorage !== 'undefined') {
   
    var cards = JSON.parse(localStorage.getItem('storedCards')) || [];


    var tagTotal = document.createElement('span');
    tagTotal.className = 'card-total';
    tagTotal.innerHTML = 'Total prices : ';

    var total = document.createElement('a');
    total.className = 'primary';
    total.innerHTML = (number.innerHTML+' JD');
    var contact = document.createElement('span');
    contact.className = 'card-body';
    contact.append(tagTotal);
    contact.append(total);

    var card = document.createElement('div');
    card.className = 'card';
    card.style = 'width: 18rem;';
    card.append(contact);

  
    cards.push(card.outerHTML);  

    localStorage.setItem('storedCards', JSON.stringify(cards));

   
    cardbody.append(card);
   
  } else {
    console.error('localStorage is not supported by this browser.');
  }
number.innerHTML=0.00;
}

window.onload = addCard;
window.onload = function() {
  if (typeof localStorage !== 'undefined') {
    var cards = JSON.parse(localStorage.getItem('storedCards')) || [];
    for (var i = 0; i < cards.length; i++) {
      cardbody.innerHTML += cards[i];  
    }
  }

};

//DELETE
function Delete() {
  if (typeof localStorage !== 'undefined') {
   
    var cards = JSON.parse(localStorage.getItem('storedCards')) || [];

 
    if (cards.length > 0) {
     
      cards.pop();

      
      localStorage.setItem('storedCards', JSON.stringify(cards));

     
      cardbody.lastElementChild.remove();
    } else {
      alert('No cards to delete.');
    }
  } else {
    console.error('localStorage is not supported by this browser.');
  }
}



function home(){

    window.location.href='index.html';
}


function login(){

    window.location.href='sign,log.html';
}

function profile(){
  window.location.href='profile.html';
}



function remove(){

  number.innerHTML=0.00;
}






