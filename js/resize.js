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


// creates a global "addWheelListener" method
// example: addWheelListener( elem, function( e ) { console.log( e.deltaY ); e.preventDefault(); } );
(function(window,document) {

    var prefix = "", _addEventListener, support;

    // detect event model
    if ( window.addEventListener ) {
        _addEventListener = "addEventListener";
    } else {
        _addEventListener = "attachEvent";
        prefix = "on";
    }

    // detect available wheel event
    support = "onwheel" in document.createElement("div") ? "wheel" : // Modern browsers support "wheel"
              document.onmousewheel !== undefined ? "mousewheel" : // Webkit and IE support at least "mousewheel"
              "DOMMouseScroll"; // let's assume that remaining browsers are older Firefox

    window.addWheelListener = function( elem, callback, useCapture ) {
        _addWheelListener( elem, support, callback, useCapture );

        // handle MozMousePixelScroll in older Firefox
        if( support == "DOMMouseScroll" ) {
            _addWheelListener( elem, "MozMousePixelScroll", callback, useCapture );
        }
    };

    function _addWheelListener( elem, eventName, callback, useCapture ) {
        elem[ _addEventListener ]( prefix + eventName, support == "wheel" ? callback : function( originalEvent ) {
            !originalEvent && ( originalEvent = window.event );

            // create a normalized event object
            var event = {
                // keep a ref to the original event object
                originalEvent: originalEvent,
                target: originalEvent.target || originalEvent.srcElement,
                type: "wheel",
                deltaMode: originalEvent.type == "MozMousePixelScroll" ? 0 : 1,
                deltaX: 0,
                deltaY: 0,
                deltaZ: 0,
                preventDefault: function() {
                    originalEvent.preventDefault ?
                        originalEvent.preventDefault() :
                        originalEvent.returnValue = false;
                }
            };

            // calculate deltaY (and deltaX) according to the event
            if ( support == "mousewheel" ) {
                event.deltaY = - 1/40 * originalEvent.wheelDelta;
                // Webkit also support wheelDeltaX
                originalEvent.wheelDeltaX && ( event.deltaX = - 1/40 * originalEvent.wheelDeltaX );
            } else {
                event.deltaY = originalEvent.deltaY || originalEvent.detail;
            }

            // it's time to fire the callback
            return callback( event );

        }, useCapture || false );
    }

})(window,document);


function initresize(){
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
