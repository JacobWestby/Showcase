
const header = document.querySelector("#header");
const wave = document.querySelector(".header__bottom-background");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const bigCircle = document.querySelector(".header__cont-inner-circles-outer");
const smallCircle = document.querySelector(".header__cont-inner-circles-inner");

const abc = ["a", "b", "c", "d", "e", "f"];

// On click, set new wave background
let i = 0;

btn1.addEventListener("click", () => {
    i === 6 ? i = 1 : i++;

    wave.style.backgroundImage = `url('../images/wave${i}.svg')`;
});

// On click, set new colors

btn2.addEventListener("click", () => {
    const h = Math.floor(Math.random() * 8);
    const e = Math.floor(Math.random() * 8);
    const c = abc[Math.floor(Math.random() * 5)];
    const x = abc[Math.floor(Math.random() * 5)];

    header.style.backgroundImage = `linear-gradient(143deg, #${h + e + c + x} 30%, rgba(255,255,255,1) 30%)`;
    smallCircle.style.fill = `#${h + c + x + c}`;
});

// Move circle on scroll
window.addEventListener("scroll", () => {
    let scrollPos = Math.floor(window.scrollY) / 4;
    smallCircle.style.transform = `rotate(${scrollPos}deg)`;
})