const selectElement= (element) => document.querySelector(element);
window.addEventListener('resize', () => {
    selectElement("header").classList.remove("active")
})
selectElement(".mobile-menu").addEventListener("click", () => {
    selectElement("header").classList.toggle("active")
})
window.addEventListener('scroll',  () => {
    selectElement("header").classList.remove("active")
})
