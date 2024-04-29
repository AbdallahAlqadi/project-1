var number = document.getElementById('number');
var cardbody=document.getElementById('CardBody');

function shop(index) {
  switch (index) {
    case 1:
        number.innerHTML = parseFloat(number.innerHTML) + 3.00;
      break;
    case 2:
        number.innerHTML = parseFloat(number.innerHTML) + 2.00;
      break;
    case 3:
        number.innerHTML = parseFloat(number.innerHTML) + 2.50;
      break;
    case 4:
      number.innerHTML= parseFloat(number.innerHTML) + 5.00;
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
      // Do nothing if the index is not valid
      break;
  }
 
}

function addCard() {

  if (typeof localStorage !== 'undefined') {
   
    var cards = JSON.parse(localStorage.getItem('storedCards')) || [];


    var tagTotal = document.createElement('span');
    tagTotal.className = 'card-total';
    tagTotal.innerHTML = 'Total : ';

    var total = document.createElement('a');
    total.className = 'primary';
    total.innerHTML = number.innerHTML;

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

function Delete(){
  
}


function home(){

    window.location.href='index.html';
}


function login(){

    window.location.href='sign,log.html';
}









