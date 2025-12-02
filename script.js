const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var menu = document.querySelector("nav h3");
var full = document.querySelector("#scr");
var navimg = document.querySelector("nav img");
var flag = 0;

menu.addEventListener("click", function(){
    if(flag == 0){
        full.style.top = 0;
        navimg.style.opacity = 0;
        flag = 1;
    } else{
        full.style.top = "-100%";;
        navimg.style.opacity = 1;
        flag = 0;
    }
})


var fixed = document.querySelector("#fixed-img");

var elems = document.querySelectorAll(".elem");
elems.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        var image = e.getAttribute("data-img");
        fixed.style.backgroundImage = `url(${image})`;
        fixed.style.display = "block";
        fixed.style.backgroundSize = "cover";
    })
})

var p3 = document.querySelector("#page3");

p3.addEventListener("mouseleave", function(){
    fixed.style.display = "none";
})