var canvas=document.getElementById('canvas');
var context=canvas.getContext('2d');
var radius=50;
var nStartX = 0;
var nStartY = 0;
var bIsDrawing = false;
var putPoint = function(e){
  nStartX = e.clientX;nStartY = e.clientY;
  bIsDrawing = true;
  radius = 0;
}
var drawPoint = function(e){
  if(!bIsDrawing)
    return;
  var nDeltaX = nStartX - e.clientX;
  var nDeltaY = nStartY - e.clientY;
  radius = Math.sqrt(nDeltaX * nDeltaX + nDeltaY * nDeltaY)
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.beginPath();
  context.arc(nStartX, nStartY, radius, 0, Math.PI*2);
  context.fill();
}
var stopPoint = function(e){
  bIsDrawing = false;
}
canvas.addEventListener('mousedown',putPoint);
canvas.addEventListener('mousemove',drawPoint);
canvas.addEventListener('mouseup',stopPoint);
