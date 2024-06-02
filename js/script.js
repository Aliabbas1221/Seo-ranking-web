let nav=document.querySelector(".navbar");
window.onscroll=function(){
    if(document.documentElement.scrollTop>20){
        nav.classList.add("header-scrolled");
    }
    else{
        nav.classList.remove("header-scrolled");
    }
}

// navbar hide
let navbar=document.querySelectorAll(".nav-link");
var collapes=document.querySelector(".collapse.navbar-collapse");
navbar.forEach(function(a){
    a.addEventListener("click",function(){
        collapes.classList.remove("show");
    } )
})









for(var a=1; a<=100; a=a+10){
    for(var b=a; b< a+10; b++){
        console.log(b)
    }
    console.log(b+ "  ")
}