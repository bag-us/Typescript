// typescript akan melihat pada semua file 
// apakah memiliki class dan variable yang sama.
// dengan membungkus class pada namespace, maka tidak akan ada error.

namespace Example{
    export class Product{}
    export const product = new Product()
}
const getProduct = new Example.Product()
let allProduct = Example.product