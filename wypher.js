// wypha.user.js
/**
 * @name Wypha
 * @version 0.0.1
 * @description Wypher <3
 */
export default class Wypha {
  start() {}
  stop() {}
}

(() => {

	let currentIndex = 0;
	let styleTag;

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
	
	    if (!styleTag) {
	        styleTag = document.createElement('style');
	        styleTag.id = 'vencord-bg-style';
	        document.head.appendChild(styleTag);
	    }
	
	   styleTag.textContent = `
	        [class*=messagesWrapper] [class*=newTopicsBarContainer]::before,
	        [class*=stickyHeaderElevated]::before,
	        [class*=panels]::before,
	        [class*=floating]::before,
	        [class*=directoryModal],
	        body::after {
	            background-image: url('${imgUrl}') !important;
	            background-color: rgba(0,0,0,0.7) !important;
	            background-repeat: no-repeat !important;
	            background-size: 100% 100% !important; /* KEEP original aspect scaling */
	            background-position: center center !important;
	            background-attachment: fixed !important;
	            background-blend-mode: multiply;
	            transition: background 1s ease-in-out;
	        }
	    `;
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


















