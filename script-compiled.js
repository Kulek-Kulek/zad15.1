"use strict";

//zadanie z łączenia stringów  

var one = "hello";
var two = "world";
console.log(one + " " + two);

// zadanie: mnożenie liczb

var x = prompt('liczba') || 1;
var y = prompt('liczba') || 1;

var multiply = function multiply(x, y) {
   return x * y;
};

alert('iloczyn podanych liczb to ' + multiply(x, y));
console.log(multiply(x, y));

// zadanie liczenie średniej 

var numbers = [1, 3, 6, 6, 8, 2, 15, 70];
var average = numbers.reduce(function (accumulate, current) {
   return accumulate + current;
}, 0) / numbers.length;

console.log(average);

// zadanie 4 - liczenie średniej ocen z tablicy


var av = function av() {
   for (var _len = arguments.length, grades = Array(_len), _key = 0; _key < _len; _key++) {
      grades[_key] = arguments[_key];
   }

   return grades.reduce(function (accumulate, current) {
      return accumulate + current;
   }, 0) / grades.length;
};

console.log(av(1, 3, 5, 8, 45, 9, 2));

//zad 5

var table = [1, 4, 'Iwona', false, 'Nowak'];

var jeden = table[0],
    four = table[1],
    firstName = table[2],
    boolean = table[3],
    lastName = table[4];


console.log(firstName, lastName);
