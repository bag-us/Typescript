interface Istore{
    name: string
    profit: number
    getProfit(): number
}

class OldStrore implements Istore{
    name: string = "Toko lama"
    profit: number = 1000
    getName(): string{
        return this.name
    }
    getProfit():number {
        return this.profit
    }
}

class NewStrore implements Istore{
    name: string = "Toko baru"
    profit: number = 2000
    getName(): string{
        return this.name
    }
    getProfit():number {
        return this.profit
    }
}

class Product {
    constructor(
        private store: Istore,
        private name: string, 
        private price: number){}

    sell(): void{
        console.log(`${this.name} harga jualnya : ${this.store.getProfit() + this.price}`)
    }
}

const tokoLama = new OldStrore()
const tokoBaru = new NewStrore()

const bajuLuar = new Product(tokoLama, 'baju branded', 95000)
const bajuLokal = new Product(tokoBaru, 'baju lokal', 85000)

console.log(bajuLuar)
bajuLuar.sell()
console.log(bajuLokal)
bajuLokal.sell()