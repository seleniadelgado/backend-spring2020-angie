//simple Javascript Objects

// Formatting for an object with multiple properties. 
let myObj = {"name": "Angie",
    address: "123 meTown",
    salary: "98k"}
//Acceptable for one line with single property
let myObj = {"name": "Angie"}

let employee1 = {
    "address": "somewhere",
    "salary": 8000
}
//to access 
    employee1.address;
/// nested object
let myObj = {"name": "Angie",
    address: {
        "street": "124 someCity",
        "state": "CA",
        "zip": "999"
    },
    salary: "98k"}
    myObj.address.street;

//Classes, "fancy" objects.
class Car {
    constructor() {}
}
let myFirstCar = new Car();
//let myFirstCar = {};

console.log(typeof myFirstCar);