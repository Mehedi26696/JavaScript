//keys,values

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

//console.log(Object.keys(JsUser))  //It return a array so we can itterate a loop in this keys

//console.log(Object.values(JsUser))

//console.log(Object.entries(JsUser))

console.log(JsUser.hasOwnProperty("id"))
console.log(JsUser.hasOwnProperty("new"))