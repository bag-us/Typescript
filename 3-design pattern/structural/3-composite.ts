// - PC
//      - motherboard
//      - processor's
// - Laptop
//      - Asus
//      - Acer
// - Peripheral
//      - Memory
//          - DDR 3
//          - DDR 4

abstract class Category {
    children: Category[] = []
    parent: Category | null = null
    name: string

    constructor(name: string){
        this.name = name
    }
    setParent(parent: Category | null){
        this.parent = parent
    }
    getParent(): Category | null{
        return this.parent
    }
    isComposite(): boolean{
        return false
    }
    abstract getName(): string
}
class Products extends Category{
    getName(): string {
        return this.name
    }
}
class CategoryComposite extends Category{
    constructor(name: string){
        super(name)
    }
    add(category: Category): void{
        this.children.push(category)
        category.setParent(this)
    }
    remove(category: Category): void{
        const categoryIndex = this.children.indexOf(category)
        this.children.splice(categoryIndex, 1)
        category.setParent(null)
    }
    isComposite(): boolean {
        return true
    }
    getName(): string {
        return this.name
    }
}
const category = new CategoryComposite("category") // top
const computer = new CategoryComposite("computer") // second
const PC = new CategoryComposite("PC") // third
const laptop = new CategoryComposite("laptop") // third
const Peripheral = new CategoryComposite("Peripheral") // third
const motherboard = new CategoryComposite("motherboard") // fourth
const processor = new CategoryComposite("processor") // fourth
const asus = new CategoryComposite("asus") // fourth
const acer = new CategoryComposite("acer") // fourth
const Memory = new CategoryComposite("Memory") // fourth

category.add(computer)
computer.add(PC)
computer.add(laptop)
computer.add(Peripheral)
PC.add(motherboard)
PC.add(processor)
laptop.add(asus)
laptop.add(acer)
Peripheral.add(Memory)

// console.log(category)

const printCategories = (composite: Category): void =>{
    console.log('kategori ' + composite.getName());
    composite.children.forEach(element =>{
        if(element.isComposite() && element.children.length){
            printCategories(element);
        }else{
            console.log('product ' + element.getName())
        }
    })
}
printCategories(category)