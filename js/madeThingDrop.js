var canvasBox = document.querySelector(".canvasBox");
var draggableElement = document.querySelector(".madeThingsWindow");
var draggableElement_top = document.querySelector(".madeThingsWindow_top");
    var offsetX = 0;
    var offsetY = 0;
    var offsetXelse = 0;
    var offsetYelse = 0;

    draggableElement_top.addEventListener("mousedown", dragStart);
    canvasBox.addEventListener("mousedown", dragStartelse);

    function dragStart(event) {
    draggableElement.style.transition = '0s'
      offsetX = event.clientX - draggableElement.offsetLeft;
      offsetY = event.clientY - draggableElement.offsetTop;

      document.addEventListener("mousemove", dragElement);
      document.addEventListener("mouseup", stopDrag);
    }
    function dragStartelse(event) {
      canvasBox.style.transition = '0s'
        offsetXelse = event.clientX - canvasBox.offsetLeft;
        offsetYelse = event.clientY - canvasBox.offsetTop;
  
        document.addEventListener("mousemove", dragElementelse);
        document.addEventListener("mouseup", stopDragelse);
      }

    function dragElement(event) {
      draggableElement.style.left = event.clientX - offsetX + "px";
      draggableElement.style.top = event.clientY - offsetY + "px";
    }
    function dragElementelse(event) {
      canvasBox.style.left = event.clientX - offsetXelse + "px";
      canvasBox.style.top = event.clientY - offsetYelse + "px";
    }

    function stopDrag() {

      document.removeEventListener("mousemove", dragElement);
      document.removeEventListener("mouseup", stopDrag);
    }
    function stopDragelse() {

      document.removeEventListener("mousemove", dragElementelse);
      document.removeEventListener("mouseup", stopDragelse);
    }
$('.madeThingsWindow_closeBtn').click(function(){
    draggableElement.style.transition = '1s'

    setTimeout(function(){
        draggableElement.style.left = window.innerWidth+'px'
        draggableElement.style.top = window.innerHeight-450+'px'
    },100)
})
window.onload = function(){
    draggableElement.style.left = window.innerWidth+'px'
    draggableElement.style.top = window.innerHeight-450+'px'
}

draggableElement.addEventListener('wheel', function(e) {
  e.stopPropagation();
});
