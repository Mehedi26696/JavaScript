//promise creation

const promiseOne = new Promise(function(resolve,reject) {
    // Do an async task
    //DB calls,cryptography,network calls
    setTimeout(function(){
        console.log('Async task is complete')
        resolve()  //used for connect resolve and then
    },1000)
})

//consume
//resolve connect with then

promiseOne.then(function(){
    console.log("Promise consumed")
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("asynce task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})
