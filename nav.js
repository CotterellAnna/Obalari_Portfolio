let x = document.querySelector(".menu");
let navMenu = document.querySelector(".menu__list")
x.addEventListener("click",openMenu);
function openMenu(){
    if(navMenu.style.display=="flex"){
        navMenu.style.display="none";
    }else{
        navMenu.style.display="flex";
    }
}