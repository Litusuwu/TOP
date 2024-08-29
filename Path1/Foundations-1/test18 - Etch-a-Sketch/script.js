function cargar(numero){
    const contenedor = document.querySelector('.container');
    for(let j = 0 ; j < numero ; j++){
        const fila = document.createElement('div');
        fila.classList.add('filita');
        contenedor.appendChild(fila);
        for(let i = 0 ; i < numero ; i++){
            const pix = document.createElement('div');
            pix.classList.add('cuadrado');
            pix.addEventListener('mouseover', pintar);
            pix.addEventListener('mousedown', pintar);
            fila.appendChild(pix);
        }
    }
}
function borrar(){
    const contenedor = document.querySelector('.container');
    contenedor.innerHTML = '';
}
function pintar(e){
    // console.log(e.type +" "+ mouseDown + modoActual);
    if (e.type == 'mouseover' && !mouseDown) return;
    if (modoActual == 'rainbow') {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    } else if (modoActual == 'color') {
        console.log(e.type +" "+ mouseDown + modoActual + colorInicial);
        e.target.style.backgroundColor = colorInicial;
    } else if (modoActual == 'eraser') {
        e.target.style.backgroundColor = '#fefefe';
    }
}

let mouseDown = false;

document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);





let valores = [1, 2, 4, 8, 16, 32, 64];
let modoActual = 'color';


const inputRango = document.querySelector('.rueda');
const botonColor = document.querySelector('.colorcito');
const botonPintar = document.querySelector('.colorson');
const botonRainbow = document.querySelector('.rainbow');
const botonBorrador = document.querySelector('.borrador');
const botonClear = document.querySelector('.clear');

let colorInicial = '#000000';




cargar(8);
// pintar(colorInicial);

inputRango.addEventListener('input', ()=>{
    // console.log(inputRango.value);
    const numb = document.querySelector('.numerito');
    borrar();
    cargar(valores[inputRango.value]);
    numb.textContent = valores[inputRango.value] + "x" + valores[inputRango.value];
    pintar(colorInicial);
});

botonColor.addEventListener('input', (e)=>{
    colorInicial = e.target.value;
    // console.log(colorInicial);
});

botonPintar.addEventListener('click',()=>{
    modoActual = 'color';
});
botonRainbow.addEventListener('click',()=>{
    modoActual = 'rainbow';
});
botonBorrador.addEventListener('click',()=>{
    modoActual = 'eraser';
});
botonClear.addEventListener('click', ()=>{
    borrar();
    cargar(valores[inputRango.value]);
});