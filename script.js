const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true,
    lerp:.05,
});

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector("#line-warper");
const navLinks = document.querySelector(".nav-links");

function navtoggle(){
  
    menu.classList.toggle("menu");
    menu.classList.toggle("close")
    console.log("hello");
    navLinks.classList.toggle("mobile-view");
    
    
}