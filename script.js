let hamburger = document.getElementById("hamburger");
let navbar = document.getElementById("resp-nav");

hamburger.addEventListener("click" , ()=>{
    navbar.classList.toggle("display");
    navbar.style.animationName = "fade";
    navbar.style.animationDuration = "0.5s";
})