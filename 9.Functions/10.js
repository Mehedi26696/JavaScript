
//this is not define inside function
//this only define inside object

function test( ) {
    let username = "Mehedi"
    console.log(this.username) //undefined
}

test()

const test2 = function( ) {
    let username = "Mehedi"
    console.log(this.username) //undefined
}

test2()