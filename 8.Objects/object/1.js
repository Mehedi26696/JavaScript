
//object creation 2 types
// literal and constructor
// in constructor singleton happens



// constructor method
//Object.create



//Objects Literals

const mySym = Symbol("key1")

const JsUser = {
    name : "mehedi",
    "full name": "Mehedi Hasan",
    [mySym]: "mykey1",
    id : 3456,
    age : 25,
    location : "Dhaka",
    email : "abc@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["monday","saturday"]
}

console.log(JsUser)

//accessing
//system-1
//console.log(JsUser.email)

//system-2
//console.log(JsUser["email"])

//console.log(JsUser["full name"])  //system-1 is not possible in that case

//symbol access
//console.log(JsUser[mySym])

//value change
//JsUser.email = "feuiw@gmail.com"

//console.log(JsUser["email"])

//value lock

Object.freeze(JsUser)

JsUser.id = 34
JsUser.location ="Madaripur"

console.log(JsUser)