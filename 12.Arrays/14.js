//create a new array from a given array

let a=[1,93,4,6,8];
let b=[];
for (let index = 0; index < a.length; index++) {
    const element = a[index];

    b.push(element**2);
    
}

console.log(b);