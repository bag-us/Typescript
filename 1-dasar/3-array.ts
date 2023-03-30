//type 1
let names: string[] = ["abdul", "jannah"]
let nin: number[] = [23121, 355443]

//type 2
let fruits: Array<string> = ["apple", "orange"]
let nif: Array<number> = [12233, 21321]

// Tuple = is an array, but it can contain more than one data type.
// If you try to call an index that is greater than the actual length 
// of the tuple , an error will occur.
let student: [string, number, string] = ["john", 23141, "Bekasi"]
console.log(student[2])
console.log(student[0])

// Change array
student[0] = "Edi"
console.log(student[0])

// Add array
names.push("adudu")
console.log(names)

// Delete array
delete names[0]
console.log(names)