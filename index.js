
var sidemenu=document.getElementById("side-menu")
var sidenav=document.getElementById("side-nav")
var closenav=document.getElementById("close-nav")

sidemenu.addEventListener("click",function(){
    sidenav.style.right=0
})

closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})