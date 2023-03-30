interface intProduk {
    getProduk(): any
}
class Produk implements intProduk{
    constructor(public name:string, public price: number){
        this.name = name
        this.price = price
    }
    getProduk(){
        return{
            name: this.name,
            price: this.price
        }
    }
}
abstract class ProdukDecorator implements intProduk {
    protected produk: Produk
    constructor(produk: Produk){
        this.produk = produk
    }
    abstract getProduk(): any
}
class ProdukImportDecorator extends ProdukDecorator{
    getProduk() {
        return{
            name: this.produk.name,
            price: this.produk.price + 2000,
            tax: 1000
        }
    }
}
class ProdukExportDecorator extends ProdukDecorator{
    getProduk() {
        return{
            name: this.produk.name,
            price: this.produk.price + 3000,
            tax: 1500
        }
    }
}

const produkA = new Produk('produk A', 10000)
console.log(produkA.getProduk())

const produkAfromImport = new ProdukImportDecorator(produkA)
console.log('Import', produkAfromImport.getProduk())

const produkAfromExport = new ProdukExportDecorator(produkA)
console.log('Export',produkAfromExport.getProduk())
