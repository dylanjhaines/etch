
let i = 0;
for(i = 1; i <= 256; i++){
start.append = addElement(i);
}

//creates and assigns a class to the div elements of the etch-a-sketch
function addElement(i) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("etchCell");

  // creates blank cells
  const newContent = document.createTextNode("\xA0");
  newDiv.append(newContent);

  // add the newly created element and its content into the DOM
  start.appendChild(newDiv);
}



//create sketch effect by creating an array of all cells, iterating
//through them and changing cell style
let etchSelect = document.getElementsByClassName("etchCell");
for(i = 0; i <= 255; i++){
  etchSelect[i].addEventListener("mouseover", function(event) {
  event.target.style.backgroundColor = "white";
})}

//create function to reset sketch
const reseting = document.getElementById("reset");
reseting.addEventListener("click", resetFunction);
function resetFunction() {
  for(i = 0; i <= 255; i++){
    etchSelect[i].style.backgroundColor = "red";
  }}
