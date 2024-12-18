//Immediately Invoked Function Expressions(IIFE)
//Used for removing global scope variable pollution

//(definination)(execution)

(function tea() {
    //named iife
    console.log("Hello")
    
})();

(()=>{
    //IFFE
    console.log("another one")
})()