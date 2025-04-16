let menuContainer = document.querySelector(".menu-container");
let menuFlag = true;

// true -> show menu, false -> hide menu
menuContainer.addEventListener("click", (e) => {
  menuFlag = !menuFlag;
  if (menuFlag) openMenu();
  else closeMenu();
});

function openMenu() {
  // let iconElement = document.querySelector(".menu-container i");
  let iconElement = menuContainer.children[0];
  iconElement.classList.remove("fa-bars");
  iconElement.classList.add("fa-xmark");
}
function closeMenu() {
  // let iconElement = document.querySelector(".menu-container i");
  let iconElement = menuContainer.children[0];
  iconElement.classList.remove("fa-xmark");
  iconElement.classList.add("fa-bars");
}
