let empId : number=12345
console.log(empId)

let fName='srinidhi'
let lName=" gowda"
console.log(`${fName} ${lName}`)


interface personInfo{
    "fName" : string;
    "lName" : string;
    "dob" : number;
    
}
let person: personInfo =
{
    "fName" : "ram",
    "lName" : "sam",
    "dob" : 1234
    
}

let fruits : string[]=["mango", "banana","apple"];
let price : number[]=[1,2,3,4,5,6]
let fruitprice :(string|number)[]=["mango", "grape",1,"apple",2]
console.log(fruitprice[1]);