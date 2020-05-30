//wait until HTML has fully loaded.
$(document).ready(() => {
    console.log("Hello World")
});






Last login: Wed May 27 09:01:06 on console
Angies-MacBook-Air:~ angiedelgado$ ls
Applications  Documents     Movies        Public
Code          Downloads     Music         edit_icon.png
Desktop       Library       Pictures
Angies-MacBook-Air:~ angiedelgado$ cd Code/
Angies-MacBook-Air:Code angiedelgado$ ls
Portfolio                  backend-spring2020-eduardo
abdulianlaw                practice_projects
backend-spring2020-angie
Angies-MacBook-Air:Code angiedelgado$ cd backend-spring2020-eduardo/
Angies-MacBook-Air:backend-spring2020-eduardo angiedelgado$ ls
README.md handouts  practice  projects
Angies-MacBook-Air:backend-spring2020-eduardo angiedelgado$ cd practice/
Angies-MacBook-Air:practice angiedelgado$ ls
week_1 week_2 week_3 week_4 week_5 week_6
Angies-MacBook-Air:practice angiedelgado$ ls
week_1 week_2 week_3 week_4 week_5 week_6
Angies-MacBook-Air:practice angiedelgado$ cd week_3/
Angies-MacBook-Air:week_3 angiedelgado$ l
-bash: l: command not found
Angies-MacBook-Air:week_3 angiedelgado$ ls
express node
Angies-MacBook-Air:week_3 angiedelgado$ cd node/
Angies-MacBook-Air:node angiedelgado$ ls
firstNodeProject  secondNodeProject
Angies-MacBook-Air:node angiedelgado$ cat firstNodeProject/
cat: firstNodeProject/: Is a directory
Angies-MacBook-Air:node angiedelgado$ ls
firstNodeProject  secondNodeProject
Angies-MacBook-Air:node angiedelgado$ cd firstNodeProject/
Angies-MacBook-Air:firstNodeProject angiedelgado$ ls
index.js          package-lock.json package.json
Angies-MacBook-Air:firstNodeProject angiedelgado$ cat index.js
// npm install -g package_name
// This installs the package globally, meaning to your computer, so that any other project can use it. Downside: It is only on your computer and not "required" by your package.


// npm install -S package_name
// This installed the package just for the Node project you are in. This will also modify the package.json to say that it is required for the project to work. It is installed to the node project folder.


const fs = require("fs");
const _ = require("lodash");

console.log(_.random(1, 10));
console.log(Math.floor(Math.random() * 10) + 1);

let array1 = [70, 30, 30];
let array2 = [100, 30, 10];
let arrayCombined = _.concat(array1, array2);

console.log(arrayCombined);

console.log(_.difference(array1, array2));

//Date
console.log(_.now());


// Current Assignment:
/*
1) create another folder and call it secondNodeProject. This folder should be NEXT to firstNodeProject, NOT inside of it.
2) convert the folder into a node project using "npm init".
3) install the package "Express" locally to this secondNodeProject folder.
4) Bonus: find out a methor or property you can use and use it inside of the index.js file.
*/Angies-MacBook-Air:firstNodeProject angiedelgado$ ls
index.js          package-lock.json package.json
Angies-MacBook-Air:firstNodeProject angiedelgado$ cd ..
Angies-MacBook-Air:node angiedelgado$ ls
firstNodeProject  secondNodeProject
Angies-MacBook-Air:node angiedelgado$ cd secondNodeProject/
Angies-MacBook-Air:secondNodeProject angiedelgado$ ls
index.js          package-lock.json package.json
Angies-MacBook-Air:secondNodeProject angiedelgado$ cat index.js
const express = require("express");

express();Angies-MacBook-Air:secondNodeProject angiedelgado$ ls
index.js          package-lock.json package.json
Angies-MacBook-Air:secondNodeProject angiedelgado$ cat index.js
const express = require("express");

express();Angies-MacBook-Air:secondNodeProject angiedelgado$ cd ..
Angies-MacBook-Air:node angiedelgado$ ls
firstNodeProject  secondNodeProject
Angies-MacBook-Air:node angiedelgado$ cd ..
Angies-MacBook-Air:week_3 angiedelgado$ ls
express node
Angies-MacBook-Air:week_3 angiedelgado$ cd ..
Angies-MacBook-Air:practice angiedelgado$ ls
week_1 week_2 week_3 week_4 week_5 week_6
Angies-MacBook-Air:practice angiedelgado$ git pull
remote: Enumerating objects: 52, done.
remote: Counting objects: 100% (52/52), done.
remote: Compressing objects: 100% (34/34), done.
remote: Total 47 (delta 18), reused 41 (delta 12), pack-reused 0
Unpacking objects: 100% (47/47), done.
From https://github.com/eagarcia8/backend-spring2020-eduardo
   f034215..07f67f3  master     -> origin/master
Updating f034215..07f67f3
Fast-forward
 ...ock.NCHS_-_Injury_Mortality__United_States.csv# |     1 -
 practice/week_6/dataset_run.js                     |   127 +-
 practice/week_7/errors.js                          |    19 +
 practice/week_7/react-practice/my-app/.gitignore   |    23 +
 practice/week_7/react-practice/my-app/README.md    |    68 +
 .../week_7/react-practice/my-app/package-lock.json | 13907 +++++++++++++++++++
 practice/week_7/react-practice/my-app/package.json |    34 +
 .../react-practice/my-app/public/favicon.ico       |   Bin 0 -> 3150 bytes
 .../week_7/react-practice/my-app/public/index.html |    43 +
 .../react-practice/my-app/public/logo192.png       |   Bin 0 -> 5347 bytes
 .../react-practice/my-app/public/logo512.png       |   Bin 0 -> 9664 bytes
 .../react-practice/my-app/public/manifest.json     |    25 +
 .../week_7/react-practice/my-app/public/robots.txt |     3 +
 .../week_7/react-practice/my-app/src/index.css     |    51 +
 practice/week_7/react-practice/my-app/src/index.js |   120 +
 practice/week_7/react-practice/package-lock.json   |   771 +
 practice/week_7/react-practice/package.json        |    15 +
 17 files changed, 15202 insertions(+), 5 deletions(-)
 delete mode 100644 practice/week_6/.~lock.NCHS_-_Injury_Mortality__United_States.csv#
 create mode 100644 practice/week_7/errors.js
 create mode 100644 practice/week_7/react-practice/my-app/.gitignore
 create mode 100644 practice/week_7/react-practice/my-app/README.md
 create mode 100644 practice/week_7/react-practice/my-app/package-lock.json
 create mode 100644 practice/week_7/react-practice/my-app/package.json
 create mode 100644 practice/week_7/react-practice/my-app/public/favicon.ico
 create mode 100644 practice/week_7/react-practice/my-app/public/index.html
 create mode 100644 practice/week_7/react-practice/my-app/public/logo192.png
 create mode 100644 practice/week_7/react-practice/my-app/public/logo512.png
 create mode 100644 practice/week_7/react-practice/my-app/public/manifest.json
 create mode 100644 practice/week_7/react-practice/my-app/public/robots.txt
 create mode 100644 practice/week_7/react-practice/my-app/src/index.css
 create mode 100644 practice/week_7/react-practice/my-app/src/index.js
 create mode 100644 practice/week_7/react-practice/package-lock.json
 create mode 100644 practice/week_7/react-practice/package.json
Angies-MacBook-Air:practice angiedelgado$ ls
week_1 week_2 week_3 week_4 week_5 week_6 week_7
Angies-MacBook-Air:practice angiedelgado$ cd week_4
Angies-MacBook-Air:week_4 angiedelgado$ ls
javascript
Angies-MacBook-Air:week_4 angiedelgado$ cd javascript/
Angies-MacBook-Air:javascript angiedelgado$ ls
classes2.js
Angies-MacBook-Air:javascript angiedelgado$ cat classes2.js
class Vehicle {
    constructor(manufacturer, color, topSpeedMPH) {
        this.topSpeedMPH = topSpeedMPH;
        this.color = color;
        this.manufacturer = manufacturer;

        // Add weight property.
    }
}

// Inheritance
class Car extends Vehicle {
    constructor(manufacturer, model, color, fuelType, fuelCapacityGallons, mpg, topSpeedMPH, seats) {
        // super calls the parent's constructor when we build a car object.
        super(manufacturer, color, topSpeedMPH);
        this.seats = seats;
        this.fuelType = fuelType;
        this.maxTankGallons = fuelCapacityGallons;
        this.currentTankGallons = fuelCapacityGallons / 2;
        this.license = null;
        this.model = model;
        this.mpg = mpg;
    }

    setLicense(licenseNumber) {
        this.license = licenseNumber;
        console.log(`The license of the ${this.manufacturer} ${this.model} was updated to ${licenseNumber}`);
    }

    getCurrentFuel() {
        console.log(`${this.manufacturer} ${this.model} has a total of ${this.currentTankGallons} gallons of gas left.`);

        return this.currentTankGallons;
    }

    setCurrentFuel(fuelValue) {

        this.currentTankGallons = fuelValue;
    }

    refuel(gallons) {

        let availableSpace = this.maxTankGallons - this.currentTankGallons;

        if (gallons > availableSpace) {
            console.log("There is not enough room in the gas tank to fill it with that many gallons!");
        } else {
            this.currentTankGallons = this.currentTankGallons + gallons;
            // this.currentTankGallons += gallons;
            console.log(`The gas tank now has ${this.currentTankGallons} gallons of gas.`);
        }

    }

    range() {
        console.log(`The ${this.manufacturer} ${this.model} can go a total of ${(this.maxTankGallons * this.mpg)} miles before refueling.`);
    }

    travel(distanceToTravelMiles) {
        let gallonsToBurn = distanceToTravelMiles / this.mpg;

        if (gallonsToBurn <= this.currentTankGallons) {
            console.log(`${this.manufacturer} ${this.model} has traveled ${distanceToTravelMiles} miles.`);

            this.currentTankGallons = this.currentTankGallons - gallonsToBurn;
        } else {
            console.log(`${this.manufacturer} ${this.model} cannot go that far! It doesn't have enough fuel.`);
        }

    }

    // Homework: Allow me to customize how many gallons I want to transfer. Currently I can only transfer 1 gallon as it is written within the code.
    refuelUsing(car) {

        if (car.getCurrentFuel() > 2) {

            if (this.getCurrentFuel() > 0) {
                console.log(`${this.manufacturer} ${this.model} already has fuel, we don't need to take ${car.manufacturer} ${car.model}'s fuel!`);
            } else {
                this.setCurrentFuel(1);
                car.setCurrentFuel(car.getCurrentFuel() - 1);
                console.log(`${this.manufacturer} ${this.model} has recieved 1 gallon of fuel from ${car.manufacturer} ${car.model}.`);
            }

        }

    }

}



// Fill out a "functional" airplane class and create 2 Airplane object with methods on them being used.
class Airplane extends Vehicle {
    constructor() {
        super();
        this.model = null;
        this.engineCount = null;
        this.seats = null;
        this.maxCapacityLB = null;
        this.fuelEconomy = null;
    }
}



let firstCar = new Car("Honda", "Accord", "black", "gasoline", 14.8, 25, 155, 5);

firstCar.setLicense("8HEX859");

console.log(firstCar);

firstCar.range();

firstCar.travel(2);

firstCar.travel(200);
firstCar.getCurrentFuel();
firstCar.refuel(10);
firstCar.refuel(5);
firstCar.travel(100);
firstCar.getCurrentFuel();

let secondCar = new Car("BMW", "328i", "blue", "gasoline", 15, 20, 110, 4);

console.log(secondCar);

secondCar.travel(50);
secondCar.getCurrentFuel();


secondCar.setCurrentFuel(0);

secondCar.refuelUsing(firstCar);

firstCar.getCurrentFuel();
secondCar.getCurrentFuel();Angies-MacBook-Air:javascript angiedelgado$ ls
classes2.js
Angies-MacBook-Air:javascript angiedelgado$ cd ..
Angies-MacBook-Air:week_4 angiedelgado$ ls
javascript
Angies-MacBook-Air:week_4 angiedelgado$ cd ..
Angies-MacBook-Air:practice angiedelgado$ ls
week_1 week_2 week_3 week_4 week_5 week_6 week_7
Angies-MacBook-Air:practice angiedelgado$ cd week_5/
Angies-MacBook-Air:week_5 angiedelgado$ ls
javascript jquery     mongodb
Angies-MacBook-Air:week_5 angiedelgado$ cd javascript/
Angies-MacBook-Air:javascript angiedelgado$ ls
deepvsshallowcopy.js
Angies-MacBook-Air:javascript angiedelgado$ cd ..
Angies-MacBook-Air:week_5 angiedelgado$ ls
javascript jquery     mongodb
Angies-MacBook-Air:week_5 angiedelgado$ cd jquery/
Angies-MacBook-Air:jquery angiedelgado$ ls
index.html script.js
Angies-MacBook-Air:jquery angiedelgado$ cat index.html
<!doctype html>

<html lang="en">
<head>
    <meta charset="utf-8">

    <title>jQuery Practice</title>

    <style>

    </style>

    <script src="https://code.jquery.com/jquery-3.5.0.min.js" integrity="sha256-xNzN2a4ltkB44Mc/Jz3pT4iU1cmeR0FkXs4pru/JxaQ=" crossorigin="anonymous"></script>

</head>

<body>

    <h1>Hello World!</h1>
    <button id="create-popup">Make a popup!</button>

    <script src="script.js"></script>
</body>
</html>Angies-MacBook-Air:jquery angiedelgado$ ls
index.html script.js
Angies-MacBook-Air:jquery angiedelgado$ cat script.js
let someText = "test";

function someFunction() {
    console.log("we ran this function that is global to the whole script.");
}

//Tests if your selector has something!
function test$(arrayToTest) {
    if (arrayToTest.length === 0) {
        console.log("Your jQuery selector selected nothing! Check that you spelled the selector string properly.");
        console.log(arrayToTest);
        return arrayToTest;
    } else {
        return arrayToTest;
    }
};

// Wait until HTML has fully loaded.
$(document).ready(() => {

    // Use test$ to test jQuery Selector: test$( $("CSS Selector") );
    test$( $("ol") );
    test$( $("body") );


    // Storing what we searched for into an variable.
    let myHeading = $("h1");

    // Waiting 5 seconds to change the color of all headings to red.
    setTimeout(() => {
        myHeading.css("color", "red");
    }, 5000);

    // When any headings are clicked on, change them to blue.
    myHeading.click(() => {

        let aPTag = "<p>This is a paragraph tag.</p>";

        // .html() or .append() or .prepend()
        $("body").append(aPTag);

    });



    $("#create-popup").click(() => {

        //You can also use $(this) to select the previously selected jQuery element.
        //$("html").css("background-color", "grey");
        console.log(someText);
        someFunction();

        // Setting up our popup.
        let myPopup = `
        <div id="popup-block">
            <div id="popup-container">
                <p>You must deal with me!</p>
            </div>
        </div>`;

        // attaching popup to our body element
        $("body").append(myPopup);

        // stylizing popup "blocker" (the box that looks like a transparent grey box covering the whole webpage.)
        $("#popup-block").css({
            "position": "absolute",
            "top": "0",
            "left": "0",
            "width": "100%",
            "height": "100%",
            "background-color": "rgba(177, 177, 177, .5)"
        });

        // using a shortcut for popup-container because we are going to use it a lot.
        let popup = $("#popup-container");

        // styles the white box.
        popup.css({
            "margin": "0 auto",
            "width": "300px",
            "height": "300px",
            "background-color": "white",
            "border": "solid 5px grey"
        });

        // adds an H1 to white box.
        popup.append("<h1>I have been added AFTER THE FACT!</h1>");

        // adds a "Close" button to white box.
        popup.append("<button id='close'>Close this popup!</button>");

        // starts listening to the close button and delete the grandparent.
        $("#close").click(() => {
            $("#close").parent().parent().remove();
        });

    });


    // Inspecting what we searched.
    console.log(myHeading);

});Angies-MacBook-Air:jquery angiedelgado$ ls
index.html script.js
Angies-MacBook-Air:jquery angiedelgado$ cat script.js
let someText = "test";

function someFunction() {
    console.log("we ran this function that is global to the whole script.");
}

//Tests if your selector has something!
function test$(arrayToTest) {
    if (arrayToTest.length === 0) {
        console.log("Your jQuery selector selected nothing! Check that you spelled the selector string properly.");
        console.log(arrayToTest);
        return arrayToTest;
    } else {
        return arrayToTest;
    }
};

// Wait until HTML has fully loaded.
$(document).ready(() => {

    // Use test$ to test jQuery Selector: test$( $("CSS Selector") );
    test$( $("ol") );
    test$( $("body") );


    // Storing what we searched for into an variable.
    let myHeading = $("h1");

    // Waiting 5 seconds to change the color of all headings to red.
    setTimeout(() => {
        myHeading.css("color", "red");
    }, 5000);

    // When any headings are clicked on, change them to blue.
    myHeading.click(() => {

        let aPTag = "<p>This is a paragraph tag.</p>";

        // .html() or .append() or .prepend()
        $("body").append(aPTag);

    });



    $("#create-popup").click(() => {

        //You can also use $(this) to select the previously selected jQuery element.
        //$("html").css("background-color", "grey");
        console.log(someText);
        someFunction();

        // Setting up our popup.
        let myPopup = `
        <div id="popup-block">
            <div id="popup-container">
                <p>You must deal with me!</p>
            </div>
        </div>`;

        // attaching popup to our body element
        $("body").append(myPopup);

        // stylizing popup "blocker" (the box that looks like a transparent grey box covering the whole webpage.)
        $("#popup-block").css({
            "position": "absolute",
            "top": "0",
            "left": "0",
            "width": "100%",
            "height": "100%",
            "background-color": "rgba(177, 177, 177, .5)"
        });

        // using a shortcut for popup-container because we are going to use it a lot.
        let popup = $("#popup-container");

        // styles the white box.
        popup.css({
            "margin": "0 auto",
            "width": "300px",
            "height": "300px",


















let someText = "test";

function someFunction() {
    console.log("we ran this function that is global to the whole script.");
}

//Tests if your selector has something!
function test$(arrayToTest) {
    if (arrayToTest.length === 0) {
        console.log("Your jQuery selector selected nothing! Check that you spel\
led the selector string properly.");
        console.log(arrayToTest);
        return arrayToTest;
    } else {
        return arrayToTest;
    }
};

// Wait until HTML has fully loaded.
$(document).ready(() => {

    // Use test$ to test jQuery Selector: test$( $("CSS Selector") );
    test$( $("ol") );
-uu-:---F1  script.js      Top L1     (Java/l Abbrev)---------------------------




