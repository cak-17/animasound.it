let navColor = "transparent";
let navSize = "16rem";

const head = document.querySelector(".header");

const listenScrollEvent = () => {
    window.scrollY > 10 ? navSize = "12rem" : navSize = "16rem";
    window.scrollY > 10 ? navColor = "var(--main-color)" : navColor = "transparent";
    window.scrollY > 10 ? navText = "#FCFCFC" : navColor = "#26262B";
    head.style.setProperty("--nav-color", navColor);
    head.style.setProperty("--nav-size", navSize);
    head.style.setProperty("--nav-text", navText);
    return () => {
        window.removeEventListener("scroll", listenScrollEvent);
    };
};

window.addEventListener("scroll", listenScrollEvent);

