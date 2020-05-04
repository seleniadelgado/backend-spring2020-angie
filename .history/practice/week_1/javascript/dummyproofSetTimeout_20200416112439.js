// first argument is what to run, second value is how long to wait for in missliseconds

function dpSetTimeout(instructions, timeoutLength) {

    if (instructions === "function"){
        setTimeout(instructions, timeoutLength);
    }
}

function mySpecialFunction() {
    console.log("running something here");
}

dpSetTimeout(mySpecialFunction, 2000);

console.log("the scropt has finished")