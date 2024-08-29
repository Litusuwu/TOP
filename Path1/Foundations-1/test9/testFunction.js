function add7(num){
    return num+7;
}
function multiply(num1, num2){
    return num1*num2;
}
function capitalize(cadena){
    if(!cadena){
        return cadena;
    }
    return cadena.charAt(0).toUpperCase() + cadena.slice(1).toLowerCase();
}
function lastLetter(cadena){
    if(!cadena){
        return cadena;
    }
    let len = cadena.length;
    return cadena.charAt(len-1);
}
console.log(add7(9));
console.log(multiply(9, 10));
console.log(capitalize("hOLADKAJjdsakjdIJ"));
console.log(lastLetter("HOLAAAAAABA"));