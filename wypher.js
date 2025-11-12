// ==UserScript==
// @name         Trello Background Randomizer
// @description  Fetches Trello images once, then rotates background based on time
// @version      1.1
// ==/UserScript==

const typ = ["Morning", "Afternoon", "Evening", "Night", "GeneralPool"];
const key = "2c562eac0bab3292334bf314f28fb785";
const token = "ATTAc99c5f629bf9f57a2b775e36214d3e50211f4587b7c03a922a0a2c7ee5e061920489A931";
let tablo = {};

async function getListIds() {
    const url = `https://api.trello.com/1/boards/AOFKp4OQ/lists?key=${key}&token=${token}&fields=all`;
    const res = await fetch(url);
    const lists = await res.json();
    const nametoid = {};
    lists.forEach(list => nametoid[list.name] = list.id);
    return nametoid;
}

async function fetchCards() {
    const nametoid = await getListIds();
    for (const t of typ) {
        const url = `https://api.trello.com/1/lists/${nametoid[t]}/cards?key=${key}&token=${token}`;
        const res = await fetch(url);
        const cards = await res.json();
        tablo[t] = cards.flatMap(card => {
            const text = card.desc || "";
            const regex = /(https?:\/\/\S+\.(?:jpg|jpeg|png|gif))/gi;
            return Array.from(text.matchAll(regex), m => m[0]);
        });
    }
}

function getTimePool() {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return "Morning";
    if (hour >= 12 && hour < 17) return "Afternoon";
    if (hour >= 17 && hour < 21) return "Evening";
    return "Night";
}

function getRandomUrl() {
    const pool = getTimePool();
    const currentList = tablo[pool] || [];
    const generalList = tablo["GeneralPool"] || [];
    const totalLength = currentList.length + generalList.length;
    if (totalLength === 0) return null;
    const pick = Math.floor(Math.random() * totalLength);
    return pick < currentList.length
        ? currentList[pick]
        : generalList[pick - currentList.length];
}

function applyBackground() {
    const randomBG = getRandomUrl();
    if (randomBG) {
        document.documentElement.style.setProperty('--app-background', `url("${randomBG}")`);
        console.log("Background set to:", randomBG);
    }
}

async function init() {
    await fetchCards(); // Fetch once on load
    applyBackground(); // Apply first background
    setInterval(applyBackground, 5 * 60 * 1000); // Rotate every 5 minutes
}

init();
