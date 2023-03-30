interface Subject {
    attach(observer: Observer): void
    dettach(observer: Observer): void
    notify(): void
}
interface Observer {
    name: string
    update(subject: Subject): void
}
class PromoSubject implements Subject{
    public isPromo: Boolean = false
    private observers: Observer[] = []

    attach(observer: Observer): void {
        const isExsist: Boolean = this.observers.includes(observer)
        if(isExsist){
            return console.log(`observer ${observer.name} sudah ada`)
        }
        this.observers.push(observer)
        console.log(`observer ${observer.name} berhasil didaftarkan`)
    }
    dettach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer)
        if(observerIndex === -1){
            return console.log(`observer ${observer.name} tidak ada`)
        }
        this.observers.splice(observerIndex, 1)
        console.log(`observer ${observer.name} berhasil dihapus`)
    }
    notify(): void {
        for(const observer of this.observers){
            observer.update(this)
        }
    }
    setPromo(status: Boolean): void{
        this.isPromo = status
        this.notify()
    }
}
class Product implements Observer{
    name: string
    constructor(name: string){
        this.name = name
    }
    update(subject: Subject): void {
        if(subject instanceof PromoSubject && subject.isPromo){
            console.log(`produk ${this.name} telah ditampilkan sebagai promo`)
        }
    }
}
const promo = new PromoSubject()

const sepatu = new Product('sepatu')
const baju = new Product('baju')

promo.attach(sepatu)
promo.attach(baju)

promo.setPromo(true)
promo.dettach(baju)

console.log(promo)