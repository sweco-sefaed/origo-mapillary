/* eslint-disable no-param-reassign */
// Source: w3schools https://www.w3schools.com/howto/howto_js_draggable.asp
const dragElement = function dragElement(elmnt) {
  let pos1 = 0;
  let pos2 = 0;
  let pos3 = 0;
  let pos4 = 0;

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = `${elmnt.offsetTop - pos2}px`;
    elmnt.style.left = `${elmnt.offsetLeft - pos1}px`;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  if (document.getElementById(`${elmnt.id}header`)) {
    document.getElementById(`${elmnt.id}header`).onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }
};

export default dragElement;
