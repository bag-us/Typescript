export class User{
    constructor(public name: string,){  
    }
    setName(value: string): void{
        this.name = value;
    }
    getName = (): string => {
        return this.name;
    }
}

class Admin extends User { 
    read: boolean = true;
    write: boolean = true;
    phone: string;
    private _email: string = ""

    constructor(phone: string, name: string){
        super(name);   
        this.phone = phone;
    }
    getRole(): {read: boolean, write: boolean} {
        return {
            read: this.read,
            write: this.write
        };
    };

    set email(value: string){
        const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if (!regex.test(value)) {
            throw new Error("Invalid email address");
        }
        this._email = value;
    }
    get email(): string{
        return this._email
    }
}
let admin = new Admin("08275325672","Mimin")
admin.email = "bapamu@gmail.com";
console.log(admin.email)