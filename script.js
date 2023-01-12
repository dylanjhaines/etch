
let i = 0;
for(i = 1; i <= 256; i++){
document.body.onload = addElement(i);
}

//creates and assigns a class to the div elements of the etch-a-sketch
function addElement(i) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("etchCell");

  // creates blank cells
  const newContent = document.createTextNode("\xA0");
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div0");
  document.body.insertBefore(newDiv, currentDiv);
}

let etchSelect = document.getElementsByClassName("etchCell");
console.log(etchSelect);

for(i = 0; i <= 255; i++){
etchSelect[i].addEventListener("mouseover", function(event) {
  event.target.style.backgroundColor = "white";
})}
