//loading page
let loading = document.querySelector(".loading");

window.addEventListener("load",function(){
    loading.style.display = "none";
    
    })



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
//Animation Part

//start welcome section
let WSection = document.querySelector(".W-Section");
let WbtnL=document.getElementById("W-btn-left");
let WbtnR=document.getElementById("W-btn-right");

window.addEventListener("load",function(){
    WSection.style.opacity="1";


    WbtnL.style="transform: translateX(0px);";
    WbtnR.style="transform: translateX(0px);";
    WbtnL.style.opacity="1";
    WbtnR.style.opacity="1";


})


//End welcome section

//Start about Section
let aboutimg = document.getElementById("about-img");
let abouttext = document.getElementById("about-text");
window.addEventListener("scroll",function(){
    if(window.scrollY >= aboutimg.offsetTop-350)
    {
        aboutimg.style = " opacity: 1;transform: translateX(0px);";

    }

    if(window.scrollY >= abouttext.offsetTop-350)
    {
        abouttext.style = " opacity: 1;transform: translateY(0px);";

    }

   

   
})
    

//End about Section

//start Services section
let serv1 = document.getElementById("serv-1");
let serv2 = document.getElementById("serv-2");
let serv3 = document.getElementById("serv-3");
let serv4 = document.getElementById("serv-4");
let Ssection = document.querySelector(".S-section");

window.addEventListener("scroll",function(){
    if(window.scrollY >= Ssection.offsetTop-350)
    {
        serv1.style = " opacity: 1;transform: translateY(80px);";
        serv3.style = " opacity: 1;transform: translateY(80px);";
        serv2.style = " opacity: 1;";
        serv4.style = " opacity: 1;";



    }
})

//End Services section

//Start Rates section
let RSection = document.querySelector(".R-Section");

window.addEventListener("scroll",function(){
    if(window.scrollY >= RSection.offsetTop-350)
    {
        RSection.style = " opacity: 1;transform: translateY(0px);";
     



    }
})

//slider
let rates = document.querySelectorAll(".slide");
let arrleft = document.getElementById("arr-left");
let arrright = document.getElementById("arr-right");
let i=0;
arrright.addEventListener("click",function(){

    rates[i].classList.remove("Active");

    plus();
})

arrleft.addEventListener("click",function(){
    rates[i].classList.remove("Active");
    rates[i=i-1].classList.add("Active");
    i--;
})

function plus(){
    i++;
    rates[i].classList.add("Active");
    console.log(i)
}

//End Rates section



function about(){
    window.scrollTo({
        top: document.querySelector(".about-us").offsetTop,
        behavior: "smooth"
    });
}

function contact(){
    window.scrollTo({
        top: document.querySelector(".footer-section").offsetTop,
        behavior: "smooth"
    });
}

function ourS(){
    window.open("services.html","_self");
}
