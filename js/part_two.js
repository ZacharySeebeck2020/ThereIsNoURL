let hasHitMax = false;
let isDoorOpen = false; 

function Part2Activation() {
    this.scale = 0.3;
    this.minScale = .03;
    this.maxScale = 1;
    this.hasHitMax = false;
    this.isDoorOpen = false;
    
    document.querySelector('#pt2').style.transform = `scale(${scale})`;
    document.querySelector('#pt2').className = "center";
    document.querySelector('html').addEventListener('wheel', ZoomDoor);
    document.querySelector('html').addEventListener('touchmove', ZoomDoor);
}

function ZoomDoor(evt) {
    evt.preventDefault();
    if (hasHitMax == false) {
        if (evt.deltaY) delta = evt.deltaY / 120;
        scale += delta * 0.01;
        scale = Math.min(Math.max(minScale, scale), maxScale);
        document.querySelector('#pt2').style.transform = `scale(${scale})`;
        if (scale == maxScale) {
            hasHitMax = true;
            document.querySelector('html').removeEventListener('wheel', ZoomDoor);
            document.querySelector('html').removeEventListener('touchmove', ZoomDoor);
            document.querySelector('#mouseAction').classList = 'mouse-click-left';
            document.querySelector('.door').addEventListener('click', OpenDoor);
        }
    } else if (hasHitMax && isDoorOpen) {
        if (evt.deltaY) delta = evt.deltaY / 120;
        scale += delta * 0.03;
        scale = Math.min(Math.max(minScale, scale), maxScale);
        document.querySelector('#pt2').style.transform = `scale(${scale})`;
        if (document.querySelector('.backdoor').getBoundingClientRect().width >= window.innerWidth) {
            document.querySelector('html').removeEventListener('wheel', ZoomDoor);
            document.querySelector('html').removeEventListener('touchmove', ZoomDoor);
            document.querySelector('html').style.backgroundColor = 'white';
            document.querySelector('#pt2').classList = 'd-none'
        }
    }
}

function OpenDoor() {
    document.querySelector('html').addEventListener('wheel', ZoomDoor);
    document.querySelector('html').addEventListener('touchmove', ZoomDoor);
    document.querySelector('.door').classList = 'door door-open';
    document.querySelector('#mouseAction').classList = 'mouse-wheel';
    document.querySelector('.door').removeEventListener('click', OpenDoor);
    isDoorOpen = true;
    maxScale = 999999;
    minScale = 1

}