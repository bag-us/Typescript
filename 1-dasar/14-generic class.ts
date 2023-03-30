class List<T>{
    private data: T[];

    constructor(...elements: T[]){
        this.data = elements;
    }

    add(elements: T): void{
        this.data.push(elements);
    }

    addMultiple(...elements: T[]): void{
        this.data.push(...elements);
    }

    getAll(): T[]{
        return this.data;
    }
}
// let numbers = new List<number>([1,2,3,4]); //if not use rest param (...)
let numbers = new List<number>(1,2,3,4);
numbers.add(5);
numbers.addMultiple(6,7,8)
console.log(numbers.getAll())

let random = new List<number | string>(1, "wanjir");
console.log(random.getAll());
