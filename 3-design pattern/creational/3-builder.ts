//================= cara 1 =================================================///
class User {
    public name:string = ""
    public username:string = ""
    public password:string = ""
    public email: string = ""

    getDetail(){
        return `${this.name} username : ${this.username}`
    }
}
class UserBuilder {
    private user: User
    constructor(){
        this.user = new User()
    }
    setName(value: string){
        this.user.name = value
        return this
    }
    setUsername(value: string){
        this.user.username = value
        return this
    }
    setPassword(value: string){
        this.user.password = value
        return this
    }
    setEmail(value: string){
        this.user.email = value
        return this
    }
    build(){
        return this.user
    }
}
const user1 = new UserBuilder().setName("Bahlul").setUsername("bahlul")
.setPassword("123").build();
console.log(user1);

//================= cara 2 =================================================///
class User2 {
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
    getDetail(){
        return `${this.name} username : ${this.username}`
    }
}
const user2 = new User2({name: "Bahlul", username: "bahlul", password: "123"})
console.log(user2)