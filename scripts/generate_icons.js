function createCanvas(size){
    if (typeof OffscreenCanvas !== 'undefined') return new OffscreenCanvas(size, size);
    const canvas = document.createElement('canvas');
    canvas.width  = size;
    canvas.height = size;
    return canvas;
}

const size = 128;
const textScaling = 0.8;
const canvas = createCanvas(size);
const context = canvas.getContext('2d');
context.clearRect(0, 0, size, size);
context.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2.0);
context.fillStyle = '#FFA630';
context.fill();
context.font = (size * textScaling) + 'px Arial';
context.fillStyle = "white";
context.textAlign = "center";
context.textBaseline = 'hanging';
const capHeightRatio = 0.72; // for Arial
context.fillText('F', size / 2, (size - (size * textScaling * capHeightRatio)) / 2.0);
canvas.convertToBlob().then(blob => {
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.href = window.URL.createObjectURL(blob);
    a.download = 'icon' + size + '.png';
    a.click();
});
