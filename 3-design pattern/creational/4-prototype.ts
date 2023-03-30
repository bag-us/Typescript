class User3 {
    public name:string;
    public username:string;
    public password:string;
    public email: string;
    constructor({name='', username='', password='', email=''}= {}){
        this.name = name
        this.username = username
        this.password = password
        this.email = email
    }
    public clone():this {
        const clone = Object.assign({}, this)
        return clone
    }
}
const user3 = new User3({name: "Bahlul", username: "bahlul", password: "123"})

const user4 = user3.clone()
user4.name = "Ente"
console.log(user4)