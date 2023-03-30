interface Product{
    sell(): void
}

class Car implements Product{
    sell(): void{
        console.log("Jual Mobil")
    }
}

class Motor implements Product{
    sell(): void{
        console.log("Jual Motor")
    }
}

function sellProduct<T extends Product>(product: T[]): void {
    product.forEach(product => product.sell())
}
const car = new Car()
const motor = new Motor()

sellProduct([car, motor])