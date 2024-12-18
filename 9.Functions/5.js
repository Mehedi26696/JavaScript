//..rest operator

function price(...num1){
    return num1
}

console.log(price(200,400,500)) //it's return an array


function list(val1,val2,...num1){
    return num1
}

console.log(list(200,400,500,687,890)) //it's return an array without first two values 200,400 