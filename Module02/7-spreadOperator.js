const array1 = [1, 2, 3, 4]
const array2 = [5, 6,7, 8]

// array1.push(...array2)
// console.log(array1);

// clone 
const clonedArray = [...array1]

array1[0]= 10

console.log(array1, clonedArray);

