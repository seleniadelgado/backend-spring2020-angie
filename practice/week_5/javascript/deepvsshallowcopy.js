//Deep copy - made a literal copy/

let variable1 = 100;
let variable2 = variable1;
let variable3 = variable2 + 10;

console.log(variable1);
console.log(variable3);

//shallow copy, really means a new reference to old data.
//Doesnt make a copy it refers to the original object.
let myObj = {
    info1: "something",
    info2: 1000
};

let myObj2 = myObj;

let myObj3 = myObj2;

myObj3.info2 = 2000;

console.log(myObj.info2)