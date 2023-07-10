//<<<--- HEADER --->>>

//MoBiLe\\

//Hamburger Animations
//Help from: https://codepen.io/designcouch/pen/ExvwPY
let menuSm = document.querySelector(".menu-sm");
let menuOpen = false;
menuSm.addEventListener("click", ()=>{
    let top = document.querySelector(".menu-top");
    let center = document.querySelector(".menu-center");
    let bottom = document.querySelector(".menu-bottom");

    if(!menuOpen){
        top.classList.remove("menu-top-restore");
        center.classList.remove("menu-center-restore");
        bottom.classList.remove("menu-bottom-restore");
        top.classList.add("menu-top-move");
        center.classList.add("menu-center-move");
        bottom.classList.add("menu-bottom-move");
        menuOpen = true;
    }
    else{
        top.classList.remove("menu-top-move");
        center.classList.remove("menu-center-move");
        bottom.classList.remove("menu-bottom-move");
        top.classList.add("menu-top-restore");
        center.classList.add("menu-center-restore");
        bottom.classList.add("menu-bottom-restore");
        menuOpen = false;
    }
});
