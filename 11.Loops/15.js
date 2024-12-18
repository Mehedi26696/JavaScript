//map
//chaining
const nums = [2,4,5,6,7,2,4]

// const newnums = nums.map((num)=>num+10)

// console.log(newnums)

// const val = nums.map((num)=> num*10).map((num)=> num+2)

// console.log(val)

const val = nums.map((num)=> num*10).map((num)=> num+2).filter((num)=> num>25)

console.log(val)