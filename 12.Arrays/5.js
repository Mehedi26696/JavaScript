// JavaScript Array splice() Method is an inbuilt method in JavaScript that is used to change the 
// contents of an array by removing or replacing existing elements and/or adding new elements.
//  It modifies the original array and returns an array of the removed elements.

//Array.splice( index, remove_count, item_list )

 
let arr=[3,5,7 ,"mehedi",'w',[3,6],'a','t'];

console.log(arr);

let removed=arr.splice(2,1,"hello","university");

console.log(removed);

console.log(arr);


// No Removing only Insertion from 2nd 
arr.splice(7, 0, 'React')
console.log(arr);