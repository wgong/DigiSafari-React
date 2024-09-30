const person = {
    firstName: 'John',
    lastName: 'Peter',
    age: 25,
    fullName: function(){
        console.log(this.firstName, this.lastName);        
    }
    // Arrow function is not useful to get this context
    // fullName: ()=>{
    //     console.log(this.firstName, this.lastName);        
    // }
}

person.fullName()

console.log(person);

// Access with dot notation
console.log("First name: ", person.firstName);

// Access with square bracket notation
console.log("Last name: ", person['lastName']);

