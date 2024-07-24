let v1, v2, v3;
function values(){
    const opciones = `Por favor, ingresa tu opcion (numero)
    1. Piedra
    2. Papel
    3. Tijera
    `
    v1 = parseInt(prompt(opciones));

    switch(v1){
        case 1:
            v2 = "Piedra";
            break;
        case 2:
            v2 = "Papel";
            break;
        case 3:
            v2 = "Tijeras";
            break;
        default:
            alert("Seleccion no valida.");
            return
    }
    alert(`Has seleccionado ${v2}.`);
    jugar();
}
function jugar(){
    let num = Math.floor(Math.random()*3) , ans ;
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
    }
    else if(v3 == 'Piedra' && v2 == 'Tijeras'){
        ans = 'Perdiste.';
    }
    else if(v3 == 'Papel' && v2 == 'Tijeras'){
        ans = 'Ganaste.';
    }
    else if(v3 == 'Papel' && v2 == 'Piedra'){
        ans = 'Perdiste.';
    }
    else if(v3 == 'Tijeras' && v2 == 'Piedra'){
        ans = 'Ganaste.';
    }
    else if(v3 == 'Tijeras' && v2 == 'Papel'){
        ans = 'Perdiste.';
    }
    else{
        ans = 'Empate.';
    }
    alert(`${ans} \nComputadora [${v3}] VS [${v2}] Usuario`)
}
values();