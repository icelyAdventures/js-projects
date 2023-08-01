const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");


navToggle.addEventListener("click", function(){
    linksContainer.classList.toggle("hide-container")

    const linksHeight = links.getBoundingClientRect();
    navToggle.classList.toggle("rotate-btn")

})


const navbar = document.querySelector(".nav-header")
const topLink = document.querySelector(".top-link")


window.addEventListener("scroll", function() {
    // console.log(window.pageYOffset);
    const scrollHeight = window.pageYOffset;
    const navheight = navbar.getBoundingClientRect().height;

    if(scrollHeight > navheight){
        navbar.classList.add("fixed-nav")
    } else {
        navbar.classList.remove("fixed-nav")
    }

    if(scrollHeight > 500){
        topLink.classList.add("show-link")
    } else {
        topLink.classList.remove("show-link")
    }

})