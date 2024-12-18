//An array in JavaScript is a collection of elements enclosed in square brackets. 
//Elements can be of any data type, including numbers, strings, and other arrays.

let arr=[1,"hello",[2,3]];
//lenght of an array
console.log(arr.length);
//print full array
console.log(arr);
//print element using index
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

console.log(typeof arr); //object


const arr2 = new Array(3,4,6,7,8)
console.log(arr2)


//includes
console.log(arr2.includes(2))