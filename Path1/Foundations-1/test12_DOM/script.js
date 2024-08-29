function funcion(){
    const container = document.querySelector(".container");
    
    const newContent = document.createElement("p");
    newContent.classList.add("locura");
    newContent.textContent = "Hey I'm red!";
    newContent.setAttribute("style", "color: red");

    container.appendChild(newContent);
}
function funcion2(){
    const container = document.querySelector(".container");

    const nuevoContenido = document.createElement("h3");
    nuevoContenido.textContent = "I'm blue h3";
    nuevoContenido.setAttribute("style", "color : blue");
    container.append(nuevoContenido);
}
function funcion3(){
    const container = document.querySelector(".container");
    
    const contenido = document.createElement("div");

    const contenido1 = document.createElement("h1");
    const contenido2 = document.createElement("p");


    contenido.setAttribute("style", "border : 2px solid black ; background-color : pink");
    // contenido.style.border = "2px solid black";
    // contenido.style.backgroundColor = "pink";

    contenido1.textContent = "I'm in a div";
    contenido2.textContent = "ME TOO!"

    contenido.appendChild(contenido1);
    contenido.appendChild(contenido2);

    container.appendChild(contenido);
}
funcion();
funcion2();
funcion3();