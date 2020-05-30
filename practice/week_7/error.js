var someVariable = 10;

throw "something bad"
try {
    console.log(someVariable);
} catch (error) {
    console.log("We tried to access this variable, but we couldn't so we do this instead")
    console.log(error.stack);
} finally {
    console.log("The sttempt to read a variable is done");
}