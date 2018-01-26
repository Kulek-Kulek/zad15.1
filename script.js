//zadanie z łączenia stringów - zadanie mówi, by nie używać '+', join lub cancat. Zatem jak?  niestety 
 
    const one = "hello";
    const two = "world"
    console.log(one + two);



// zadanie z mnożenia liczb

const x = prompt('liczba') || 1
const y = prompt('liczba') || 1


const multiply = (x, y) => x * y



alert('iloczyn podanych liczb to ' + multiply(x,y))
console.log(multiply(x,y))




// zadanie liczenie średniej - niby działa, ale coś mi mówi, że nie o to chodzi

const numbers = [2,4,5,6,8,3,2,4,7];
const [first, second, third, ...rest] = numbers;
const average = (numbers) => (first + second + third) / (numbers.length - rest.length)

console.log(average(numbers))


// zadanie 4 - liczenie średniej ocen z tablicy

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]

//??????????


// 

const table = [1, 4, 'Iwona', false, 'Nowak']

const [fourth, fifth] = table;
const names = (table) => console.log(names(table))

console.log(names(table))

// istny cyrk








