

var number = document.getElementById('number');
var cardbody=document.getElementById('CardBody');



var item1=0; var item2=0; var item3=0; var item4=0; var item5=0;
var item6=0; var item7=0; var item8=0; var item9=0; var item10=0; var item11=0; var item12=0; 
var item13=0;var item14=0;var item15=0;var item16=0;var item17=0;var item18=0;



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
        item5++;
      break;
    case 6:
        number.innerHTML = parseFloat(number.innerHTML) + 4.00;
        item6++;
      break;
    case 7:
        number.innerHTML = parseFloat(number.innerHTML) + 2.00;
        item7++;
      break;
    case 8:
        number.innerHTML = parseFloat(number.innerHTML) + 2.50;
        item8++;
      break;
    case 9:
        number.innerHTML = parseFloat(number.innerHTML) + 4.00;
        item9++;
      break;
    case 10:
        number.innerHTML = parseFloat(number.innerHTML) + 1.50;
        item10++;
      break;
    case 11:
        number.innerHTML = parseFloat(number.innerHTML) + 1.75;
        item11++;
      break;
    case 12:
        number.innerHTML = parseFloat(number.innerHTML) + 1.25;
        item12++;
      break;
    case 13:
        number.innerHTML= parseFloat(number.innerHTML) + 1.50;
        item13++;
      break;
    case 14:
        number.innerHTML= parseFloat(number.innerHTML) + 1.00;
        item14++;
      break;
    case 15:
        number.innerHTML = parseFloat(number.innerHTML) + 1.00;
        item15++;
      break;
    case 16:
        number.innerHTML = parseFloat(number.innerHTML) + 1.50;
        item16++;
      break;
    case 17:
        number.innerHTML = parseFloat(number.innerHTML) + 2.75;
        item17++;
      break;
    case 18:
        number.innerHTML = parseFloat(number.innerHTML) + 2.00;
        item18++;
      break;
    default:
   
      break;
  }
 
}

function addCard() {

  if (typeof localStorage !== 'undefined') {
   
    var cards = JSON.parse(localStorage.getItem('storedCards')) || [];


//strar

//t1

var t1 = document.createElement('span');
    t1.className = 'card-t1';
   t1.innerHTML = 'Barbecue_salad : ';
    var n1= document.createElement('a');
   n1.className = 'primary1';
   n1.innerHTML = item1+`</br>`;

   //t2
   var t2 = document.createElement('span');
    t2.className = 'card-t2';
   t2.innerHTML = 'Salad_with_fish : ';
    var n2= document.createElement('a');
   n2.className = 'primary2';
   n2.innerHTML = item2+`</br>`;

   //t3
   var t3 = document.createElement('span');
    t3.className = 'card-t3';
   t3.innerHTML = 'Spinach_salad : ';
    var n3= document.createElement('a');
   n3.className = 'primary3';
   n3.innerHTML = item3+`</br>`;

   //t4
   var t4 = document.createElement('span');
    t4.className = 'card-t4';
   t4.innerHTML = 'Salamon_Salad : ';
    var n4= document.createElement('a');
   n4.className = 'primary4';
   n4.innerHTML = item4+`</br>`;

   //t5
   var t5 = document.createElement('span');
    t5.className = 'card-t5';
   t5.innerHTML = 'Pasta: ';
    var n5= document.createElement('a');
   n5.className = 'primary5';
   n5.innerHTML = item5+`</br>`;

   //t6
   var t6 = document.createElement('span');
    t6.className = 'card-t6';
   t6.innerHTML = 'Grilled_chicken : ';
    var n6= document.createElement('a');
   n6.className = 'primary6';
   n6.innerHTML = item6+`</br>`;

   //t7
   var t7 = document.createElement('span');
    t7.className = 'card-t7';
   t7.innerHTML = 'Pancakes : ';
    var n7= document.createElement('a');
   n7.className = 'primary7';
   n7.innerHTML = item7+`</br>`;

//t8
   var t8 = document.createElement('span');
    t8.className = 'card-t8';
   t8.innerHTML = 'Fruit_Salad : ';
    var n8= document.createElement('a');
   n8.className = 'primary8';
   n8.innerHTML = item8+`</br>`;
//t9
   var t9 = document.createElement('span');
    t9.className = 'card-t9';
   t9.innerHTML = 'Stack : ';
    var n9= document.createElement('a');
   n9.className = 'primary9';
   n9.innerHTML = item9+`</br>`;

   //t10
   var t10 = document.createElement('span');
    t10.className = 'card-t10';
   t10.innerHTML = 'Strawberry_Juice : ';
    var n10= document.createElement('a');
   n10.className = 'primary10';
   n10.innerHTML = item10+`</br>`;

   //t11
   var t11 = document.createElement('span');
    t11.className = 'card-t11';
   t11.innerHTML = 'Orange_Juice : ';
    var n11= document.createElement('a');
   n11.className = 'primary11';
   n11.innerHTML = item11+`</br>`;

   //t12
   var t12 = document.createElement('span');
    t12.className = 'card-t12';
   t12.innerHTML = 'Mango_Juice : ';
    var n12= document.createElement('a');
   n12.className = 'primary12';
   n12.innerHTML = item12+`</br>`;

   //13
   var t13 = document.createElement('span');
    t13.className = 'card-t13';
   t13.innerHTML = 'Pineapple_Juice : ';
    var n13= document.createElement('a');
   n13.className = 'primary13';
   n13.innerHTML = item13+`</br>`;

   
//t14
   var t14 = document.createElement('span');
    t14.className = 'card-t14';
   t14.innerHTML = 'Lemon_Juice : ';
    var n14= document.createElement('a');
   n14.className = 'primary14';
   n14.innerHTML = item14+`</br>`;

//t15
   var t15 = document.createElement('span');
    t15.className = 'card-t15';
   t15.innerHTML = 'Watermelon_Juice : ';
    var n15= document.createElement('a');
   n15.className = 'primary15';
   n15.innerHTML = item15+`</br>`;

//t16
   var t16 = document.createElement('span');
    t16.className = 'card-t16';
   t16.innerHTML = 'Guava_Juice : ';
    var n16= document.createElement('a');
   n16.className = 'primary16';
   n16.innerHTML = item16+`</br>`;

//t17
   var t17 = document.createElement('span');
    t17.className = 'card-t17';
   t17.innerHTML = 'Cocktail_Juice: ';
    var n17= document.createElement('a');
   n17.className = 'primary17';
   n17.innerHTML = item17+`</br>`;

//t18
   var t18 = document.createElement('span');
    t18.className = 'card-t18';
   t18.innerHTML = 'Avocado_Juice : ';
    var n18= document.createElement('a');
   n18.className = 'primary18';
   n18.innerHTML = item18+`</br>`;



   
   

//end    


    var tagTotal = document.createElement('span');
    tagTotal.className = 'card-total';
    tagTotal.innerHTML =    `_______________________________`  + `</br>` +'Total prices : ';
   

    var total = document.createElement('a');
    total.className = 'primary';
    total.innerHTML = (number.innerHTML+' JD');


    var contact = document.createElement('span');
    contact.className = 'card-body';

    contact.append(tagTotal);
    contact.append(total);
   
    //srat
    contact.append(t1);
    contact.append(n1);

    contact.append(t2);
    contact.append(n2);
    
    contact.append(t3);
    contact.append(n3);

    contact.append(t4);
    contact.append(n4);

    contact.append(t5);
    contact.append(n5);

    contact.append(t6);
    contact.append(n6);

    contact.append(t7);
    contact.append(n7);

    contact.append(t8);
    contact.append(n8);

    contact.append(t9);
    contact.append(n9);

    contact.append(t10);
    contact.append(n10);

    contact.append(t11);
    contact.append(n12);

    contact.append(t13);
    contact.append(n13);

    contact.append(t14);
    contact.append(n14);

    contact.append(t15);
    contact.append(n15);

    contact.append(t16);
    contact.append(n16);

    contact.append(t17);
    contact.append(n17);

    contact.append(t18);
    contact.append(n18);

    contact.append(tagTotal);
    contact.append(total);
    
//end
    var card = document.createElement('div');
    card.className = 'card';
    card.style = 'width: 18rem;';
    card.append(contact);

  
    cards.push(card.outerHTML);  

    localStorage.setItem('storedCards', JSON.stringify(cards));

   
    cardbody.append(card);
    
    number.innerHTML=double(0);
  } else {
    console.error('localStorage is not supported by this browser.');
  }


item1=0; item2=0;
item3=0;
item4=0; item5=0; item6=0; item7=0;
item8=0; item9=0;
item10=0; item11=0;
item12=0; item13=0; item14=0; item15=0;
item16=0; item17=0; item18=0;


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

  number.innerHTML=double(0);
}






