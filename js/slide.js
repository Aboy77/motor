const images = document.getElementById("img");
const navM = document.getElementById("nav-m");
const nav = document.getElementById("nav");
const lists = document.querySelectorAll("#nav a");
let count = 0;

images.addEventListener("click", showGallery)
navM.addEventListener("click", navMedia)

let slideNumber = 1
slideShow(slideNumber)

function slideShow(n) {
    let i;
    const slides = document.getElementsByClassName("slide")
    const dot = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideNumber = 1;

    }

    if (n < 1) {
        slideNumber = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dot.length; i++) {
        dot[i].className = dot[i].className.replace(" active", "")
    }
    slides[slideNumber - 1].style.display = "block"
    dot[slideNumber - 1].className += " active"
    slideNumber++;
    if (slideNumber > slides.length) {
        slideNumber = 1
    }

    setTimeout(slideShow, 7000)
}

function showGallery() {
    console.log("showing")
}

function navMedia() {
    count += 1;
    if (count > 2) {
        count = 1
    }

    if (count === 1) {
        nav.style.display = "flex";
        nav.style.flexDirection = "column";
        navM.style.width = "100%";
        nav.style.animationName = "show";
        lists.forEach(list => {
            list.style.display = "block";
        })
        navM.style.animationName = "colorShow"
    } else {
        nav.style.animationName = "hide";
        lists.forEach(list => {
            list.style.display = "none";
        })
        navM.style.animationName = "colorHide"
    }
}