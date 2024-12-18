//Arrow function

const test =()=>{
    let username = "Mehedi"
    console.log(this) //empty object
    console.log(this.username) //undefined
}

test()