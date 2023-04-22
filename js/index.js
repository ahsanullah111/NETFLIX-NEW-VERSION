//HEADER SCROLL
let nav = document.querySelector(".navbar");

window.onscroll = function(){
    if(document.documentElement.scrollTop > 50){
        nav.classList.add("headerScrolled");
    } else{
        nav.classList.remove("headerScrolled");
    }
}

// HIDE NAVBAR AFTER CLICK MENU OPTION
let navLink = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");

navLink.forEach(function(e){
    e.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})