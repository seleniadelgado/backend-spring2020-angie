







const fs = require('fs');
const _ = require("lodash");

console.log(_.random(1,10));
console.log(Math.floor(Math.random() * 10) + 1);

let array1 = [70, 30, 30];
let array2 = [100, 3, 10];
let arrayCombined = _.compact(array1, array2);

console.log(arrayCombined);

console.log(_.difference(array1, array2));
//Date console.log(_.now());

