const container = document.querySelector(".container");
const gridBtn = document.querySelector("button");
const root = document.documentElement;

function renderGrid(size){

  for(let i = 0; i < size * size; i++){
    const divs = document.createElement("div");
    divs.classList.add("square");
    container.appendChild(divs);
  }
}

renderGrid(16);

function delGrid(){
  container.textContent = ''; 
}

function changeGrid(){
  const size = prompt("Grid Size: ", "");
  if (isNaN(size) || size < 0 || size > 100) {
   alert("Range 1 to 100");
   return; 
  }
  root.style.setProperty('--count', size);  
  delGrid();
  renderGrid(size);
}

gridBtn.addEventListener("click", changeGrid);

container.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("square")) {
    e.target.style.background = randomColor();
  }
});

function randomColor(){
  random = () => Math.floor(Math.random() * 256);
  const rgb = `rgb(${random()}, ${random()}, ${random()}`
  return rgb;
}
