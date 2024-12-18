//Summary

//Primitive data types

// 7 types: String, Number, Boolean, null ,undefined,Symbol,BigInt

//Reference (Non primitive)

// Array, Objects, Functions



//Symbol define
const id =Symbol('1234')

const anotherId = Symbol('1234') // it will create a new symbol

console.log(id === anotherId) //false 


//bigint

const bigNum = 16237512983572987518n

console.log(typeof bigNum) //bigint

console.log(bigNum)


// Stack(Primitive)  => copy
//Heap(Non-primitive) => reference

