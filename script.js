
//initializing so it loads in a fixed state
let gridSize = 16;
function initialize() {
for(i = 0; i < (gridSize)**2; i++){
  start.append = addElement(i);
}}

//creates and assigns a class to the div elements of the etch-a-sketch
function addElement(i) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("etchCell");

  //sets the size of the "pixels" to be square based on the resolution choice
  let flexSize = (100/gridSize-.001);
  newDiv.style.flexBasis = `${flexSize}%`;
  newDiv.style.height = `${flexSize}%`;

  // creates blank content and fills cells with them
  const newContent = document.createTextNode("\xA0");
  newDiv.append(newContent);
  start.appendChild(newDiv);
}

//create sketch effect by creating an array of all cells, iterating
//through them and changing cell style
function createSketch(){
  let etchSelect = document.getElementsByClassName("etchCell");
  for(i = 0; i < gridSize**2; i++){
  etchSelect[i].addEventListener("mouseover", function(event) {
  event.target.style.backgroundColor = "gray";
})}}

//create function to reset sketch
const reseting = document.getElementById("reset");
reseting.addEventListener("click", resetFunction);
function resetFunction() {
  let remove = document.getElementById("start");
  while(remove.firstChild) {
    remove.removeChild(remove.firstChild);
  }
  initialize();
  createSketch();
}

//create function to change the size of the grid
const size = document.getElementById("size");
size.addEventListener("click", changeSize);
function changeSize() {
  gridSize = parseInt(prompt("How many pixels big (100 max) do you want your gird to be? ", gridSize));
  if (gridSize > 100) {
    alert("Too big!")
    gridSize = parseInt(prompt("How many pixels big (100 max) do you want your gird to be? ", gridSize));
  } else if (gridSize <= 0) {
    alert("Please enter a positve number less than 100!")
    gridSize = parseInt(prompt("How many pixels big (100 max) do you want your gird to be? ", gridSize));
  } else if (!(gridSize > 0) && !(gridSize < 100)) {
    alert("Please enter a positve number less than 100!")
    gridSize = parseInt(prompt("How many pixels big (100 max) do you want your gird to be? ", gridSize));
    if (!(gridSize > 0) && !(gridSize < 100)) {
      alert("You're being difficult, you get 69 pixels")
      gridSize = 69;
    } } resetFunction();
}

//initializes divisions and mouseover effect
initialize();
createSketch();