function resize(event) {
  var y = event.deltaY;
  var currentSize = event.target.style.width;
  if (y > 0) {
    newSize = parseInt(currentSize) + 10;
  } else {
    newSize = parseInt(currentSize) - 10;
  }
  event.target.style.width = newSize + "vw";
  event.target.style.height = newSize + "vw";
}

/*function initDragging(){
	var draggableCollection = document.getElementsByClassName("draggable");
	var collectionLength = draggableCollection.length;
	var lItem;
	for (var i = 0; i < collectionLength; i++) {
		lItem = draggableCollection.item(i);
		lItem.addEventListener("mousedown", onMouseDown);
		lItem.addEventListener("mousemove", onMouseMove);
		lItem.addEventListener("mouseup", onMouseUp);
		lItem.addEventListener("mouseleave", onMouseUp);
	}
}

function onMouseDown(e) {
this.prevX = e.clientX;
this.prevY = e.clientY;
this.isMouseDown = true;
this.parentNode.appendChild(this);
}

function onMouseMove(e) {
if(this.isMouseDown) {
this.style.left = (Number(this.style.left.substring(0,this.style.left.length -2)) + (e.clientX - this.prevX)) + "px";
this.style.top = (Number(this.style.top.substring(0,this.style.top.length -2)) + (e.clientY - this.prevY)) + "px";
}

this.prevX = e.clientX;
this.prevY = e.clientY;
}

function onMouseUp(e) {
this.isMouseDown = false;
}

initDragging();*/
