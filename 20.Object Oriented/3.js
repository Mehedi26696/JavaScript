// let myName = "mehedi     "
// let mychannel = "tea     "

// console.log(myName.trueLength());


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.mehedi = function(){
   console.log(`mehedi is present in all objects`);
}

Array.prototype.heymehedi = function(){
    console.log(`mehedi says hello`);
}

heroPower.mehedi()  // mehedi is present in all objects
myHeros.mehedi() // mehedi is present in all objects
myHeros.heymehedi() // mehedi says hello
// heroPower.heymehedi() // Error because heymehedi is not a function of heroPower

//inheritance

const User = {
    name: "tea",
    email: "tea@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

//Teacher.__proto__ = User

// // modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Deathaurlife     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
 }

anotherUsername.trueLength()
"mehedi".trueLength()
"iceTea".trueLength()