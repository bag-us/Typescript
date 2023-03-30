// nama < 20 karakter
// harga < 1 jt
// berat < 5 kg

namespace COR {
    class Product {
        constructor(public name: string,public price: number,public weight: number){
            this.name = name
            this.price = price
            this.weight = weight
        }
    }

    interface Handler{
        setNext(handler: Handler): Handler
        handle(request: any): any
    }

    abstract class AbsProductHendler implements Handler{
        private nextHandler: Handler | null = null
        public setNext(handler: Handler): Handler{
            this.nextHandler = handler
            return handler
        }
        handle(request: any) {
            if(this.nextHandler){
                return this.nextHandler.handle(request)
            }
            return request
        }
    }

    class ProductNameHandler extends AbsProductHendler{
        handle(request: any) {
            if(request.name.length > 20){
                return "nama harus dibawah 20 karakter"
            }
            return super.handle(request) 
        }
    }
    class ProductPriceHandler extends AbsProductHendler{
        handle(request: any) {
            if(request.price > 1000000){
                return "harga harus dibawah 1 juta"
            }
            return super.handle(request) 
        }
    }
    class ProductWeightHandler extends AbsProductHendler{
        handle(request: any) {
            if(request.weight > 5){
                return "beart harus dibawah 5 kg"
            }
            return super.handle(request) 
        }
    }

    const product1 = new Product('A', 1190000, 4)
    const product2 = new Product('B', 40000, 13)

    const namehandler = new ProductNameHandler()
    const pricehandler = new ProductPriceHandler()
    const weighthandler = new ProductWeightHandler()

    namehandler.setNext(pricehandler).setNext(weighthandler) // chain

    console.log(namehandler.handle(product1))
    console.log(namehandler.handle(product2))
}