const operation = (num1: number, num2: number): number => {
    const operation1 = num1 + num2
    return operation1
}
const calculate = ():number => {
    let num1: number = 20
    let num2: number = 30
    return operation(num1,num2)
}
console.log(calculate())
