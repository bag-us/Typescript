// enum Gender {Male, Female, Nonbinary}
// enum Gender {Male = 2, Female = 31, Nonbinary = -33} //custom number
enum Gender {
    Male = "pria", 
    Female = "wanita", 
    Nonbinary = "bingung"}   // custom string

let sex: Gender = Gender.Male;
console.log(sex) // it will return index of Gender