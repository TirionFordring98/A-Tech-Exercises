// EXERCISE 1
function IsEven(number){
    return number % 2 === 0;
}
let givenNumber = 65;
let result = IsEven(givenNumber);
console.log(result);
// EXERCISE 2
function printOddNumbers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            console.log(numbers[i]);
        }
    }
}
const numbersArray = [22, 35, 39, 40, 41, 64];
printOddNumbers(numbersArray);
// EXERCISE 3
function checkExists(Array, Number) {
    for(let i = 0; i< Array.length; i++) {
        if (Array[i] === Number) {
            return true;
        }
    }
    return false;
}
console.log(checkExists([1,2,3], 2))
console.log(checkExists([1, 2, 3], 5))
// Exercise 4
const calculator = {
    add: function(x, y) {
        return x + y;
    },
    subtract: function(x, y) {
        return x - y;
    }
}
console.log(calculator.add(20, 40));
console.log(calculator.subtract(20, 40));
