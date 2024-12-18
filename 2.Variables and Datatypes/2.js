//var vs Let vs const
//It is better to use let than var

//The var is the oldest keyword to declare a variable in JavaScript.
// It has the Global scoped or function scoped which means variables 
//defined outside the function can be accessed globally, and variables defined 
//inside a particular function can be accessed within the function. 



//The let keyword is an improved version of the var keyword.
//These variables has the block scope. It can’t be accessible outside the 
//particular code block ({block}).(it's like a local variable)

//The const keyword has all the properties that are the same as the let keyword, 
//except the user cannot update it and have to assign it with a value at the time of 
//declaration. if we declare const a=6; then we can't update a


let a=9;
var b=7;
console.log(a)
console.log(b)

{
    let a=67;
    var b=45;
    console.log(a)
    console.log(b)
}
console.log(a)
console.log(b)