//pestaña con la ubicacion


function displayLocation(){
    const main= document.getElementById("main");
    main.textContent="";

    const map=document.createElement("div");   
    map.innerHTML='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d188.8637122626051!2d-73.98318775695132!3d40.76599682925074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2sManhattan%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sco!4v1663013056099!5m2!1sen!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    main.appendChild(map);
  

    return map;

    
}

export default displayLocation;


