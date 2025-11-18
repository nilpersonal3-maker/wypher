// Wypha.user.js
/**
 * @name Wypha
 * @version 0.0.4
 * @description Wypher <3 Optimized with fade
 */
export default class Wypha {
    start() {}
    stop() {}
}

(() => {

	let currentIndex = 0;
	let overlays = [];
	let active = 0;
	
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
	
	function createOverlay() {
	    const div = document.createElement('div');
	    div.style.position = 'fixed';
	    div.style.top = '0';
	    div.style.left = '0';
	    div.style.width = '100%';
	    div.style.height = '100%';
	    div.style.zIndex = '-1';
	    div.style.pointerEvents = 'none';
	    div.style.backgroundRepeat = 'no-repeat';
	    div.style.backgroundPosition = 'center center';
	    div.style.backgroundSize = '100% 100%';
	    div.style.transition = 'opacity 1s ease-in-out';
	    div.style.opacity = '0';
	    document.body.appendChild(div);
	    return div;
	}
	
	async function applyNextBackground() {
	    const imgUrl = await getNextImage();
	    if (!imgUrl) return;
	    preloadImage(imgUrl);
	    if (overlays.length < 2) {
	        overlays.push(createOverlay());
	        overlays.push(createOverlay());
	    }
	
	    const next = 1 - active;
	    overlays[next].style.backgroundImage = `url('${imgUrl}')`;
	    overlays[next].style.opacity = '1';
	    overlays[active].style.opacity = '0';
	
	    active = next;
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
	waitForVencord();
})();



