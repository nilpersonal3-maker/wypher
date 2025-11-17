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
    const images = [
	];

	let current = 0;

	function getNextImage() {
	    if (current >= images.length) current = 0;
	    return images[current++];
	}
	async function getGithubImages() {
	  const url = "https://api.github.com/repos/nilpersonal3-maker/wypherrr/contents/";
	  const res = await fetch(url);
	  const data = await res.json();
	  return data.filter(f => f.type === "file").map(f => f.download_url);
	}
	

    function applyBackground(imgUrl) {
        document.documentElement.style.setProperty('--app-background', `url("${imgUrl}")`);

        const style = document.createElement('style');
        style.id = 'vencord-bg-style';
        style.textContent = `
            [class*=messagesWrapper] [class*=newTopicsBarContainer]::before,
            [class*=stickyHeaderElevated]::before,
            [class*=panels]::before,
            [class*=floating]::before,
            [class*=directoryModal] {
                background-image: url('${imgUrl}') !important;
                background-color: white !important;
                background-repeat: no-repeat !important;
                background-size: 100% 100% !important; /* STRETCH X/Y */
                background-position: center center !important;
                background-attachment: fixed !important;
                background-blend-mode: multiply;
                transition: background 1s ease-in-out;
            }

            body::after {
                content: "";
                position: fixed;
                top: 0; left: 0; right: 0; bottom: 0;
                z-index: -1;
                pointer-events: none;
                background-image: url('${imgUrl}') !important;
                background-color: rgba(0,0,0,0.7) !important; /* DARK overlay */
                background-repeat: no-repeat !important;
                background-size: 100% 100% !important; /* STRETCH X/Y */
                background-position: center center !important;
                background-blend-mode: multiply;
                transition: background 1s ease-in-out;
            }
        `;
        document.head.appendChild(style);
        console.log("Vencord background set to:", imgUrl);
    }

    function waitForVencord() {
        const panels = document.querySelector('[class*=panels]');
        if (!panels) {
            requestAnimationFrame(waitForVencord);
            return;
        }

        applyBackground(getNextImage());
	getGithubImages().then(urls => console.log(urls));

        setInterval(() => {
            applyBackground(getNextImage());
				getGithubImages().then(urls => console.log(urls));
        }, 30000);
    }

    waitForVencord();


})();











