
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
const circle1 = document.querySelector(".circle-1");
const circle2 = document.querySelector(".circle-2");
const circle3 = document.querySelector(".circle-3");
const circle4 = document.querySelector(".circle-4");
const circle5 = document.querySelector(".circle-5");
const scrollDown = document.querySelector(".scroll__down");

const circleArr = [circle1, circle2, circle3, circle4, circle5];
const abc = ["a", "b", "c", "d", "e", "f"];
const maxChar = 220;
let typeWriterMessage = "";
let message = "";
let circlesIndex = 0;

// On click, set new wave background
// On click move cirlces to random loacation
// Resets circles to original pos after 20sec
let i = 1;

btn1.addEventListener("click", () => {
    i === 6 ? i = 1 : i++;
    circlesIndex = 0;

    wave.style.backgroundImage = `url('../images/wave${i}.svg')`;
    circleArr.forEach((circle) => {
        circle.style.cx = `${getRandom(100, 400)}`;
        circle.style.cy = `${getRandom(100, 400)}`;
    });
    setTimeout(() => {
        circlesPageEnter()
    }, 20000);
});

// Random position for circles
const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

// On click, set new colors
const h = Math.floor(Math.random() * 8);
const e = Math.floor(Math.random() * 8);
let c = abc[Math.floor(Math.random() * 5)];
let x = abc[Math.floor(Math.random() * 5)];

btn2.addEventListener("click", () => {
    header.style.background = `linear-gradient(143deg, #${h + e + c + x} 30%, rgba(255,255,255,1) 30%)`;
    circleArr.forEach((circle) => {
        c = abc[Math.floor(Math.random() * 5)];
        x = abc[Math.floor(Math.random() * 5)];
        circle.style.fill = `#${h + c + x + c}`;
    });
});

// Set random color for circles on load
document.body.onload = () => {
    // Set "media queries" for different screen width
    circleSize();
    circlesPageEnter();
    circleArr.forEach((circle) => {
        c = abc[Math.floor(Math.random() * 5)];
        x = abc[Math.floor(Math.random() * 5)];
        circle.style.fill = `#${h + c + x + c}`;
    });
};

// Move individual circles a set distance and fade in recursivly
let circlesX = 250;
let circlesY = 120

const circlesPageEnter = () => {
    if (circlesIndex < circleArr.length) {
        if (circlesIndex === 0) {
            circleArr[circlesIndex].style.cx = `${circlesX}`;
            circleArr[circlesIndex].style.cy = `${circlesY}`;
            circleArr[circlesIndex].style.opacity = 1;
        } else if (circlesIndex === 1) {
            circleArr[circlesIndex].style.cx = `${circlesX + 120}`;
            circleArr[circlesIndex].style.cy = `${circlesY + 100}`;
            circleArr[circlesIndex].style.opacity = 1;

        } else if (circlesIndex === 2) {
            circleArr[circlesIndex].style.cx = `${circlesX}`;
            circleArr[circlesIndex].style.cy = `${circlesY + 200}`;
            circleArr[circlesIndex].style.opacity = 1;

        } else if (circlesIndex === 3) {
            circleArr[circlesIndex].style.cx = `${circlesX - 120}`;
            circleArr[circlesIndex].style.cy = `${circlesY + 100}`;
            circleArr[circlesIndex].style.opacity = 1;

        } else if (circlesIndex === 4) {
            circleArr[circlesIndex].style.cx = `${circlesX}`;
            circleArr[circlesIndex].style.cy = `${circlesY + 300}`;
            circleArr[circlesIndex].style.opacity = 1;
        }

        circlesIndex++;
        setTimeout(circlesPageEnter, 800);
    };
};

// Change circle size based on view width
const circleSize = () => {
    let viewWidth = window.innerWidth;

    circleArr.forEach((circle) => {
        if (viewWidth <= 900 && viewWidth > 450) {
            circle.style.r = "70";
        } else if (viewWidth <= 450) {
            circle.style.r = "80";
        } else if (viewWidth >= 1700) {
            circle.style.r = "50"
        }
    });
};

// Slide/fade in text box
const slideObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.translate = '0';
        }
    });
});
slideObserver.observe(mainCont);

// Get message 
textArea.addEventListener("input", () => {
    message = textArea.value;
    bottomText.innerHTML = "";
    // Count characters
    minCharCounter();
    int = 0;
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
let int = 0;
const typeWriter = () => {
    if (int < message.length) {
        bottomText.innerHTML += message.charAt(int);
        int++
        setTimeout(typeWriter, 100);
    };
};



