//this used for referring current context

const user = {
    username: "Mehedi",
    price : 999,
    welcome: function () {
        console.log(`${this.username}, welcome to website` )
        console.log(this)
    }
}

user.welcome()

user.username="Jota"

user.welcome()

console.log(this)   //current context (this) is empty