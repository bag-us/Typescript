// type bisa berbentuk variable dan object
type Tv = string
type House = { name: string }

// interface hanya berbentuk object mirip class
interface Bike { name: string }

//==============================================================//

// type tidak bisa duplicate, tapi bisa di intersection
type Name = { name: string }
type Age = { age: number }
type Employee = Name & Age
const employee: Employee = { name: "wakwaw", age: 34 }

// interface bisa duplicate (seolah-olah di merge)
interface Bike { wheel: number }
class Sepeda implements Bike{
    name: string
    wheel: number
}

//==============================================================//

// type : dipakai untuk variable & function
// interface : dipakai untuk class