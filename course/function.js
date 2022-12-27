"use strict";

if (3 == 3) {
    console.log('Right');
} else {
    console.log('Wrong');
}



// if (num <= 50) {
//     console.log('wrong');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Ok');
// }


// const number = 210;

// (number == 220) ? console.log('ok') : console.log('wrong');

const num = 50;

switch (num) {
    case 49:
        console.log('Neverno');
        break; 
    case 100:
        console.log('Neverno');
        break;
    case 50:
        console.log('Pravdivo');
        break;
    default:
        console.log('Ne v etot raz');
        break;           
}



let username = 'Vasya';

function showOutput() {
    let message = 'Privet ' + username;
    console.log(message)
}

showOutput();



let userName = 'Вася';

function showMessage() {
  userName = "Петя"; // (1) изменяем значение внешней переменной

  let message = 'Привет, ' + userName;
  console.log(message);
}

console.log( userName ); // Вася перед вызовом функции

showMessage();

console.log( userName ); // Петя, значение внешней переменной было изменено функцией



let userName = 'Вася';

function showMessage() {
  let userName = "Петя"; // объявляем локальную переменную

  let message = 'Привет, ' + userName; // Петя
  console.log(message);
}

// функция создаст и будет использовать свою собственную локальную переменную userName
showMessage();

console.log( userName ); // Вася, не изменилась, функция не трогала внешнюю переменную