var boxes= document.querySelectorAll(".box");

boxes[0].style.backgroundColor = "blue" ;
boxes[2].style.backgroundColor = "yellow" ;

boxes[0].addEventListener( "click", boxClicked);

function boxClicked () {
    console.log( "Hey. box clicked!")
}

console.log(boxes[0]);