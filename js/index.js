var number = document.getElementById('number');

function shop(index) {
  switch (index) {
    case 1:
        number.innerHTML = parseFloat(number.innerHTML) + 1.00;
      break;
    case 2:
        number.innerHTML = parseFloat(number.innerHTML) + 6.00;
      break;
    case 3:
        number.innerHTML = parseFloat(number.innerHTML) + 2.00;
      break;
    case 4:
      number.innerHTML= parseFloat(number.innerHTML) + 1.00;
      break;
    case 5:
        number.innerHTML = parseFloat(number.innerHTML) + 2.00;
      break;
    case 6:
        number.innerHTML = parseFloat(number.innerHTML) + 6.00;
      break;
    case 7:
        number.innerHTML = parseFloat(number.innerHTML) + 2.10;
      break;
    case 8:
        number.innerHTML = parseFloat(number.innerHTML) + 2.00;
      break;
    case 9:
        number.innerHTML = parseFloat(number.value) + 2.75;
      break;
    case 10:
        number.innerHTML = parseFloat(number.value) + 2.50;
      break;
    case 11:
        number.innerHTML = parseFloat(number.value) + 2.00;
      break;
    case 12:
        number.innerHTML = parseFloat(number.value) + 2.00;
      break;
    case 13:
        number.innerHTML= parseFloat(number.value) + 6.00;
      break;
    case 14:
        number.innerHTML= parseFloat(number.value) + 3.00;
      break;
    case 15:
        number.innerHTML = parseFloat(number.value) + 5.00;
      break;
    case 16:
        number.innerHTML = parseFloat(number.value) + 1.00;
      break;
    case 17:
        number.innerHTML = parseFloat(number.value) + 3.00;
      break;
    case 18:
        number.innerHTML = parseFloat(number.value) + 2.00;
      break;
    default:
      // Do nothing if the index is not valid
      break;
  }
}





function home(){

    window.location.href='index.html';
}


function login(){

    window.location.href='sign,log.html';
}












