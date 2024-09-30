// Promises has three states
// 1. Pending state
// 2. Fullfill state
// 3. Reject state

let isCompleted = false;

let myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(isCompleted){
            resolve("I have completed");
        }else {
            reject("I have not completed")
        }
    }, 3000)
});

// Consume promise using then() and catch()
myPromise.then((res)=>console.log(res)).catch((err)=>console.log(err))

// Consume promise using aysnc / await
const myFunction = async () =>{
    try{
        let response = await myPromise
        console.log(response);        
    }catch(error){
        console.log(error);        
    }
}

myFunction()