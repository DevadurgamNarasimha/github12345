// Exercise 1: Square each number in the array
const numbers1 = [2, 3, 4, 5];
const squares = numbers1.map(num => num * num);
console.log('Squares:', squares); // Expected Output: [4, 9, 16, 25]

// Exercise 2: Filter even numbers from the array
const numbers2 = [1, 2, 3, 4, 5, 6];
const evens = numbers2.filter(num => num % 2 === 0);
console.log('Even Numbers:', evens); // Expected Output: [2, 4, 6]

// Exercise 3: Sum all elements in the array
const numbers3 = [5, 10, 15, 20];
const sum = numbers3.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log('Sum:', sum); // Expected Output: 50

// Exercise 4: Filter even numbers, square them, and sum the squares
const numbers4 = [1, 2, 3, 4, 5];
const sumOfSquares = numbers4
    .filter(num => num % 2 === 0)  // Filter even numbers
    .map(num => num * num)         // Square the even numbers
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0); // Sum the squares
console.log('Sum of Squares of Even Numbers:', sumOfSquares); // Expected Output: 20