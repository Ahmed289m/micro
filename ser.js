
const ham = document.getElementById('menu');
const topDiv = document.getElementById('top');
const middleDiv = document.getElementById('middle');
const bottomDiv = document.getElementById('bottom');
const navbar = document.getElementById('navbar');
let toggle = false;
ham.addEventListener("click", () => {
  if(!toggle){
    topDiv.classList.remove('topPhaseTwo');
    topDiv.classList.add("topPhaseOne");
    middleDiv.classList.remove('middlePhaseTwo');
    middleDiv.classList.add('middlePhaseOne');
    bottomDiv.classList.remove('bottomPhaseTwo');
    bottomDiv.classList.add('bottomPhaseOne');
    navbar.classList.remove('navPhaseTwo');
    navbar.classList.add('navPhaseOne');
    toggle = true;
  } else {
    topDiv.classList.remove('topPhaseOne');
    topDiv.classList.add('topPhaseTwo');
    middleDiv.classList.remove('middlePhaseOne');
    middleDiv.classList.add('middlePhaseTwo');
    bottomDiv.classList.remove('bottomPhaseOne');
    bottomDiv.classList.add('bottomPhaseTwo');
    navbar.classList.remove('navPhaseOne');
    navbar.classList.add('navPhaseTwo');
    toggle = false;
  }
  
})

function contact2(){
    window.scrollTo({
        top: document.querySelector(".footer-section").offsetTop,
        behavior: "smooth"
    });
}


function order(){
    window.open("https://wa.me/201011987886","_self")
}
//services page


let nextserv1  = document.getElementById("next-serv1");
let nextserv2  = document.getElementById("next-serv2");
let nextserv3  = document.getElementById("next-serv3");
let nextserv4  = document.getElementById("next-serv4");
let servall =document.querySelector(".serv-all");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
window.addEventListener("load",function(){
    servall.style = "opacity: 1;transform: translateY(0px);";
})
window.addEventListener("load",function(){
    one.style = "opacity: 1;transform: translate(0px,0px);";

})

window.addEventListener("load",function(){
    two.style = "opacity: 1;transform: translate(0px,0px);";
})

window.addEventListener("load",function(){
    three.style = "opacity: 1;transform: translate(0px,0px);";
})

window.addEventListener("load",function(){

    four.style = "opacity: 1;transform: translate(0px,0px);";
})



function oneS(){
    window.open("S-1.html","_self");
}

function twoS(){
    window.open("S-2.html","_self");


}

function threeS(){
   
    window.open("S-3.html","_self");

}

function fourS(){
 
    window.open("S-4.html","_self");

}


function back(){
    window.open("services.html","_self");

}


