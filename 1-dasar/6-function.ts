// argument type
function multiply(val1: number, val2:number): number{
  return val1 * val2
}
const result = multiply(5,5)
console.log(result)


// function as a type
type Add = (val1: number, val2: number) => number; // rule
const tambah: Add = (val1, val2): number => {
  return val1 + val2;
}
console.log(tambah(2,2))


// void function
function printMessage(): void {
  // return "not allowed"
  console.log("this allowed")
}


// default parameter
const fullname = (first: string, last: string = "wowo"): string =>{
  return first + " " + last;
}
console.log(fullname("Wanjir")) //second parameter is optional


// optional parameter 
const getName = (name1: string, name2 ?: string):string => {
  return name1 +" "+ name2;
}
console.log(getName("Wiro")) // if second param return undefine