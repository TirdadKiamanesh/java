// Select all HTML elements with a class of "box".
var boxes = document.querySelectorAll(".box");

// For the 1st box (index = 0), change the background color to "blue".
boxes[0].style.backgroundColor = "green";
// For the 3rd box (index = 2), change the background color to "yellow".
boxes[1].style.backgroundColor = "purple";

boxes[2].style.backgroundColor = "#191919";

boxes[3].style.backgroundColor = "blanchedalmond";



// Variable to hold the current left margin.
var leftMargin = 0;
var leftMargin1 = 0;
var leftMargin2 = 0;
var leftMargin3 = 0;
var bottomMargin = 0;

// Variable used to add to the left margin.
var moveAmount = 5;
var moveAmount1 = 10;
var moveAmount2 = 15;
var moveAmount3 = 20;
var moveAmount4 = 25;




// Function that adds moveAmount to leftMargin then appends leftMargin
// to the first box's margin left. Basically moving the box to the right.
function boxClicked() {

    // 'console.log()' only displays in the browser console.
    // It's useful for you, the developer, to debug your code.
    console.log("Hey, box clicked!");
    leftMargin += moveAmount;
    boxes[0].style.marginLeft = leftMargin + "px";
}

function box1Clicked() {

    console.log("Hey, box1 clicked!");

    leftMargin1 += moveAmount1;
    boxes[1].style.marginLeft = leftMargin1 + "px";
}

function box2Clicked() {
    
    console.log("Hey, box2 clicked!");

    leftMargin2 += moveAmount2;
    boxes[2].style.marginLeft = leftMargin2 + "px";
}


function box3Clicked() {
    
    console.log("Hey, box3 clicked!");

    leftMargin3 += moveAmount3;
    boxes[3].style.marginLeft = leftMargin3 + "px";
}

function box4Clicked() {
    
    console.log("Hey, box4 clicked!");

    bottomMargin += moveAmount4;
    boxes[4].style.marginTop = bottomMargin + "px";
}


// When anyone clicks on thefirst box, call the function "boxClicked".
boxes[0].addEventListener("click", boxClicked);
boxes[1].addEventListener("click", box1Clicked);
boxes[2].addEventListener("click", box2Clicked);
boxes[3].addEventListener("click", box3Clicked);
boxes[4].addEventListener("click", box4Clicked);

