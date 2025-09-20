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
    ctx.fillText(text, 95, 50);  
}

function fill_circ(id, txt) {
    return new Promise((resolve) => {
        let c = document.getElementById(id);
        let ctx = c.getContext("2d");
        let r = 40, x = 95, y = 50;
        let opa = 0, sec = 0.02;   
        let x1 = 95, x2 = 50;
        function color() {
            ctx.clearRect(0, 0, c.width, c.height);
            ctx.fillStyle = `rgba(255, 165, 0, ${opa})`;
            ctx.beginPath();
            ctx.arc(x, y, r, 0, 2 * Math.PI);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(x, y, r, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.font = "20px Arial";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillStyle = "black";
            ctx.fillText(txt, x1, x2);
            if (opa < 1) {
                opa += sec;
                requestAnimationFrame(color);
            } else {
                setTimeout(resolve, 50);
                resolve();
            }
        }
        color();
    });
}

function animline(className, speed) {
    return new Promise((resolve) => {
        let line = document.querySelector(`.${className}`);
        let txt = line.textContent;
        line.textContent = "";
        for (let i = 0; i < txt.length; i++) {
            let alt = document.createElement("span");
            alt.textContent = txt[i];
            line.appendChild(alt);
        }
        let all = line.querySelectorAll("span");
        for (let i = 0; i < all.length; i++) {
            setTimeout(() => {
                all[i].style.color = "blue";
                if (i === all.length - 1){
                    setTimeout(resolve, speed);
                }
            }, i * speed);
        }
    });
}

function print(val) {
    return new Promise((resolve) => {
        const cout = document.getElementsByClassName("output")[0];
        cout.textContent = "Output: " + val;
        resolve();
    });
}

function reset() {
    return new Promise((resolve) => {
        let spans = document.querySelectorAll("#dfs span");
        for (let i = 0; i < spans.length; i++) {
            spans[i].style.color = "black";
        }
        setTimeout(resolve, 50); 
    });
}

function added(val){
    return new Promise((resolve) => {
        let out = document.getElementsByClassName("output")[0];
        out.textContent += " " + val;
        resolve();
    });
}

document.querySelector('.submit').addEventListener('click', async function() {
    let nums = [];
    for(let i = 1; i <= 7; i++) {
        let clr = document.getElementById('val' + i);
        let val = document.getElementById('val' + i).value;
        nums.push(val); 
        fill('circle-' + i, val);
        clr.value = "";
    }
    await animline('a', 20);
    await animline('b', 100);
    await fill_circ('circle-1', nums[0]);
    await animline('c', 100);
    await print(nums[0]);
    await animline('d', 20);
    await animline('e', 20);
    await animline('f', 20);
    await animline('g', 20);
    await animline('h1', 20);
    await animline('i1', 20);
    await reset();
    await animline('a', 20);
    await animline('b', 100);
    await fill_circ('circle-2', nums[1]);
    await animline('c', 100);
    await added(nums[1]);
    await animline('d', 20);
    await animline('e', 20);
    await animline('f', 20);
    await animline('g', 20);
    await animline('h1', 20);
    await animline('i1', 20);
    await reset();
    await animline('a', 20);
    await animline('b', 100);
    await fill_circ('circle-4', nums[3]);
    await animline('c', 100);
    await added(nums[3]);
    await animline('d', 20);
    await animline('j1', 20);
    await animline('i1', 20);
    await reset();
    await animline('a', 20);
    await animline('b', 100);
    await fill_circ('circle-5', nums[4]);
    await animline('c', 100);
    await added(nums[4]);
    await animline('d', 20);
    await animline('j1', 20);
    await animline('i1', 20);
    await reset();
    await animline('a', 20);
    await animline('b', 100);
    await fill_circ('circle-3', nums[2]);
    await animline('c', 100);
    await added(nums[2]);
    await animline('d', 20);
    await animline('e', 20);
    await animline('f', 20);
    await animline('g', 20);
    await animline('h1', 20);
    await animline('j1', 20);
    await animline('i1', 20);
    await reset();
    await animline('a', 20);
    await animline('b', 100);
    await fill_circ('circle-6', nums[5]);
    await animline('c', 100);
    await added(nums[5]);
    await animline('d', 20);
    await animline('j1', 20);
    await animline('i1', 20);
    await reset();
    await animline('a', 20);
    await animline('b', 100);
    await fill_circ('circle-7', nums[6]);
    await animline('c', 100);
    await added(nums[6]);
    await animline('d', 20);
    await animline('j1', 20);
    await animline('i1', 20);
});