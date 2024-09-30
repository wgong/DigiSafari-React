// ES5 - Normal function with function keyword

function normalFunction(){
    console.log("This normal function");    
}

// Calling function
normalFunction()

// ES6 - Expression function

const expressionFunction = function(){
    console.log("This is expression function");    
}

expressionFunction()

// ES6 - Arrow function
const arrowFunction = () =>{
    console.log("THis is Arrow function");    
}

arrowFunction()

// With Parameters
// const add = (a, b)=>{
//     return a+b
// }

// with out return keyword
const add = (a, b)=> a+b

let result = add(10, 20)
console.log('Result: ', result);
