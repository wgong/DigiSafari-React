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

    const constVariable = "Fixed value"
    console.log(constVariable);    
    // constVariable = "Unable to change the value" //Not possible to chang the value. 
}
// console.log(blockVariable); //Not Possible outside the block
// console.log(constVariable);   //Not Possible outside the block
