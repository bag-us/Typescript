export class User{
    // public name: string
    // constructor(name: string){
    //     this.name = name
    // }
    constructor(public name: string,){  //efficient
    }
    setName(value: string): void{
        this.name = value;
    }
    getName = (): string => {
        return this.name;
    }
}
let user = new User("Turmingkem")
console.log(user.getName())

class Admin extends User {  // inheritance
    read: boolean = true;
    write: boolean = true;
    phone: string;

    constructor(phone: string, name: string){
        super(name);   // constructor parent class
        this.phone = phone;
    }

    getRole(): {read: boolean, write: boolean} {
        return {
            read: this.read,
            write: this.write
        };
    };
}
let admin = new Admin("08275325672","Mimin")
console.log(admin.getName())
console.log(admin.getRole())
console.log(admin.setName("Mimin")) // not returning any thing