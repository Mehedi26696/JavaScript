//reduce

const nums = [2,4,5,6,7]

// const total = nums.reduce(function(acc,currval) {
//     console.log("acc:" + acc +" and currval "+ currval)
//     return acc+currval 
// },0)

// console.log(total)

const total = nums.reduce((acc,currval)=> acc+currval,0)

console.log(total)