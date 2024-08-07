
var sidemenu=document.getElementById("side-menu")
var sidenav=document.getElementById("side-nav")
var closenav=document.getElementById("close-nav")

sidemenu.addEventListener("click",function()
{
    sidenav.style.right=0
})

closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})

var search=document.getElementById("search")
var productcontainer=document.getElementById("product-container")

var productlist=productcontainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredValue = event.target.value.toUpperCase()

   for(count=0;count<productlist.length;count=count+1)
   {
    var productname = productlist[count].querySelector("h1").textContent
    if(productname.toUpperCase().indexOf(enteredValue)<0)
    {
        productlist[count].style.display="none"
    }
    else{
        productlist[count].style.display="block"
    }
   }
})
// console.log(productname)