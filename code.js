const navbarEl = document.querySelector(".navbar");
const bottomContainerEl = document.querySelector(".bottom-container");

window.addEventListener("scroll", () => {
    if(window.scrollY > bottomContainerEl.offsetTop - navbarEl.offsetHeight -70){
        navbarEl.classList.add("active");
    } else{
        navbarEl.classList.remove("active");
    }
})