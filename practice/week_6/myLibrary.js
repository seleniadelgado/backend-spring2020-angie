function mathify(num1, num2){
    console.log(num1 + num2);
    console.log(num1 - num2);
    console.log(num1 * num2);
    console.log(num1 / num2);
}
function reallyCoolFunction(){
    console.log("This really cool function ran.")
}
module.exports = {
    mathify: mathify
}

function find(array, item) {
    if (array.isArray(array) === false) {
        return -1
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}
module.exports = {
    mathify
}