console.log("Welcome to JavaScript")
// ES5 - var keyword is used to create variables

var myVariable = "My Value"
console.log(myVariable);

// ES6 - let & const keyworks are introduced with block scope

// A Block in JS
{
    let blockVariable = "This is block variable"
    blockVariable = `modified with 
                    Multi line
                    code`
    console.log(blockVariable);
}
// console.log(blockVariable); 