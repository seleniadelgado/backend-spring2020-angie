let someText = "test";

function someFunction() {
    console.log("we're running this global function on the whole script.");
}

//checking if selector has anything in it. 
function test$(arrayToTest) {
    if (arrayToTest.length === 0) {
        console.log("Your jQuery selector selected nothing! Check your spelling.");
        console.log(arrayToTest);
        return arrayToTest;
    } else {
        return arrayToTest;
    }
};

// Waits until HTML has fully loaded.
$(document).ready(() => {
    test$( $("ol") );
    test$( $("body") );


    // Storing search in a variable.
    let myHeading = $("h1");

    // Waits 5 seconds to change the color of the headings to pink.
    setTimeout(() => {
        myHeading.css("color", "pink");
    }, 5000);

    // When any headings are clicked on, change them to blue.
    myHeading.click(() => {
        let PTag = "<p>This is a paragraph tag.</p>";

        $("body").append(PTag);

    });



    $("#create-popup").click(() => {
        console.log(someText);
        someFunction();

        // Setting up the popup.
        let myPopup = `
        <div id="popup-block">
            <div id="popup-container">
                <p>You must deal with me!</p>
            </div>
        </div>`;

        // attaches popup to the body element
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

        // using a shortcut for popup-container because we use it a lot.
        let popup = $("#popup-container");

        // this styles white/purple box.
        popup.css({
            "margin": "0 auto",
            "width": "300px",
            "height": "300px",
            "background-color": "purple",
            "border": "solid 5px red"
        });

        // This adds an H1 to white box using append.
        popup.append("<h1>I have been added AFTER THE FACT!</h1>");

        // adds a "Close" button to white/purple box.
        popup.append("<button id='close'>Close this popup!</button>");

        // starts listening to the close button and delete the grandparent.
        $("#close").click(() => {
            $("#close").parent().parent().remove();
        });

    });


    // Inspecting what we searched.
    console.log(myHeading);

});