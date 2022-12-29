// "use strict";

// let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }

// while (num < 55);

// for (let i = 1; i < 15; i++) {
//     if (i == 116) {
//         break;
//     }
//     console.log(i);
// }


// let i = 0;

// while (i <= 12) {
//     console.log(i);
//     i++;
// }

// let i = 0;
// do {
//   console.log( i );
//   i++;
// } while (i < 3);

// for (let i = 0; i < 3; i++) {
//     console.log(i); // 0, 1, 2
// }

// for (let i = 0; i < 10; i++) {

//     if (i % 2) {
//       console.log( i );
//     }
  
//   }


// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }    
// }


let result = '';
const length = 7;

for (let i = 1; i < length; i++) {

    for (let j = 0; j < i; j++) {
        result += '*';
    }

    result += '\n';
}

console.log(result);

// *
// **
// ***
// ****
// *****
// ******


// first: for (let i = 0; i < 3; i++) {
//     console.log('First level: ${i}');
//     for (let j = 0; j < 3; j++) {
//         console.log('Secont level: ${j}');
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) continue first; 
//             console.log('Third level: ${k}');
//         }
//     }
// }     

// let i = 0;
// while (++i < 5) console.log( i );

// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }


// Замените for на while
// важность: 5
// Перепишите код, заменив цикл for на while, без изменения поведения цикла.

// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }
// решение
// let i = 0;
// while (i < 3) {
//   alert( `number ${i}!` );
//   i++;
// }

let request = prompt('Entere number', '');

if (request === 100 || request > 100) {
    alert('Welcome');
} else if (request <= 100) {
    alert('Wrong number');
} else if (request == null || request == '') {
    alert('Canceled');
}

