const myArray = [10, 20, 30, 40, 50, 45, 57]

console.log(myArray);

// Access a value
console.log(myArray[0]);

// Modify the array value
myArray[4]=500
console.log(myArray[4]);

// myArray[5]= 60
myArray.push(60)
console.log(myArray);

let present = myArray.includes(20)
console.log(present);

// Find
let result = myArray.find((num)=> num>100)
console.log(result);

// Map function with array
let doubled = myArray.map((num)=> num*2)
console.log(doubled);

// Filter

let evenNumbers = myArray.filter((num)=> num%2 == 0)
// console.log(evenNumbers);

// forEach
evenNumbers.forEach((num)=> console.log(num))







