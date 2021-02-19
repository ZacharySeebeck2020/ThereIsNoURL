let scale = 1;

function ZoomText(evt) {
    evt.preventDefault();
    if (evt.deltaY) delta = evt.deltaY / 120;
    scale += delta * -0.01;
    // Restrict scale
    scale = Math.min(Math.max(.03, scale), 1);
    // Apply scale transform
    document.querySelector('#nothingText').style.transform = `scale(${scale})`;
}

document.querySelector('html').onwheel = ZoomText;
document.querySelector('html').touchmove = ZoomText;