"use strict";

//zadanie z łączenia stringów - zadanie mówi, by nie używać '+', join lub cancat. Zatem jak?  niestety 

var one = "hello";
var two = "world";
console.log(one + two);

// zadanie z mnożenia liczb

var x = prompt('liczba') || 1;
var y = prompt('liczba') || 1;

var multiply = function multiply(x, y) {
   return x * y;
};

alert('iloczyn podanych liczb to ' + multiply(x, y));
console.log(multiply(x, y));

// zadanie liczenie średniej - niby działa, ale coś mi mówi, że nie o to chodzi

var numbers = [2, 4, 5, 6, 8, 3, 2, 4, 7];
var first = numbers[0],
    second = numbers[1],
    third = numbers[2],
    rest = numbers.slice(3);

var average = function average(numbers) {
   return (first + second + third) / (numbers.length - rest.length);
};

console.log(average(numbers));

// zadanie 4 - liczenie średniej ocen z tablicy

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

//??????????


// 

var table = [1, 4, 'Iwona', false, 'Nowak'];

var fourth = table[0],
    fifth = table[1];

var names = function names(table) {
   return console.log(names(table));
};

console.log(names(table));

// istny cyrk
