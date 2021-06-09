// loader 
const loader = document.querySelector(".loader")
const site = document.querySelector(".site")

function init() {

    setTimeout(() => {
        loader.style.opacity = 0
        loader.style.display = "none";
        site.style.display = "block";
    }, 1300)  
}   
init()

// nav
const selectElement= (element) => document.querySelector(element);
window.addEventListener("resize", () => {
    selectElement("header").classList.remove("active")
})
selectElement(".mobile-menu").addEventListener("click", () => {
    selectElement("header").classList.toggle("active")
})
window.addEventListener('scroll',  () => {
    selectElement("header").classList.remove("active")
})
