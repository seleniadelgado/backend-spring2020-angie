const fs = require('fs');
const _ = require("lodash");

console.log(_.random(1,10));
console.log(Math.floor(Math.random() * 10) + 1);

let array1 = [40, 30, 40];
let array2 = [400, 34, 50];
let arrayCombined = _.compact(array1, array2);

console.log(arrayCombined);

console.log(_.difference(array1, array2));
//Date console.log(_.now());
console.log(_.now());



