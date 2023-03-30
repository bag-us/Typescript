export class User{
    constructor(public name: string,){  
    }
}

class Admin extends User { 
    phone: string;
    static getRole: string = "Admin"

    constructor(phone: string, name: string){
        super(name);   
        this.phone = phone;
    }
}
let admin = Admin.getRole
console.log(admin)