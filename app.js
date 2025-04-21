let menuContainer = document.querySelector(".menu-container");
let menuFlag = true;
let toolsContainer = document.querySelector(".tools-container");
let pencilToolContainer = document.querySelector(".pencil-tool-container");
let eraserToolContainer = document.querySelector(".eraser-tool-container");
let pencilTool = document.querySelector(".pencil");
let eraserTool = document.querySelector(".eraser");
let pencilFlag = false;
let eraserFlag = false;

// true -> show menu, false -> hide menu
menuContainer.addEventListener("click", (e) => {
  menuFlag = !menuFlag;
  if (menuFlag) openMenu();
  else closeMenu();
});

function openMenu() {
  // let iconElement = document.querySelector(".menu-container i");
  let iconElement = menuContainer.children[0];
  iconElement.classList.remove("fa-xmark");
  iconElement.classList.add("fa-bars");
  toolsContainer.style.display = "flex";
}
function closeMenu() {
  // let iconElement = document.querySelector(".menu-container i");
  let iconElement = menuContainer.children[0];
  iconElement.classList.remove("fa-bars");
  iconElement.classList.add("fa-xmark");
  toolsContainer.style.display = "none";
  pencilToolContainer.style.display = "none";
  eraserToolContainer.style.display = "none";
}

// pencil tool
pencilTool.addEventListener("click", (e) => {
  pencilFlag = !pencilFlag;
  if (pencilFlag) pencilToolContainer.style.display = "block";
  else pencilToolContainer.style.display = "none";
});

// eraser tool
eraserTool.addEventListener("click", (e) => {
  eraserFlag = !eraserFlag;
  if (eraserFlag) eraserToolContainer.style.display = "flex";
  else eraserToolContainer.style.display = "none";
});
