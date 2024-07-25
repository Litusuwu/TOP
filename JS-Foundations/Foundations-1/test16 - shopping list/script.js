const clicking = document.querySelector("button");

clicking.addEventListener("click", ()=>{
    const text = document.querySelector("#item");
    const lista = document.querySelector("ul");
    if(text.value != ''){
        const elem = document.createElement("li");
        const boton = document.createElement("button");
        const espacio = document.createElement("span");
    
        elem.textContent = text.value;
        boton.textContent = "Delete";
        
        elem.appendChild(espacio);
        elem.appendChild(boton);
        
        lista.appendChild(elem);
    
        boton.addEventListener("click", () => {
            elem.remove();
        });
        
        text.value = '';
        
        text.focus();
        //console.log(text.value);
    }
    
});