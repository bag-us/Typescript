interface Length{
    length: number
}

function generic<T extends Length>(arg: T){
    console.log(arg.length)
    return arg
}
const Generic1 = generic('asasd')
console.log(Generic1)

const Generic2 = generic({length: 5, value: 7643})
console.log(Generic2)