//zadanie z łączenia stringów - zadanie mówi, by nie używać '+', join lub cancat. Zatem jak?  niestety 
 
    const one = "hello";
    const two = "world"
    console.log(`${one} ${two}`);



// zadanie z mnożenia liczb

const x = prompt('liczba') || 1
const y = prompt('liczba') || 1


const multiply = (x, y) => x * y



alert('iloczyn podanych liczb to ' + multiply(x,y))
console.log(multiply(x,y))




// zadanie liczenie średniej - niby działa, ale coś mi mówi, że nie o to chodzi

const numbers = [1, 3, 6, 6, 8, 2, 15, 70]
const average = numbers.reduce((acc,curr)=>acc+curr, 0) / numbers.length

console.log(average)


// zadanie 4 - liczenie średniej ocen z tablicy

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]
const av = (...grades)=>grades.reduce((acc,curr)=>acc+curr, 0) / grades.length

console.log(av)

//??????????


// 

const table = [1, 4, 'Iwona', false, 'Nowak']

const [jeden, four, firstName, boolean, lastName] = table;


console.log(firstName, lastName)

// istny cyrk








