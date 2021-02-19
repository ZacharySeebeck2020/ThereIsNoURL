let scale = 1;

function ZoomText(evt) {
    evt.preventDefault();
    if (evt.deltaY) delta = evt.deltaY / 120;
    scale += delta * -0.01;
    // Restrict scale
    scale = Math.min(Math.max(.03, scale), 1);
    // Apply scale transform
    el.style.transform = `scale(${scale})`;
}

const el = document.querySelector('h3');
el.onwheel = ZoomText;