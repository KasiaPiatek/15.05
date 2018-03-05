const x = 'Hello';
const y = 'World';


console.log(`${x} ${y}`);



..............
/* const multiply = (name = 1) => console.log(`5 ${name}`); */

const number = (x, y = 3) => x * y

console.log(multiply(8,9));
..............
const average = (...rest) => rest.reduce((a,b) => a + b, 0)/rest.length;
average();



...................

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]

.........

const name = [1, 4, 'Iwona', false, 'Nowak']
const [ , , firstName, , lastName] = name;
console.log(firstName, lastName);
