var mouseevent="empty"
var lastpositionofx,lastpositionofy
var currentpositionofx,currentpositionofy
canvas=document.getElementById("canvas")
ctx=canvas.getContext("2d")
color="purple"
width=2
radius=40
ctx.beginPath()
ctx.strokeStyle=color
ctx.lineWidth=2
ctx.arc(200,200,40,0,2*Math.PI)
ctx.stroke()


canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
color=document.getElementById("color").value;
width=document.getElementById("width").value;
radius=document.getElementById("radius").value;
mouseEvent="mouseDown";

}

function my_mousemove(e)
{
currentpositionofx=e.clientX-canvas.offsetLeft;
currentpositionofy=e.clientY-canvas.offsetTop;

if (mouseEvent=="mouseDown") {
 console.log("current position of x and y cordinates=");
 console.log("x ="+currentpositionofy);
 ctx.beginPath();
 ctx.strokestyle=color;
 ctx.lineWidth=width_of_line;
 ctx.arc(currentpositionofx,currentpositionofy,radius,0,2* Math.PI);
 ctx.stroke();   
}
}
function clear_area() {
    ctx.clearRect(0,0,canvas.width,canvas.height)
    }