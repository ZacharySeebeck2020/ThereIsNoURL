let scale = 1;
var minScale = .03;
var maxScale = 1;

function ZoomText(evt) {
    evt.preventDefault();
    if (evt.deltaY) delta = evt.deltaY / 120;
    scale += delta * -0.01;
    scale = Math.min(Math.max(minScale, scale), maxScale);
    document.querySelector('#nothingText').style.transform = `scale(${scale})`;
    if (scale == minScale) {
        document.querySelector('html').removeEventListener('wheel', ZoomText);
        document.querySelector('html').removeEventListener('touchmove', ZoomText);
        document.getElementById('pt1').className = 'd-none';
        Part2Activation();
    }
}
document.querySelector('html').addEventListener('wheel', ZoomText);
document.querySelector('html').addEventListener('touchmove', ZoomText);