// const burger = true;
// const fries = true;

// if (burger && fries) {
//     console.log('Ya sit');
// }   else {
//     console.log('Chtoto poshlo ne tak');
// }

// console.log((burger && fries));

// Ya sit
//true


// const burger = true;
// const fries = false;

// if (burger && fries) {
//     console.log('Ya sit');
// }   else {
//     console.log('Chtoto poshlo ne tak');
// }

// console.log((burger && fries));

//Chtoto poshlo ne tak
//false


// const burger = 2;
// const fries = 1;

// if (burger === 3 && fries === 1) {
//     console.log('Vse siti');
// } else {
//     console.log('Uhodim');
// }

//Uhodim


// console.log( true || true );   // true
// console.log( false || true );  // true
// console.log( true || false );  // true
// console.log( false || false ); // false

// if (1 || 0) { // работает как if( true || false )
//     console.log( 'truthy!' );
// }


// let hour = 10;

// if (hour < 9 || hour > 18) {
//     console.log('office closed');
// } else {
//     console.log('office open');
// }


// let currentUser = undefined;
// let defaultUser = null;

// let name = currentUser || defaultUser || "unnamed";

// console.log( name ); // выбирается "John" – первое истинное значение

// let x = 1;

// if (x | true) {
// console.log(x); // undefined, потому что (x = 1) не вычисляется
// }

// console.log( !!"non-empty string" ); // true
// console.log( !null ); // false

// let age = 1;
// if (age >= 14 && age <= 90) {
//     console.log('vse ok');
// }




"use strict";

let userName = prompt("Кто там?", '');

if (userName === 'Админ') {

  let pass = prompt('Пароль?', '');

  if (pass === 'Я главный') {
    alert( 'Здравствуйте!' );
  } else if (pass === '' || pass === null) {
    alert( 'Отменено' );
  } else {
    alert( 'Неверный пароль' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Отменено' );
} else {
  alert( "Я вас не знаю" );
}



