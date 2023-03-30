class Admin {
    create(){}
    update(){}
}
class Guest{
    read(){}
}

// extends = apakah T bagian dari "admin"
type User<T> = T extends "admin" ? Admin : Guest;

const sales1: User<"admin"> = new Admin;
const sales2: User<"guest"> = new Guest;

type number1 = 2 extends number ? true : false; //true
type number2 = number extends 5 ? true : false; //false