var mouseEvent="empty";
var last_x, last_y;
canvas= document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
color="blue";
width_of_line=1;
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    color=document.getElementById("color").value;
width_of_line=document.getElementById("width_of_line").value;
mouseEvent="mouseDown";
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
    current_position_of_mouse_x=e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY - canvas.offsetTop;
if(mouseEvent=="mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle=color
    ctx.lineWidth=width_of_line;
    ctx.moveTo(last_x,last_y);
    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y); ctx.stroke();
}
last_x=current_position_of_mouse_x;
last_y=current_position_of_mouse_y;


}
canvas.addEventListener("mouseup", my_mouseup);
 function my_mouseup(e) { mouseEvent = "mouseUP";} 
 canvas.addEventListener("mouseleave", my_mouseleave);
  function my_mouseleave(e) { mouseEvent = "mouseleave"; }