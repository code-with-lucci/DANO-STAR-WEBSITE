/*==========================
    MOBILE MENU
==========================*/

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


/*==========================
    STICKY NAVBAR
==========================*/

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 80){

        navbar.style.background = "#081628";

        navbar.style.padding = "15px 8%";

    }else{

        navbar.style.background = "rgba(11,31,58,.80)";

        navbar.style.padding = "18px 8%";

    }

});


/*==========================
    HERO IMAGE SLIDER
==========================*/

const hero = document.querySelector(".hero");

const heroImages = [

"images/hero/hero1.jpg",

"images/hero/hero2.jpg",

"images/hero/hero3.jpg"

];

let currentImage = 0;

function changeHeroImage(){

currentImage++;

if(currentImage >= heroImages.length){

currentImage = 0;

}

hero.style.backgroundImage =
`url('${heroImages[currentImage]}')`;

}

setInterval(changeHeroImage,5000);


/*==========================
    FADE IN ON SCROLL
==========================*/

const reveals = document.querySelectorAll("section");

function revealSections(){

const trigger = window.innerHeight * 0.85;

reveals.forEach(section=>{

const top = section.getBoundingClientRect().top;

if(top < trigger){

section.classList.add("show");

}

});

}

window.addEventListener("scroll", revealSections);

revealSections();


/*==========================
    BACK TO TOP
==========================*/

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.className = "top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
/*==========================
      LOADER
==========================*/

window.addEventListener("load", function(){

    const loader = document.getElementById("loader");

    setTimeout(function(){

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 800);

});