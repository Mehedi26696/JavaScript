

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        // let error = true
        let error = false
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log("Error: ", error);
        console.log(error);
    }
}

consumePromiseFive()