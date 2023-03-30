interface Logistic {
    qty: number
    deliver():void
}
class Truck implements Logistic{
    constructor(public qty: number){
        this.qty = qty
    }
    deliver():void{
        console.log(`kirim ${this.qty} barang dengan Truk`)
    }
}
class Ship implements Logistic{
    constructor(public qty: number){
        this.qty = qty
    }
    deliver():void{
        console.log(`kirim ${this.qty} barang dengan Kapal`)
    }
}
type logisticType = {
    type: string
    qty: number
}
interface Factory{
    create(options: logisticType): Logistic
}
class logistcFactory implements Factory{
    create(options: logisticType): Logistic {
        if(options.type === "deliver_by_land"){
            return new Truck(options.qty)
        }else if (options.type === "deliver_by_sea"){
            return new Ship(options.qty)
        }
        throw new Error("class tidak ada")
    }
}

const logistic = new logistcFactory()
const byLand = logistic.create({type: "deliver_by_land", qty: 100})
byLand.deliver()

const bySea = logistic.create({type: "deliver_by_sea", qty: 200})
bySea.deliver()
