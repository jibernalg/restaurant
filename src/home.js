//pestaña con foto del chef, es por defecto la primera

function createHome(){
    const home=document.createElement("div");
    home.classList.add("home");

    home.appendChild(createParagraph("Best pizza in city"));
    home.appendChild(createParagraph("We welcome you to Il Pizzaiolo, an authentic Italian Pizzeria in the heart of Manhattan. Born from a trip through the south of Italy . Our menu will transport you from our bustling neighborhood to a tavern in the Italian countryside. Join us on the patio for Italian al fresco dining in the summer, overlooking one of the liveliest corners of New York City!"));

    return home;
}

function createParagraph(text){
    const paragraph=document.createElement("p");
    paragraph.textContent=text;
    return paragraph;
}

function displayHome(){
    const main= document.getElementById("main");
    main.textContent="";
    main.appendChild(createHome());
}

export default displayHome;
