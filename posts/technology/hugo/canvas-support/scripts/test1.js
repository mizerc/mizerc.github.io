console.log("TEST1.JS");
const parent = document.getElementById('div-container-test1');
const canvas = document.createElement('canvas');
canvas.width = parent.clientWidth;
canvas.height = parent.clientHeight;
parent.appendChild(canvas);
const ctx = canvas.getContext('2d');
const rectWidth = 100;
const rectHeight = 100;
const rectX = (canvas.width - rectWidth) / 2;
const rectY = (canvas.height - rectHeight) / 2;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = '#EEE';
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = 'red';
ctx.fillRect(rectX, rectY, rectWidth, rectHeight);
