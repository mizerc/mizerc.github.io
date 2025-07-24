// Linear interpolation (lerp) between [c, d]
// t is between 0 and 1
function lerp(c, d, t) {
    return c + t * (d - c);
}

// Map value x from range [a, b] to range [c, d]
function mapRange(x, a, b, c, d) {
    // Normalize x to [0,1]
    let t = (x - a) / (b - a);
    // Use lerp to find mapped value in [c, d]
    return lerp(c, d, t);
}

class Complex {
    constructor(real = 0, img = 0) {
        this.real = real;
        this.img = img;
    }
    add(other) {
        // Input: 
        // z1 = a + bi
        // z2 = c + di
        // -------------
        // Output: 
        // z = (a + c) + (b + d)i
        return new Complex(this.real + other.real, this.img + other.img);
    }
    multiply(other) {
        // Input: 
        // z1 = a + bi
        // z2 = c + di
        // -------------
        // Output: 
        // z = (ac - bd) + (ad + bc)i
        const r = this.real * other.real - this.img * other.img;
        const i = this.real * other.img + this.img * other.real;
        return new Complex(r, i);
    }
    magnitudeSquared() {
        return this.real * this.real + this.img * this.img;
    }
}

const parent = document.getElementById('div-container-mandelbrot1');
const canvas = document.createElement('canvas');
canvas.width = parent.clientWidth;
canvas.height = parent.clientHeight;
parent.appendChild(canvas);
const ctx = canvas.getContext('2d');

const draw = () => {
    const zoom = 200.0;
    const w = canvas.width;
    const h = canvas.height;
    const cx = -150 / zoom;
    const cy = 0;
    const maxIter = 100;

    // const t0 = performance.now();
    for (let px = 0; px < w; px++) {
        for (let py = 0; py < h; py++) {
            const x0 = (px - w / 2) / zoom + cx;
            const y0 = (py - h / 2) / zoom + cy;
            const c = new Complex(x0, y0);

            let z = new Complex(0, 0);
            let it = 0;
            while (z.magnitudeSquared() <= 4 && it < maxIter) {
                z = z.multiply(z).add(c);
                it++;
            }

            const h360 = mapRange(it, 0, 100, 0, 360);
            const color = it === maxIter ? "black" : `hsl(${h360}, 65%, 50%)`;

            // const v255 = mapRange(it, 0, 100, 0, 255);
            // const color = it === maxIter ? "gray" : `rgb(${v255}, ${v255},${v255})`;

            ctx.fillStyle = color;
            ctx.fillRect(px, py, 1, 1);
        }
    }
    // ctx.fillStyle = 'black';
    // ctx.fillText(`time: ${performance.now() - t0}ms`, 10, 20);
}
draw();

// const downloadAsImage = () => {
//     const imageURL = canvas.toDataURL('image/png');
//     const link = document.createElement('a');
//     link.href = imageURL;
//     link.download = 'fractal.png';
//     link.click();
// }
// canvas.addEventListener('click', downloadAsImage);