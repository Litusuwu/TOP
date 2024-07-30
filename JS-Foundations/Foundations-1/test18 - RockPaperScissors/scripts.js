const btn = document.querySelectorAll('img');
const resetear = document.querySelector('.botoncin');
let v1, v2, v3, scoreUsuario = 0, scoreComputadora = 0, ans, flag = false;

function jugar(){
    let num = Math.floor(Math.random()*3) ;
    switch(num){
        case 0:
            v3 = "Piedra";
            break;
        case 1:
            v3 = "Papel";
            break;
        case 2:
            v3 = "Tijeras";
            break;
        default:
            break;
    }
    if(v3 == 'Piedra' && v2 == 'Papel'){
        ans = 'Ganaste.';
        scoreUsuario++;
    }
    else if(v3 == 'Piedra' && v2 == 'Tijeras'){
        ans = 'Perdiste.';
        scoreComputadora++;
    }
    else if(v3 == 'Papel' && v2 == 'Tijeras'){
        ans = 'Ganaste.';
        scoreUsuario++;
    }
    else if(v3 == 'Papel' && v2 == 'Piedra'){
        ans = 'Perdiste.';
        scoreComputadora++;
    }
    else if(v3 == 'Tijeras' && v2 == 'Piedra'){
        ans = 'Ganaste.';
        scoreUsuario++;
    }
    else if(v3 == 'Tijeras' && v2 == 'Papel'){
        ans = 'Perdiste.';
        scoreComputadora++;
    }
    else{
        ans = 'Empate.';
    }
}
function reset(){
    const parrafoJugador = document.querySelector('.eleccion');
     const parrafoCompu = document.querySelector('.eleccionComputador');
    const imgComputadora = document.querySelector('.d4');
    const puntJugador = document.querySelector('#pJugador');
    const puntCompu = document.querySelector('#pCompu');
    const titulo = document.querySelector('.tit2');
    const vered = document.querySelector('.veredicto');
    vered.textContent = '';
    parrafoJugador.textContent = "Selecciona tu opción";
    parrafoCompu.textContent = "";
    imgComputadora.src = "./img/interrogation.png";
    scoreComputadora = 0;
    scoreUsuario = 0;
    puntCompu.textContent = scoreComputadora;
    puntJugador.textContent = scoreUsuario;
    titulo.textContent = "Selecciona una opción para iniciar, gana 10 puntos!";
}
btn.forEach(butonsin => {
    
    butonsin.addEventListener('click', () =>{
        //darle clic a un boton
        const parrafoJugador = document.querySelector('.eleccion');
        const parrafoCompu = document.querySelector('.eleccionComputador');
        const imgComputadora = document.querySelector('.d4');
        const puntJugador = document.querySelector('#pJugador');
        const puntCompu = document.querySelector('#pCompu');
        const titulo = document.querySelector('.tit2');
        const vered = document.querySelector('.veredicto');
        // console.log(parrafoJugador);
        //actualizar descripcion en el panel del jugador
        if(flag==true){
            return;
        }
        switch(butonsin.id){
            case "d1":
                v2 = 'Papel';
                parrafoJugador.textContent = 'Has seleccionado papel. ';
                break;
            case "d2":
                v2 = 'Tijeras';
                parrafoJugador.textContent = 'Has seleccionado tijera. ';
                break;
            case "d3":
                v2 = 'Piedra';
                parrafoJugador.textContent = 'Has seleccionado roca. ';
                break;
            default:
                return;
        }
        //añadir animacion de click
        butonsin.classList.toggle('clicked');
        setTimeout(function(){
            butonsin.classList.remove('clicked');
        }, 400);
        //script para elegir random la eleccion de la computadora
        jugar();
        //actualizar el mensaje e imagen del panel de Computadora
        switch(v3){
            case "Piedra":
                parrafoCompu.textContent = 'Ha seleccionado piedra.';
                imgComputadora.src = "./img/rokita.png";
                break;
            case "Papel":
                parrafoCompu.textContent = 'Ha seleccionado papel.';
                imgComputadora.src = "./img/papersito.png";
                break;
            case "Tijeras":
                parrafoCompu.textContent = 'Ha seleccionado tijera.';
                imgComputadora.src = "./img/tijerita.png";
                break;
        }
        //actualizar scores
        puntCompu.textContent = scoreComputadora;
        puntJugador.textContent = scoreUsuario;
        titulo.textContent = ans;
        //panel de victoria
        if(scoreComputadora == 10 || scoreUsuario == 10){
            if(scoreComputadora > scoreUsuario){
                vered.textContent = `Has Perdido!`;
            }
            else{
                vered.textContent = `Has Ganado!`;
            }
            flag = true;
            
        }
    });
});

resetear.addEventListener('click', () => {
    reset();
    flag = false;
});