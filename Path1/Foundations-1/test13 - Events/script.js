const boton = document.querySelector(".btn");
const botoncito = document.querySelector("#botoncito");
const botoncito2 = document.querySelector("#botonsote");

boton.onclick = () => alert("Hello World!!!!");

botoncito.addEventListener("click", () => {
    alert("DOS ALMAS SE VAN, NO PARO DE PENSAR");
});

botoncito2.addEventListener("click", function(e){
    console.log(e.target);
    //const estado = e.target.style.background;
    if(e.target.style.background == "pink"){
        e.target.style.background = "blue";
    }
    else{
        e.target.style.background = "pink";
    }
});