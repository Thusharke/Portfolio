
function typeFunction(){
    var arr = [
        "I'am Thushar.",
        "I'am a Web Developer.",
        "I'am a Competitive Programmer."
    ]
    var anime = [
        "typeName",
        "typeWeb",
        "typeComp"
    ]
    var i = 1;
    setInterval(function(){
        var header = document.querySelector(".header");
        header.textContent = arr[i%3];
        header.style.animation = anime[i%3] + " " + 5 + "s steps(" + ((arr[i%3].length-4)*2) + ") ";
        i++;
    },5000);
}
typeFunction();

var myNav = document.querySelector('.navDiv');
window.onscroll = function () { 
    "use strict";
    if (document.documentElement.scrollTop >= 200 ) {
        myNav.style.backgroundColor = "black";
        myNav.style.boxShadow = "4px 6px 34px -19px rgba(72,71,71,0.75)";
    } 
    else {
        myNav.style.backgroundColor = "rgba(0,0,0,0)";
        myNav.style.boxShadow = "4px 6px 34px -19px rgba(0,0,0,0)";
    }
};

function pushNav(){
    var cnav = document.querySelector(".cNav");
    cnav.classList.toggle("push");
    var lines = document.querySelectorAll(".line");
    lines[0].classList.toggle("line1");
    lines[1].classList.toggle("line2");
    lines[2].classList.toggle("line3");
}