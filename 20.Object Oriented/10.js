class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}mehedi`
    }

    set password(value){
        this._password = value
    }
}

const mehedi = new User("h@mehedi.ai", "abc")
console.log(mehedi.password)
console.log(mehedi.email);