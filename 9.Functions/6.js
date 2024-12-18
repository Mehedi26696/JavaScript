const user ={
    username: "Mehedi",
    price: 234
}

function handleobject(anyobject) {
    console.log( `Username is ${anyobject.username} and price is ${anyobject.price} ` )
}

handleobject(user)

handleobject({
    username: "aurnob",
    price: 355
})