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
var leftMargin4 = 0;
var leftMargin5 = 0;
// Variable used to add to the left margin.
var moveAmount = 5;
var moveAmount1 = 10;
var moveAmount2 = 15;
var moveAmount3 = 20;
var moveAmount4 = 25;
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
    boxes[2].style.marginLeft2 = leftMargin2 + "px";

// When anyone clicks on thefirst box, call the function "boxClicked".
boxes[0].addEventListener("click", boxClicked);
boxes[2].addEventListener("click", boxClicked);
