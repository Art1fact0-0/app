const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('Насколько вы его оцените?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('Насколько вы его оцените?', '');
      
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);



// 'use strict';

// let request = prompt('Who are you?', '');

// if (request == 'admin') {
//     let password = prompt ('Enter password', '');
// }

// if (password === 'main', '') {
//     alert('Hi admin!');
// }

// 'use strict';

// let userName = prompt('Who are you', '');

// if (userName === 'Admin') {
    
//     let pass = prompt('Enter password', '');

//     if (pass === 'main') {
//         alert('Hi admin');
//     } else if (pass === '' || pass === null) {
//         alert('Canceled');
//     } else {
//         alert('Wrong password');
//     }

// } else if (userName === '' || userName === null) {
//     alert('Canceled');
// } else {
//     alert('This username is not exist, please check if login is correct and try again');
// }

// "use strict";

// let request = prompt('Entere number', '');

// if (request == 100 || request > 100) {
//     alert('Welcome');
// } else if (request <= 100 ) {
//     alert('Wrong number');
// } else if (request === null || request === '') {
//     alert('Canceled');
// }





