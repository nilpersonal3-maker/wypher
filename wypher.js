// Wypha.user.js
/**
 * @name Wypha
 * @version 0.0.4
 * @description Wypher <3 Optimized with fade
 */
export default class Wypha {
    start() { initWypha(); }
    stop() {}
}

let currentIndex = 0;
let overlay;

async function getNextImage() {
    const res = await fetch("https://api.github.com/repos/nilpersonal3-maker/wypherrr/contents/");
    const data = await res.json();
    const file = data[currentIndex % data.length];
    currentIndex++;
    return file.download_url;
}

function preloadImage(url) {
    const img = new Image();
    img.src = url;
}

async function applyNextBackground() {
    const imgUrl = await getNextImage();
    if (!imgUrl) return;

    preloadImage(imgUrl);

    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'vencord-bg-overlay';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.zIndex = '-1';
        overlay.style.pointerEvents = 'none';
        overlay.style.backgroundRepeat = 'no-repeat';
        overlay.style.backgroundPosition = 'center center';
        overlay.style.backgroundSize = '100% 100%';
        overlay.style.transition = 'opacity 1s ease-in-out';
        overlay.style.opacity = '0';
        document.body.appendChild(overlay);
    }

    overlay.style.backgroundImage = `url('${imgUrl}')`;
    overlay.style.opacity = '1';
    setTimeout(() => {
        overlay.style.opacity = '1';
    }, 1000);

    console.log("Vencord background set to:", imgUrl);
}

function waitForVencord() {
    if (!document.querySelector('[class*=panels]')) {
        requestAnimationFrame(waitForVencord);
        return;
    }

    applyNextBackground();
    setInterval(applyNextBackground, 30000);
}

function initWypha() {
    waitForVencord();
}
