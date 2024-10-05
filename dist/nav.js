let mobilemenu=document.getElementById("mobilemenu")
let button=document.getElementById("hamburger")
let togglemenu=() => mobilemenu.classList.toggle("mobilemenu")
button.addEventListener('click',togglemenu,false)