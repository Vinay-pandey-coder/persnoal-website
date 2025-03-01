// menu
let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
    menu.classList.toggle('move');
    navbar.classList.toggle('open-menu')
};
// close menu on page scroll 
window.onscroll = () => {
    menu.classList.remove('move');
    navbar.classList.remove('open-menu')
};
//  typing
let typed = new Typed(".typing",{
    strings:["","Frontend Developer", "Backend Devloper", "Full Stack Devloper", "web Desginer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})

// scroll reveal
const animate = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

animate.reveal('.nav, .heading');
animate.reveal(".home-img img", {origin: "right"});
animate.reveal(".home-text", {delay:"500",origin: "left"});
animate.reveal(".about-img img", {origin: "left"});
animate.reveal(".about-text", {delay:"500",origin: "right"});
animate.reveal(".heading", {origin: "left"});
animate.reveal(".playlist-box", {interval: 100});
animate.reveal(".contact-box", { delay:"500",interval: 100});
animate.reveal(".contact-form", { delay:"500",interval: 100,origin:"right"});
animate.reveal(".social", {origin: "left"});
animate.reveal(".copyright", {origin: "bottom"});