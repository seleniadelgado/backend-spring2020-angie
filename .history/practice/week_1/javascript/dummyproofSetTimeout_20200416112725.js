// first argument is what to run, second value is how long to wait for in milliseconds

function dpSetTimeout(instructions, timeoutLength) {

    if (typeof instructions === "function"){
        setTimeout(instructions, timeoutLength);
    }
}

function mySpecialFunction() {
    console.log("running something here");
}

dpSetTimeout(mySpecialFunction, 1);

console.log("the script has finished")