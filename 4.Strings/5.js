//Slicing
//String not mutable when we use some operations it's just create a copy of main string

let a="Kvaratskhelia"

console.log(a.slice(1,4))
console.log(a.slice(4))


//replacing

console.log(a.replace("lia","kavardona"))

//replacing always first occurrence

let b="abceroabcigjeabc"
console.log(b.replace("abc","xyz"))

//concatenation

console.log(b.concat(a))
console.log(b.concat(a),"football")


//remove whitespace

let x="   sports  "
console.log(x)
console.log(x.trim())

