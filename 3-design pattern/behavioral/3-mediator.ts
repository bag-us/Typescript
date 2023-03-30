interface InProduct {
    name: string
    sell(): void
}
interface Mediator{
    registerProduct(product: Product):void
    setAvailable(product: Boolean): void
    isAvailable(): Boolean
}
class Product implements InProduct{
    name: string
    mediator: Mediator
    constructor(name: string, mediator: Mediator){
        this.name = name
        this.mediator = mediator
    }
    sell(): void {
        if(this.mediator.isAvailable()){
            this.mediator.setAvailable(false)
            console.log(`produk ${this.name} berhasil dijual`)
        }else{
            console.log('produk harus di daftarkan dahulu')
        }
    }
}
class ProductMediator implements Mediator{
    product?: Product
    status: Boolean = false
    registeredProduct(): void{
        if(this.status){
            console.log(this.product)
        }else{
            console.log('tidak ada produk yang dijual')
        }
    }
    registerProduct(product: Product): void{
        if(this.status){
            console.log('tidak bisa mendaftarkan produk')
        }else{
            this.product = product
            this.status = true
            console.log('produk berhasil di daftarkan')
        }
    }
    setAvailable(status: Boolean): void {
        this.status = status
    }
    isAvailable(): Boolean {
        return this.status
    }
}
const mediator = new ProductMediator()
const product1 = new Product('Besi', mediator)
const product2 = new Product('Arang', mediator)

mediator.registerProduct(product1)
mediator.registerProduct(product2) //gagal

product1.sell()
product2.sell() //gagal

mediator.registeredProduct() //gagal

mediator.registerProduct(product2)
mediator.registeredProduct() 
product2.sell() 