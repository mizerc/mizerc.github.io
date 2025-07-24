console.log("TEST1.JS");

class Vec2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  add(vec) {
    return new Vec2(this.x + vec.x, this.y + vec.y);
  }
  rotate(angleRad) {
    const cos = Math.cos(angleRad);
    const sin = Math.sin(angleRad);
    return new Vec2(
      this.x * cos - this.y * sin,
      this.x * sin + this.y * cos
    );
  }
}

// Setup canvas and context
const parent = document.getElementById('div-container-rotate1');
const canvas = document.createElement('canvas');
canvas.width = parent.clientWidth;
canvas.height = parent.clientHeight;
parent.appendChild(canvas);
const ctx = canvas.getContext('2d');

// Define origin in the middle of canvas
const origin = new Vec2(canvas.width / 2, canvas.height / 2);

let angle = 0;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw background fill
  ctx.fillStyle = '#EEE';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw axes lines from origin
  ctx.strokeStyle = 'gray';
  ctx.lineWidth = 1;

  // X axis (horizontal)
  ctx.beginPath();
  ctx.moveTo(0, origin.y);
  ctx.lineTo(canvas.width, origin.y);
  ctx.stroke();

  // Y axis (vertical)
  ctx.beginPath();
  ctx.moveTo(origin.x, 0);
  ctx.lineTo(origin.x, canvas.height);
  ctx.stroke();

  // Draw rotating vector at origin
  const baseVec = new Vec2(50, 0);
  const rotatedVec = baseVec.rotate(angle);


  // Vector
  ctx.strokeStyle = 'gray';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(origin.x, origin.y);
  ctx.lineTo(origin.x + rotatedVec.x, origin.y + rotatedVec.y);
  ctx.stroke();

  // Red circle
  ctx.beginPath();
  ctx.arc(origin.x + rotatedVec.x, origin.y + rotatedVec.y, 4, 0, Math.PI * 2);
  ctx.strokeStyle = 'red';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Text
  ctx.font = '12px Arial';
  ctx.fillStyle = 'black';
  ctx.fillText(`x,y: <${Math.round(rotatedVec.x)},${Math.round(rotatedVec.y)}>`, 10, 20);

  // Update angle for rotation animation
  const degPerUpdate = 15;
  const radPerUpdate = degPerUpdate * Math.PI / 180;
  angle += radPerUpdate;

  setTimeout(draw, 500);
}

draw();