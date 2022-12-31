//pestaña con las reservas
function createReserva(){
    const form=document.createElement("form");
    form.setAttribute("method","post");
    
    main.appendChild(form);
  
    const inputNombre=document.createElement("input");
    inputNombre.setAttribute("type","text");
    inputNombre.setAttribute("id","nombre");
    inputNombre.setAttribute("name","nombre");
    inputNombre.setAttribute("placeholder","Full Name");
    form.appendChild(inputNombre);

    const inputTel=document.createElement("input");
    inputTel.setAttribute("type","tel");
    inputTel.setAttribute("id","tel");
    inputTel.setAttribute("name","tel");
    inputTel.setAttribute("placeholder","Phone");
    form.appendChild(inputTel);
  
    const inputEmail=document.createElement("input");
    inputEmail.setAttribute("type","email");
    inputEmail.setAttribute("id","email");
    inputEmail.setAttribute("name","email");
    inputEmail.setAttribute("placeholder","email");
    form.appendChild(inputEmail);
  
    const inputPax=document.createElement("input");
    inputPax.setAttribute("type","number");
    inputPax.setAttribute("id","pax");
    inputPax.setAttribute("name","pax");
    inputPax.setAttribute("placeholder","Number of persons");
    form.appendChild(inputPax);

    const submitBtn=document.createElement("input");
    submitBtn.setAttribute("type","submit");
    submitBtn.setAttribute("disabled","true");
    submitBtn.setAttribute("id","submitBtn");
    submitBtn.setAttribute("value","Reserve");
    submitBtn.setAttribute("href","#");
    form.appendChild(submitBtn);
  
  
    return form;
}


function displayReserva(){
    const main= document.getElementById("main");
    main.textContent="";
    main.appendChild(createReserva());
}

export default displayReserva;

