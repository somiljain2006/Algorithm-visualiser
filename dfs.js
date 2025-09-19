var c = document.getElementById("circle-1");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

var c = document.getElementById("circle-2");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

var c = document.getElementById("circle-3");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

var c = document.getElementById("circle-4");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

var c = document.getElementById("circle-5");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

var c = document.getElementById("circle-6");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

var c = document.getElementById("circle-7");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

var canvas = document.getElementById("line-1");
var ctx = canvas.getContext("2d");
var strx = 100; 
var stry = 160; 
var len = 90; 
var deg = 130; 
var rad = deg * (Math.PI / 180);
var endx = strx + len * Math.cos(rad);
var endy = stry + len * Math.sin(rad);
ctx.beginPath();
ctx.moveTo(strx, stry);
ctx.lineTo(endx, endy);
ctx.stroke();

var canvas = document.getElementById("line-2");
var ctx = canvas.getContext("2d");
var strx = 100; 
var stry = 160; 
var len = 78; 
var deg = 125; 
var rad = deg * (Math.PI / 180);
var endx = strx + len * Math.cos(rad);
var endy = stry + len * Math.sin(rad);
ctx.beginPath();
ctx.moveTo(strx, stry);
ctx.lineTo(endx, endy);
ctx.stroke();

var canvas = document.getElementById("line-3");
var ctx = canvas.getContext("2d");
var strx = 120; 
var stry = 160; 
var len = 90; 
var deg = 130; 
var rad = deg * (Math.PI / 180);
var endx = strx + len * Math.cos(rad);
var endy = stry + len * Math.sin(rad);
ctx.beginPath();
ctx.moveTo(strx, stry);
ctx.lineTo(endx, endy);
ctx.stroke();

var canvas = document.getElementById("line-4");
var ctx = canvas.getContext("2d");
var strx = 120; 
var stry = 160; 
var len = 85; 
var deg = 45; 
var rad = deg * (Math.PI / 180);
var endx = strx + len * Math.cos(rad);
var endy = stry + len * Math.sin(rad);
ctx.beginPath();
ctx.moveTo(strx, stry);
ctx.lineTo(endx, endy);
ctx.stroke();

var canvas = document.getElementById("line-5");
var ctx = canvas.getContext("2d");
var strx = 120; 
var stry = 160; 
var len = 73; 
var deg = 60; 
var rad = deg * (Math.PI / 180);
var endx = strx + len * Math.cos(rad);
var endy = stry + len * Math.sin(rad);
ctx.beginPath();
ctx.moveTo(strx, stry);
ctx.lineTo(endx, endy);
ctx.stroke();

var canvas = document.getElementById("line-6");
var ctx = canvas.getContext("2d");
var strx = 120; 
var stry = 160; 
var len = 87; 
var deg = 52; 
var rad = deg * (Math.PI / 180);
var endx = strx + len * Math.cos(rad);
var endy = stry + len * Math.sin(rad);
ctx.beginPath();
ctx.moveTo(strx, stry);
ctx.lineTo(endx, endy);
ctx.stroke();

function fill(ID, text) {
    let id = document.getElementById(ID);
    let ctx = id.getContext("2d");
    ctx.clearRect(0, 0, id.width, id.height);
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.font = "20px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, 93, 50);  
}
document.querySelector('.submit').addEventListener('click', function() {
    for(let i = 1; i <= 7; i++) {
        let clr = document.getElementById('val' + i);
        let val = document.getElementById('val' + i).value;
        fill('circle-' + i, val);
        clr.value = "";
    }
});