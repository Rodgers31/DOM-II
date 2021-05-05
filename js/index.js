// Your code goes here

const nav = document.querySelector("nav");
const mainPic = document.querySelector("header img");
const para = document.querySelector("body p");
const pagePics = document.querySelector("#pics img");
const head = document.querySelector("body h2");
//const nav = document.querySelector("nav");
//const nav = document.querySelector("nav");









// mouse hover
nav.addEventListener("mouseover", function(event){
    event.target.style.color = "pink";
    setTimeout(function(){
        event.target.style.color ="";
    }, 600);
}, false);



//keydown
document.addEventListener("keydown", function(event){
    if (event.code =='KeyB'){
        alert('B for boy')
    }
});

//wheel
para.addEventListener("wheel", function(event){
    event.target.style.color = "red";

});

//load

//focus
//resize
head.addEventListener("resize", function(event){

});

//scroll
//select
//dblclick
//drag / drop