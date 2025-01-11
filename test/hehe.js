function hola(usuario){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(usuario == "jorgito"){
                resolve({
                    nombre: "jorge",
                    rol:"chad",
                });
            } else {
                reject(new Error(`El usuario ${usuario} no tiene acceso a tu pinga.`));
            }
        }, 1000);
    })
}

hola("jorgito").then((datos)=>{
        console.log("Chat esto es real?", datos);
    })
    .catch((error)=>{
        console.error("Error hehe", error.message);
    })
    .finally(()=>{
        console.log(`hola chat`);
    });

hola("candia").then((datos)=>{
    console.log("Chat esto es real?", datos);
})
.catch((error)=>{
    console.error("Error hehe", error.message);
});