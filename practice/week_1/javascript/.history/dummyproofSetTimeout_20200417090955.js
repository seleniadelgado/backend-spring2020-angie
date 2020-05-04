// first argument is what to run, second value is how long to wait for in milliseconds
function dpSetTimeout(instructions, timeoutLength, count = 1, pause = 0,) {

    if (typeof instructions === "function" && typeof timeoutLength === "number") {
        if (timeoutLength < 0) {
            timeoutLength = 0;
        }
        for (let i = 0; i < count; i++) {

            let pauseLength = pause * i;

            setTimeout(instructions, timeoutLength + pauseLength);

        }


        return 0;
    } else {
        return 1;
    }

}