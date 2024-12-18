
//filter


//const programming =["js","c++","c","python","rust"]

// const values = programming.forEach((item)=>{
//      console.log(item)
// })

// console.log(values) //undefined



// const nums = [3,5,6,7,8,9,2]

// const newnums= nums.filter((num)=>num>4)

// console.log(newnums)



const nums = [3,5,6,7,8,9,2]

const newnums= nums.filter((num)=>{
    return num>4
})

console.log(newnums)


const res = []

nums.forEach((num)=>{
    if(num>4){
        res.push(num)
    }
})

console.log(res)