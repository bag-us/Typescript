function getData(value: any){
    return value
}
console.log(getData("Bujang").length);
console.log(getData(123).length);  // undefine

// Generic
function getName<T>(value: T){
    return value
}
console.log(getName("Bujang").length);
// console.log(getName(123).length);  // length error

// Generic arrow function
const getArrow = <T>(value: T) => {}

// Generic arrow function JSX
const getArrowJSX = <T, >(value: T) => {}