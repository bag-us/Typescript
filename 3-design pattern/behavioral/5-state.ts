namespace State {
    interface InProduct{
        name:string
        saveFeatureProduct():void
    }
    class FeaturedProduct{
        private state: InProduct
        constructor(state: InProduct){
            this.state = state
        }
        setFeatureProduct(state: InProduct): void{
            this.state = state
        }
        getFeatureProduct(): void{
            console.log(this.state)
        }
        publish(): void{
            this.state.saveFeatureProduct()
        }
    }
    class FashionProduct implements InProduct{
        name: string
        constructor(name: string){
            this.name = name
        }
        saveFeatureProduct(): void{
            console.log(`set produk ${this.name} sebagai produk unggulan`)
        }
    }
    class ElectronicProduct implements InProduct{
        name: string
        constructor(name: string){
            this.name = name
        }
        saveFeatureProduct(): void{
            console.log(`set produk ${this.name} sebagai produk unggulan`)
        }
    }
    const baju = new FashionProduct('celana')
    const komputer = new ElectronicProduct('keyboard')

    const featureProduct = new FeaturedProduct(baju)
    featureProduct.publish()
    featureProduct.getFeatureProduct()

    const featureProduct2 = new FeaturedProduct(komputer)
    featureProduct2.publish() //replace celana dari produk unggulan
    featureProduct2.getFeatureProduct()
}

