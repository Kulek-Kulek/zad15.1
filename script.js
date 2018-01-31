//zadanie z łączenia stringów  
 
    const one = "hello";
    const two = "world"
    console.log(`${one} ${two}`);



// zadanie: mnożenie liczb

const x = prompt('liczba') || 1
const y = prompt('liczba') || 1


const multiply = (x, y) => x * y



alert('iloczyn podanych liczb to ' + multiply(x,y))
console.log(multiply(x,y))




// zadanie liczenie średniej 

const numbers = [1, 3, 6, 6, 8, 2, 15, 70]
const average = numbers.reduce((accumulate,current)=>accumulate+current, 0) / numbers.length

console.log(average);


// zadanie 4 - liczenie średniej ocen z tablicy


const av = (...grades)=>grades.reduce((accumulate,current)=>accumulate+current, 0) / grades.length

console.log(av(1,3,5,8,45,9,2));

//zad 5

const table = [1, 4, 'Iwona', false, 'Nowak']

const [jeden, four, firstName, boolean, lastName] = table;


console.log(firstName, lastName)










