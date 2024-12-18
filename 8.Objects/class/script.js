
class animal {
    constructor(name) {
        this.name=name

        console.log("Object is created")
        
    }

    eats(){
        console.log("I am eating")
    }

    jumps(){
        console.log("I am jumping")
    }
}

let a = new animal("Mehedi");

console.log(a)




// a.eats()
// I am eating
 
// a.jumps()
// I am jumping

// a.name
// 'Mehedi'
 

class Lion extends animal {
    constructor(name) {
        //super to excess animal constructor
        super(name)
        this.name=name

        console.log("Object is created and this is a lion")
        
    } 
}


let b = new Lion("boy")
console.log(b)

// Object is created
 
// Lion {name: 'boy'}
// name: "boy"
// [[Prototype]] : animal
// constructor :  class Lion
// [[Prototype]]:  Object