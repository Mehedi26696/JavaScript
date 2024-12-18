//concat array


let arr1=[1,4,5,6];
let arr2=[3,8,9,2];
let arr3=[1,5,6,4];

let arr=arr1.concat(arr2,arr3);

//orginal array doesn't change
console.log(arr1);

//new array after concat
console.log(arr);

const newarr = [...arr1,...arr2,...arr3]
console.log(newarr)