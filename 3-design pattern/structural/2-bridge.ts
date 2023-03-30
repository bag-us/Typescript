//                          Store
//            Product                       Price
// Fashion(price)  computer(price)     cheap     expensive

interface Price{
    name: string
    price: number
    sellPrice(): string
}
class Cheap implements Price {
    name: string = "murah"
    price: number
    constructor(price: number){
        this.price = price
    }
    sellPrice(): string{
        return `harga ${this.price} ${this.name}`
    }
}
class Expensive implements Price {
    name: string = "mahal"
    price: number
    constructor(price: number){
        this.price = price
    }
    sellPrice(): string{
        return `harga ${this.price} ${this.name}`
    }
}

interface IntProduct {
    name: string
}
abstract class Product implements IntProduct{
    name: string
    price: Price
    constructor(name: string, price: Price){
        this.name = name
        this.price = price
    }
    abstract sell(): void
}
class Fashion extends Product{
    sell(): void{
        console.log(`jual ${this.name} dengan ${this.price.sellPrice()}`)
    }
}
class Computer extends Product{
    sell(): void{
        console.log(`jual ${this.name} dengan ${this.price.sellPrice()}`)
    }
}

const fashionMurah = new Fashion(`Pakaian`, new Cheap(7000))
fashionMurah.sell()

const komputerMurah = new Computer(`Laptop Asus`, new Cheap(2000))
komputerMurah.sell()