// AOS bug fix
let scrollRef = 0;
window.addEventListener('scroll', function() {
  // increase value up to 10, then refresh AOS
  scrollRef <= 10 ? scrollRef++ : AOS.refresh();
});

// loader 
const loader = document.querySelector(".loader")
const site = document.querySelector(".site")

function init() {
    setTimeout(() => {
        loader.style.display = "none";
        site.style.display = "block"; 
        setTimeout(() => (site.style.opacity = 1));
    }, 1350)  
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

$(document).ready(function() {
    $(window).scroll(function(){
        if($(this).scrollTop() > 0) {
            $("header").css({"background-color" : "rgba(0, 0, 0, 0.8)"})
        }
        else {
            $("header").css({"background-color" : "rgba(0, 0, 0, 0.3)"})
        }
    })
})

// double animations
$( document ).ready(function() {
  $(".icons").hover(function() {
      $(".icons").removeClass("animate");
    })
});
