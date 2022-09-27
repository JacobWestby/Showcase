
const header = document.querySelector("#header");
const wave = document.querySelector(".header__bottom-background");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const bigCircle = document.querySelector(".header__cont-inner-circles-outer");
const smallCircle = document.querySelector(".header__cont-inner-circles-inner");
const smallCircleColor = document.querySelector("#smallCircle");
const mainCont = document.querySelector(".main__cont");
const textArea = document.querySelector(".form__cont-form-text");
const form = document.querySelector(".form__cont-form");
const bottomText = document.querySelector(".footer__cont-text-p");
const formBtn = document.querySelector(".form__cont-form-btn");
let charCounter = document.querySelector("#char__count");

const abc = ["a", "b", "c", "d", "e", "f"];
const maxChar = 220;
let typeWriterMessage = "";
let message = "";


// On click, set new wave background
let i = 1;

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
    smallCircleColor.style.fill = `#${h + c + x + c}`;
});

// Move circle on scroll
window.addEventListener("scroll", () => {
    let scrollPos = Math.floor(window.scrollY) / 4;
    smallCircle.style.transform = `rotate(${scrollPos}deg)`;
});

// Slide/fade in text box
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.translate = '0';
        }

    });
});
observer.observe(mainCont);

// Get message 
textArea.addEventListener("input", () => {
    message = textArea.value;
    bottomText.innerHTML = "";
    // Count characters
    minCharCounter();
    x = 0;
});

// Send message
formBtn.addEventListener("click", () => {
    if (message.length >= 30) {
        window.scrollTo(0, document.body.scrollHeight);
        typeWriter();
        fadeInText();
        textArea.value = "";
        charCounter.textContent = "0/30";
    }
});

// Character counter
const minCharCounter = () => {
    let enteredChars = textArea.value.length;
    charCounter.textContent = enteredChars + "/30";

    if (enteredChars < 12) {
        charCounter.style.color = "red";
    } else if (enteredChars > 12 && enteredChars < 30) {
        charCounter.style.color = "orange";
    } else if (enteredChars >= 30 && enteredChars < 220) {
        charCounter.style.color = "lightGreen";
    } else if (enteredChars === 220) {
        charCounter.style.color = "red";
    }
};

// Make message fadeIn
const fadeInText = () => {
    bottomText.style.opacity = 1;
};

// Make message typed
let x = 0;
const typeWriter = () => {
    if (x < message.length) {
        bottomText.innerHTML += message.charAt(x);
        x++
        setTimeout(typeWriter, 100);
    };
};

// todo

// Fonts / sizes
// Make responsive
// Style for 4k


