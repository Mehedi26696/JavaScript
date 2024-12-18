  
let myDate = new Date()
// console.log(myDate)
// console.log(typeof myDate)
// console.log(myDate.toString())

// console.log(myDate.toDateString())

// console.log(myDate.toISOString())

// console.log(myDate.toJSON())

// console.log(myDate.toLocaleString())

// console.log(myDate.toLocaleDateString())

// console.log(myDate.toLocaleTimeString())

let createDate = new Date(2024,3,25,5,6,8)

// let createDate = new Date("2024-03-17")

// console.log(createDate.toDateString())
// console.log(createDate.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)

console.log(createDate.getTime())

// miliseconds to seconds
console.log(Math.floor(Date.now()/1000))


let newDate = new Date()
// console.log(newDate.getDay())

newDate.toLocaleString('Default',{
    weekday: "long"
})

 

