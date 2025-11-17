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
		"https://cdn.discordapp.com/attachments/1439310390159868067/1439310390608531629/k_szk_gif.gif?ex=691a0dc2&is=6918bc42&hm=d2e05d4d3226177c99ceef8629358543da91746e5a748572e4467774b4140237&",
		"https://cdn.discordapp.com/attachments/996564593914691625/1439306075324157983/wyppy_nuzzle_plushy.gif?ex=691a09bd&is=6918b83d&hm=eda0160085e1a6fdce242418424f49854789646a5f555516d88329884027fa81&",
		"https://cdn.discordapp.com/attachments/1436818866696093787/1436818868365430884/shy_sway.gif?ex=6914f1d9&is=6913a059&hm=e4fb5458f41afcbed48989245e0601a349324d3f0ffab3088f38db265e1cb519&",
		"https://cdn.discordapp.com/attachments/1390191351894638696/1410316713245020340/IMG_8768.png?ex=69156e0a&is=69141c8a&hm=b8fedece3e83665976d78bfdd7ae7ac18e6887e046b4cd8d663e21aab8961ab6&",
		"https://cdn.discordapp.com/attachments/1390191351894638696/1425727869815885976/uhh-i-hate-myself-for-this-v0-o9hotvlky9od1.png?ex=6915770c&is=6914258c&hm=bc9feb1f5f55bc73f3b3b1309427e0a3614420f0cfe7171fd2f24ffc29d89b9f&",
		"https://cdn.discordapp.com/attachments/1390191351894638696/1437535830825631946/images.png?ex=69159352&is=691441d2&hm=a3247b27beb986763784b69e1901b07597443395750b1dc7d8acf9de7ad2e66e&",
		"https://cdn.discordapp.com/attachments/1390191351894638696/1427510670769000548/image.png?ex=69155be9&is=69140a69&hm=0164e8b56da436e6dbfaa0ffd4fdb5113be77795aab29e038a9643c8f45391f7&",
		"https://cdn.discordapp.com/attachments/996564593914691625/1408530455539482754/Illustration12.gif?ex=691585f5&is=69143475&hm=c1661375435d74e6854ecd62214a4c7b5672bb5d1116d9d8179a0beff2437267&",
		"https://cdn.discordapp.com/attachments/1117892832993214604/1376620607852249118/x-downloader.com_Lg9k9j-ezgif.com-video-to-gif-converter.gif?ex=69157399&is=69142219&hm=6e4059a4ae2435f63a335b331d5112decb0c5ecbec041a5ea4df704bfa8acf0d&",
		"https://cdn.discordapp.com/attachments/1390191351894638696/1406740959445913652/Untitled538_20250814100147.png?ex=6914f21c&is=6913a09c&hm=d3ca5451b1423955742cc42a57d1849856ca7515734da1a758fa441c86764e90&",
		"https://cdn.discordapp.com/attachments/1390191351894638696/1437538241896124526/santer_wypy.png?ex=69159591&is=69144411&hm=bf6866ad21d432c75084317e350bd4b79eb7fc71856f6958d419b5f3373e8d21&",
		"https://cdn.discordapp.com/attachments/1390191351894638696/1430443826387882078/IMG_3380.jpg?ex=69157ba0&is=69142a20&hm=3432b6be14d748024123aedf182b564d75771b1271c772eb454411053a519bd3&",
		"https://cdn.discordapp.com/attachments/1091441098829856949/1291649547017261086/attachment-1.gif?ex=69157be1&is=69142a61&hm=bcfc1312ab8678e1d217e053acffc9836c43540662900b8b9c96eeed920e5611&",
		"https://cdn.discordapp.com/attachments/1329851866326241392/1405531682999898143/ezgif.com-animated-gif-maker_5.gif?ex=69152922&is=6913d7a2&hm=d1b13f97d024ec5a97cd6af313dca8dfe037df8327d624a7433bc70636735fa3&",
		"https://cdn.discordapp.com/attachments/1390191351894638696/1404694443872878673/e1c3a73013db37145d6023981f65b1da.png?ex=69156925&is=691417a5&hm=84de1b50efa31498cc0f3c914755ba850b6ba618bd0247bd43aea24c18a4d75b&",
		"https://cdn.discordapp.com/attachments/1390191351894638696/1402756216488329370/44c1e289aef2cb3f91d047c3c2076213.png?ex=6914f387&is=6913a207&hm=a4a4c4155a45e9e692ce8fe240d4258ac754d0f793a38732bb9798e910f055f0&",
		"https://cdn.discordapp.com/attachments/1390191351894638696/1402756187220611173/e1b14aa93d75efd9760e4f1ad0701818.png?ex=6914f380&is=6913a200&hm=388de2d6a5631489ae93bcf6dac65db6f5c5e19868d9d26a675299397d3abcd6&",
		"https://cdn.discordapp.com/attachments/1390191351894638696/1437538213005627573/IMG_3450.jpg?ex=6915958a&is=6914440a&hm=5c2022ab9c9925bdf73e06c86310d8aa72bc0c44a8c01bda3360ebaa6d7b1148&",
		"https://cdn.discordapp.com/attachments/1390191351894638696/1436833703233065221/Z.png?ex=6914ffa9&is=6913ae29&hm=d39064e0de364f9dfde60e97fcca8587d6946c189f714529efdcba091e916447&",
		"https://cdn.discordapp.com/attachments/1390191351894638696/1434094104916262912/boop_wypher.png?ex=69159436&is=691442b6&hm=2113c8004d6bc150455b266bb11386e812d2bae8406c44a5e3dd816608629376&",
		"https://cdn.discordapp.com/attachments/1390191351894638696/1434094096259223583/Illustration16.png?ex=69159434&is=691442b4&hm=660c52552fad54d16212ccba46d61d8b2cbc1c933f19620c6e717375f9ab8df3&",
		"https://cdn.discordapp.com/attachments/1390191351894638696/1406387916367724754/image.png?ex=6914fad0&is=6913a950&hm=591aeb5173da2e5ecd129e567d4b76666892541d1a72c180a8c261b0cc82acf3&",
		"https://cdn.discordapp.com/attachments/1390191351894638696/1406387861984514190/image.png?ex=6914fac3&is=6913a943&hm=322e537214d741454e95e9345b234188acc8693cf2dec9635e82152bba8287d5&",
		"https://cdn.discordapp.com/attachments/1390191351894638696/1404694511430402068/31f3559857d85238d02b8726f4d0974c.png?ex=69156935&is=691417b5&hm=0a89ebb319652d354770869bc074ecf7e4453688ae1a398276e77b322b265c25&",
		"https://cdn.discordapp.com/attachments/1390191351894638696/1402756258204745928/db0a67b63c729ef4a05bdbcf0304d1bc.png?ex=6914f391&is=6913a211&hm=55f8d262b0bd416293a2b483989aa52d495ece583f431966ed313174e72c5882&",
		"https://cdn.discordapp.com/attachments/1390191351894638696/1437512604812836964/images.png?ex=69157db0&is=69142c30&hm=c918b00312713af5ac575e8f31839b308fcb65374ec3c565a8af979315bd850f&",
		"https://cdn.discordapp.com/attachments/1390191351894638696/1408509804082888764/image.png?ex=691572ba&is=6914213a&hm=8d4b5e488925ead79e14e339e7d08b1b460979397f9d2b915863a907b1ec9a16&",
		"https://cdn.discordapp.com/attachments/996564593914691625/1407431123734106193/ezgif.com-animated-gif-maker_8.gif?ex=69157aa0&is=69142920&hm=26fe26b9e645078f903dafd6860470e78c14aa3834fe5a422bc99449a7b83bf5&",
		"https://cdn.discordapp.com/attachments/1390191351894638696/1406740964738994360/Illustrationkitty.png?ex=6914f21d&is=6913a09d&hm=efbb2f32df2af45a76adda10e1886db9fed279e1a31458230f17f0e75b4023bd&",
		"https://cdn.discordapp.com/attachments/1390191351894638696/1406412018449121371/image.png?ex=69151143&is=6913bfc3&hm=ce5d99be25bd0029987a45c588fafde66273526386bc4637835b2c0093e090cc&",
		"https://cdn.discordapp.com/attachments/1390191351894638696/1406106084191633563/18ab759e3e972a342d3f222d4a3242c5.png?ex=691545d6&is=6913f456&hm=bf220ba3c5cf441623506bc049718b7af2e4a34b9f728ef37355a7b6efab2349&",
		"https://cdn.discordapp.com/attachments/1390191351894638696/1401777315628978247/149d588c37116da316e4082b1d3e415c.png?ex=6915585b&is=691406db&hm=e752b22e7f2839100b354d7d71cf725388d148f2d9465c583a04242b6be11fda&",
		"https://cdn.discordapp.com/attachments/1390191351894638696/1434094042962198618/G3YyR_TbMAA-ut9.jpg?ex=69159428&is=691442a8&hm=0ad2929aeaf1ed29417af96042b61468cd2cfbc80d5b78832bd67d1648ef914a&",
		"https://cdn.discordapp.com/attachments/1390191351894638696/1427504678714867783/image.png?ex=69155655&is=691404d5&hm=403cf7856fba5af4eda3d0f95adb04522da0e843325750f8fccdf853bbc9e46d&",
		"https://cdn.discordapp.com/attachments/1390191351894638696/1427504627909394495/image.png?ex=69155649&is=691404c9&hm=541f2f86d369fd83ad99346c72d35397786abaafe4ff0ad134efe884a8a75241&",
		"https://cdn.discordapp.com/attachments/1390191351894638696/1424998568787443852/IMG_3363.jpg?ex=691572d5&is=69142155&hm=4239446c2df6ca33996b64656cf12b5f21e5c460b4c2e814586bcbd500edfb4e&",
		"https://cdn.discordapp.com/attachments/1390191351894638696/1424998571371135078/IMG_3364.jpg?ex=691572d6&is=69142156&hm=cb762054c398bcc554db488969954773f7f2d727f22364f7676091bc28d81743&",
		"https://cdn.discordapp.com/attachments/1390191351894638696/1424997787711442955/IMG_3361.jpg?ex=6915721b&is=6914209b&hm=737a71057d032787427d4eda9d3bddf7080ec37769143da6385f173ed348ac7b&",
		"https://cdn.discordapp.com/attachments/1390191351894638696/1424285994802483250/G2bYbikXEAAYGSV.png?ex=69157e33&is=69142cb3&hm=2dc4b97fd10d94993d0b8b9c1dcab073de70b39f329d4cd4f5bca14aa142462f&",
		"https://cdn.discordapp.com/attachments/1422771953512742944/1422771953990766652/commforsundae.gif?ex=69154223&is=6913f0a3&hm=65e728dd6925ea9dd9436855d71cf1e93a5604abee3fc9316153f29ab3f4ee76&",
		"https://cdn.discordapp.com/attachments/1423429118623617076/1423429125175115860/cmp6wip.gif?ex=6915abed&is=69145a6d&hm=97932e7192d13b9485778deb50b3be65c46edff1061723abcb367c7040240e75&",
		"https://cdn.discordapp.com/attachments/1390191351894638696/1420474556073644093/G1n6KfqWwAAXHGB.png?ex=69157845&is=691426c5&hm=4607ded125f1c7c13b77e41ec1999c63f2a9f18f4256c37c9093b9799353ce35&",
		"https://cdn.discordapp.com/attachments/1319673560570134589/1407191789550567485/IMG_2675.gif?ex=6915447a&is=6913f2fa&hm=c6475ccd05f191456576ec28484b23b00f693ed711c1071f54bc9aaec994bc55&",
		"https://cdn.discordapp.com/attachments/1390191351894638696/1401762772341096578/71fee759bf808e0f50471e3ecc1b4091.png?ex=69154ad0&is=6913f950&hm=e078f38304a90ace83a59f02d399f071278612d2d56a2c37fa55f45176283d34&",
		"https://cdn.discordapp.com/attachments/1390191351894638696/1401762757124165815/1872fc2d986c9f30eb1c6c4e166b0a04.png?ex=69154acc&is=6913f94c&hm=e5249d74e1123259ecf299100599000017a4360dbeeb3dab7b46f57ed66d69c9&",
		"https://cdn.discordapp.com/attachments/1390191351894638696/1401762731383849051/d942fea5f9a310bbee845afe33a77640.png?ex=69154ac6&is=6913f946&hm=3cb47b87feceef468472937efa4fd9185a51302a0a63c00b6b6034f8e18e186c&",
		"https://cdn.discordapp.com/attachments/1363603252792266964/1366325856011812874/rapidsave.com_850ugwhxzzhe1_1.gif?ex=6915929d&is=6914411d&hm=e67b631f0baabb821827deba9f374a88da410323e73ddd160476174d92162bec&",
		"https://cdn.discordapp.com/attachments/996564593914691625/1437132715030741175/stretchy_gif.gif?ex=69156d63&is=69141be3&hm=99c28e145da2ea2e4126504dd43c77e40d7fe10b56cea1108442efabcb87e1cd&",
		"https://cdn.discordapp.com/attachments/1390191351894638696/1437841048603725874/GiEVZjzagAAYn_V.png?ex=69155e13&is=69140c93&hm=7075c1b42a5b66fde0692ef2d64c8daa912d9ac32f36140162af10c499041ba3&",
		"https://cdn.discordapp.com/attachments/1390191351894638696/1437840972623904921/Grdu2gbacAARIzQ.png?ex=69155e01&is=69140c81&hm=590dde48a43025141a3656bcc1c079254cd9378628f1680c526ea4606842bf8f&",
		"https://cdn.discordapp.com/attachments/1390191351894638696/1437538643223773284/9k.png?ex=691595f0&is=69144470&hm=45dc06ffab1c2f71e9abad6aee2616d615fbb34c5939c3cbf9d727bcc86dd31b&",
		"https://cdn.discordapp.com/attachments/1390191351894638696/1437538252692258867/wypher_poink.png?ex=69159593&is=69144413&hm=74152c40822ad3f18870f85fca11627c9f28b66f4f4ff55448240c450d9a8dc5&",
		"https://cdn.discordapp.com/attachments/1390191351894638696/1437538250641379380/wyphelelelle.png?ex=69159593&is=69144413&hm=25f6f71bc4c54daa4a73941551b00c587b532ec8e52d5dc882f1aa14070a3d38&",
		"https://cdn.discordapp.com/attachments/996564593914691625/1436833797084807199/nom_plushi.gif?ex=6915a880&is=69145700&hm=aae3a6d31fc421ee9d94ab45f2a5e3596a26f4d3361c2be8c0e8a7bc2471d804&",
		"https://cdn.discordapp.com/attachments/996564593914691625/1407023450337575004/ezgif.com-animated-gif-maker_7.gif?ex=69155073&is=6913fef3&hm=4697c26aed33b02bdaeb89ba8ea0b3deb0ef15b73a5a03ed80d05ef0eeebdcf9&",
		"https://media1.tenor.com/m/AeLCSsxOE-AAAAAd/boeing-boeing-quality.gif",
		"https://media1.tenor.com/m/4R5XA_QxKmAAAAAd/sabot-apfsds.gif",
		"https://cdn.discordapp.com/attachments/1430848567127572562/1430848567832088637/memewmwem.gif?ex=6915a312&is=69145192&hm=602178480470264bc79a9146cd5af96708b1db0a5a0c063f455c6405567553a3&",
		"https://cdn.discordapp.com/attachments/599530397663100950/1427874749379248148/images.png?ex=69155d7c&is=69140bfc&hm=7403efc120ceeb0c0e02ddf239e6994361fef234048d25ef13d0080fad3cab3f&",
		"https://c.tenor.com/chVTkW1yeMsAAAAd/tenor.gif",
		"https://cdn.discordapp.com/attachments/971760360245829712/1330216790655111271/3...gif?ex=691562ad&is=6914112d&hm=7250e9b144c3887f3ef0535554f97627b8c2b5b66cb14b5dba7796a4e6b1e83e&",
		"https://cdn.discordapp.com/attachments/1146902658838429757/1385468740107505674/attachment.gif?ex=69160010&is=6914ae90&hm=573eb3cc036feb329ea09f494f0393e3663fd771733c5f82c7606f35d13d4c50&",
		"https://cdn.discordapp.com/attachments/1112851420102799390/1362536059296284874/ezgif-82bc16feffda9a.gif?ex=6915a0d7&is=69144f57&hm=c5671ac012bde2da8c73d80ddff8aa37d0282d1deec16a274777eb51e6f0f702&",
		"https://gif.fxtwitter.com/tweet_video/GKV191EXMAEQUYT.gif",
		"https://cdn.discordapp.com/attachments/1287055108756209697/1338720763360051270/attachment.gif?ex=6916001e&is=6914ae9e&hm=69a4ed30c91624cd8d1e68be82511b8cbcd24fb436ddb9359e7b912470f6375d&",
		"https://media1.tenor.com/m/y1srgTJg4SEAAAAd/cute-boykisser.gif",
		"https://media.tenor.com/xpws-BQNHFAAAAAj/speech-bubble.gif",
		"https://cdn.discordapp.com/attachments/1166124588166565968/1369083875887677462/IMG_0766.gif?ex=6915b7f8&is=69146678&hm=e2f1c9eb55b366e48e26ed42e845ed65a55262a396c30a4a409479a6502ea1b2&",
		"https://cdn.discordapp.com/attachments/1316837413380689962/1370733696478347304/IMG_0130.gif?ex=6915c9bc&is=6914783c&hm=311ea212f7d92929f31d3115d0c2b8be7d428086c3e5b6addc5a4eec78957052&",
		"https://cdn.discordapp.com/attachments/1117893073398141028/1375179786204483655/IMG_0176.gif?ex=69157bba&is=69142a3a&hm=05dddaefcca0ef44feb0c40da15a11cb3fc4e15b576e4838baf45e64c1272f67&",
		"https://cdn.discordapp.com/attachments/1316837413380689962/1370732953969233941/IMG_0129.gif?ex=6915c90b&is=6914778b&hm=53ec24cb1733483591e3db878c701528035e983553eebcb81248e9558a23f3de&",
		"https://media1.tenor.com/m/oDDLsswEuicAAAAd/%D1%84%D0%B5%D0%BC%D0%B1%D0%BE%D0%B9.gif",
		"https://media1.tenor.com/m/a5dhLFyv4I8AAAAd/boykisser-kissingboys.gif",
		"https://media1.tenor.com/m/kv7sB6VzQHIAAAAd/boykisser.gif",
		
	];

	let current = 0;
	let nextPreload = null;
	let cssApplied = false;
	
	function getNextImage() {
	    const img = images[current];
	    current = (current + 1) % images.length;
	    return img;
	}
	
	function preload(url) {
	    return new Promise((resolve, reject) => {
	        const img = new Image();
	        let done = false;
	
	        const finish = (v, err = false) => {
	            if (done) return;
	            done = true;
	            err ? reject(v) : resolve(v);
	        };
	
	        img.onerror = () => finish(url, true);
	        img.onload = () => finish(url);
	        img.src = url;
	
	        setTimeout(() => finish(url), 250);
	    });
	}
	
	async function loadValid() {
	    const url = getNextImage();
	    try {
	        return await preload(url);
	    } catch {
	        return loadValid();
	    }
	}
	
	async function getImage() {
	    if (!nextPreload) nextPreload = loadValid();
	    const url = await nextPreload;
	    nextPreload = loadValid();
	    return url;
	}
	
	function applyBackground(url) {
	    let fadeLayer = document.getElementById("bg-fade-layer");
	    if (!fadeLayer) {
	        fadeLayer = document.createElement("div");
	        fadeLayer.id = "bg-fade-layer";
	        fadeLayer.style.position = "fixed";
	        fadeLayer.style.top = 0;
	        fadeLayer.style.left = 0;
	        fadeLayer.style.right = 0;
	        fadeLayer.style.bottom = 0;
	        fadeLayer.style.zIndex = "-2";
	        fadeLayer.style.opacity = "0";
	        fadeLayer.style.transition = "opacity 0.8s ease-out";
	        fadeLayer.style.willChange = "opacity";
	        document.body.appendChild(fadeLayer);
	    }
	
	    fadeLayer.style.opacity = "0";
	    fadeLayer.style.backgroundImage = `url("${url}")`;
	    fadeLayer.style.backgroundRepeat = "no-repeat";
	    fadeLayer.style.backgroundPosition = "center center";
	    fadeLayer.style.backgroundSize = "100% 100%`;
	
	    requestAnimationFrame(() => {
	        fadeLayer.style.opacity = "1";
	    });
	
	    if (!cssApplied) {
	        cssApplied = true;
	        const s = document.createElement("style");
	        s.id = "vencord-bg-style";
	        s.textContent = `
	            [class*=messagesWrapper] [class*=newTopicsBarContainer]::before,
	            [class*=stickyHeaderElevated]::before,
	            [class*=panels]::before,
	            [class*=floating]::before,
	            [class*=directoryModal] {
	                background-image: url("__BG__");
	                background-repeat: no-repeat !important;
	                background-size: 100% 100% !important;
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
	                background-image: url("__BG__");
	                background-color: rgba(0,0,0,0.7) !important;
	                background-repeat: no-repeat !important;
	                background-size: 100% 100% !important;
	                background-position: center center !important;
	                background-blend-mode: multiply;
	                transition: background 1s ease-in-out;
	            }
	        `;
	        document.head.appendChild(s);
	    }
	
	    const s = document.getElementById("vencord-bg-style");
	    s.textContent = s.textContent.replace(/__BG__/g, url);
	}
	
	async function updateBackground() {
	    const url = await getImage();
	    if (!url) return;
	    applyBackground(url);
	}
	
	function waitForVencord() {
	    const p = document.querySelector("[class*=panels]");
	    if (!p) {
	        requestAnimationFrame(waitForVencord);
	        return;
	    }
	
	    updateBackground();
	    setInterval(updateBackground, 15000);
	}
	
	waitForVencord();


})();






