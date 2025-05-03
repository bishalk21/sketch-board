let menuContainer = document.querySelector(".menu-container");
let menuFlag = true;
let toolsContainer = document.querySelector(".tools-container");
let pencilToolContainer = document.querySelector(".pencil-tool-container");
let eraserToolContainer = document.querySelector(".eraser-tool-container");
let pencilTool = document.querySelector(".pencil");
let eraserTool = document.querySelector(".eraser");
let pencilFlag = false;
let eraserFlag = false;
let stickyNote = document.querySelector(".sticky-note");
let upload = document.querySelector(".upload");

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

// sticky template
function createStickyTemplate(stickyTemplate) {
  let stickyNoteContainer = document.createElement("div");
  stickyNoteContainer.setAttribute("class", "sticky-note-tool-container");

  stickyNoteContainer.innerHTML = stickyTemplate;
  document.body.appendChild(stickyNoteContainer);

  let closeStickyNote = stickyNoteContainer.querySelector(".close-sticky-note");
  let minimizeStickyNote = stickyNoteContainer.querySelector(
    ".minimize-sticky-note"
  );

  noteActions(minimizeStickyNote, closeStickyNote, stickyNoteContainer);

  stickyNoteContainer.onmousedown = function (event) {
    dragAndDrop(stickyNoteContainer, event);
  };
  stickyNoteContainer.ondragstart = function () {
    return false;
  };
}

// sticky note
stickyNote.addEventListener("click", (e) => {
  let stickyNoteTemplateHTML = `
      <div class="header-container">
          <div class="sticky-note-header">Sticky Note</div>
          <div class="sticky-note-menu">
            <div class="minimize-sticky-note">
              <i class="fa-solid fa-minus"></i>
            </div>
            <div class="close-sticky-note">
              <i class="fa-solid fa-xmark"></i>
            </div>
          </div>
        </div>

        <div class="sticky-note-body">
          <textarea
            id="sticky-note-text"
            class="sticky-note-text"
            placeholder="Write something..."
          ></textarea>
        </div>
  `;

  createStickyTemplate(stickyNoteTemplateHTML);
});

function noteActions(minimizeStickyNote, closeStickyNote, stickyNoteContainer) {
  // close sticky note
  closeStickyNote.addEventListener("click", (e) => {
    stickyNoteContainer.remove();
  });

  // minimize sticky note
  minimizeStickyNote.addEventListener("click", (e) => {
    let noteBody = stickyNoteContainer.querySelector(".sticky-note-body");
    let display = getComputedStyle(noteBody).getPropertyValue("display");
    if (display === "none") {
      noteBody.style.display = "block";
      minimizeStickyNote.children[0].classList.remove("fa-plus");
      minimizeStickyNote.children[0].classList.add("fa-minus");
    } else {
      // noteContainer.style.display = "none";
      noteBody.style.display = "none";
      minimizeStickyNote.children[0].classList.remove("fa-minus");
      minimizeStickyNote.children[0].classList.add("fa-plus");
    }
  });
}

function dragAndDrop(element, event) {
  let shiftX = event.clientX - element.getBoundingClientRect().left;
  let shiftY = event.clientY - element.getBoundingClientRect().top;

  element.style.position = "absolute";
  element.style.zIndex = 1000;
  // document.body.append(element);

  moveAt(event.pageX, event.pageY);

  // moves the element at (pageX, pageY) coordinates
  // taking initial shifts into account
  function moveAt(pageX, pageY) {
    element.style.left = pageX - shiftX + "px";
    element.style.top = pageY - shiftY + "px";
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // move the element on mousemove
  document.addEventListener("mousemove", onMouseMove);

  // drop the element, remove unneeded handlers
  element.onmouseup = function () {
    document.removeEventListener("mousemove", onMouseMove);
    element.onmouseup = null;
  };
}

// upload image
upload.addEventListener("click", (e) => {
  // open file explorer
  let input = document.createElement("input");
  input.setAttribute("type", "file");
  input.click();

  input.addEventListener("change", (e) => {
    let file = input.files[0];
    let url = URL.createObjectURL(file);

    let stickyImageTemplateHTML = `
      <div class="header-container">
          <div class="sticky-note-header">Image</div>
          <div class="sticky-note-menu">
            <div class="minimize-sticky-note">
              <i class="fa-solid fa-minus"></i>
            </div>
            <div class="close-sticky-note">
              <i class="fa-solid fa-xmark"></i>
            </div>
          </div>
        </div>

        <div class="sticky-note-body">
          <img src="${url}" alt="" />
        </div>
    `;

    createStickyTemplate(stickyImageTemplateHTML);
  });
});
