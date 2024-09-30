// Rest Parameters
function sum(...numbers){
    let result = 0
    for(let num of numbers){
        result += num
    }
    console.log(result);    
}

sum(10, 20)
sum(10, 20, 40, 50)