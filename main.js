Mouse = "empty";

canvas = document.getElementById("Circle");
ctx = canvas.getContext('2d');
Color = "blue";
Width = "2";
Raduis = 20;
var last_x, last_y;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    Width = document.getElementById("Width").value;
    Color = document.getElementById("Color").value;
    Radius = document.getElementById("Radius").value;
    Mouse = "mousedown";
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup() {
    Mouse = "mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
    Mouse = "mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;

    if (Mouse == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = Color;
        ctx.lineWidth = Width;
        ctx.arc(current_x, current_y, Raduis, 0, 2 * Math.PI);

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_x + "y = " + last_y);
        ctx.moveTo(last_x, last_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_x + "y = " + current_y);
        ctx.moveTo(last_x, last_y);
        ctx.lineTo(current_x, current_y);
        ctx.stroke();
        }

        last_x = current_x; 
        last_y = current_y;
}

function Area() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}