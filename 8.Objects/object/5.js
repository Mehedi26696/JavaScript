//nested object

const regularuser = {
    email : "weofhi@gmail.com",
    fullName:{
        userName:{
            firstName:"mehedi",
            lastName:"red"
        },
        name: "darwin"
    }
}

//console.log(regularuser)

//console.log(regularuser.fullName)

//console.log(regularuser.fullName.name)

console.log(regularuser.fullName.userName)

console.log(regularuser.fullName.userName.lastName)