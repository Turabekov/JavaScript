"use strict";
/* Задание на урок:
1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно */

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("How many films did you watch?", "");

    while (
        numberOfFilms == "" ||
        numberOfFilms == null ||
        isNaN(numberOfFilms)
    ) {
        numberOfFilms = +prompt("How many films did you watch?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("One of lastest watched film?", "").trim(),
            b = prompt("What is your rate for this film?", "");

        if (a != "" && b != "" && a != null && b != null && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log("done");
        } else {
            console.log("error");
            i--;
        }
    }
}

// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Watched quite a few films");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("You are a classic spectator");
    } else if (personalMovieDB.count >= 30) {
        console.log("You are a cinephile");
    } else {
        console.log("An error has occurred");
    }
}
// detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Your favorite genre is ${i}`);
    }
}
writeYourGenres();
