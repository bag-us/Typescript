interface Laptop{
    name: string;
    on(): void;
    off(): void;
}

class Asus implements Laptop{
    constructor(public name: string, public isGaming: boolean){}
    on(): void {
        console.log("On");
    }
    off(): void {
        console.log("Off");
    }
}

class Acer implements Laptop{
    constructor(public name: string, public backlightKeyboard: boolean){}
    on(): void {
        console.log("On");
    }
    off(): void {
        console.log("Off");
    }
}

let asus = new Asus("ROG", true);
console.log(asus); asus.on(); asus.off();