//se importa iniciarwebsite y se ejecuta
import './style.css';
import displayMenu from "./menu.js";
import displayHome from "./home.js";
import displayReserva from "./reservation.js";
import displayLocation from './location.js';
function content(){
    const content=document.createElement('div');
    content.classList.add("content");
    content.setAttribute('id','content');
    document.body.appendChild(content);
    
}
content();



function createHeader(){
    const header=document.createElement("header");
    header.classList.add("header");

    
    const heading=document.createElement("h1");
    heading.innerHTML="Il Pizzaiolo Restaurant";
    heading.classList.add("heading");
    header.appendChild(heading);
    header.appendChild(createNav());

    return header;
}

function createNav(){
    const nav=document.createElement("nav");
    nav.classList.add("nav");
    
    const homeBtn=document.createElement("button");
    homeBtn.classList.add("button-nav");
    homeBtn.innerHTML="HOME";
    homeBtn.addEventListener("click",function(){
        displayHome();
    });

    const menuBtn=document.createElement("button");
    menuBtn.classList.add("button-nav");
    menuBtn.innerHTML="MENU";
    menuBtn.addEventListener("click",function(){
       displayMenu(); 
    });

    const reserveBtn=document.createElement("button");
    reserveBtn.classList.add("button-nav");
    reserveBtn.innerHTML="RESERVATIONS";
    reserveBtn.addEventListener("click",function(){
        displayReserva();
    });

    const locationBtn=document.createElement("button");
    locationBtn.classList.add("button-nav");
    locationBtn.innerHTML="LOCATION";
    locationBtn.addEventListener("click",function(){
        displayLocation();
    });

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(reserveBtn);
    nav.appendChild(locationBtn);

    return nav;
}


function createMain(){
    const main=document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id","main");
    return main;
}

function initializeSite(){
    const content=document.querySelector("#content");
    
    content.appendChild(createHeader());
    content.appendChild(createMain());

    displayHome();
}
initializeSite();
