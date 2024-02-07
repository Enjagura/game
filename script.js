let isDragging = false;
let initialX;
let initialY;
let offsetX = 0;
let offsetY = 0;

const draggableGrid = document.getElementById("draggableGrid");

draggableGrid.addEventListener("mousedown", (e) => {
  isDragging = true;
  initialX = e.clientX - offsetX;
  initialY = e.clientY - offsetY;
});

draggableGrid.addEventListener("mouseup", () => {
  isDragging = false;
});

draggableGrid.addEventListener("mousemove", (e) => {
  if (isDragging) {
    offsetX = e.clientX - initialX;
    offsetY = e.clientY - initialY;

    draggableGrid.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  }
});
