// let btn = document.querySelector('button');

// btn.addEventListener('click', function () {
//     alert('Mouse Clicked');
// });
let btn = document.querySelectorAll('button');

btn.forEach(buttonsin => {
    buttonsin.addEventListener('mouseover', () => {
        let changing = document.querySelector('.preseleccion');
        const variable = buttonsin.id;
        // console.log(variable);
        changing.style.filter = "drop-shadow(5px 5px 5px #222)";
        // buttonsin.-webkit-filter: "drop-shadow(5px 5px 5px #c50b0b)";
        switch(variable){
            case "roca":
                changing.src = "./imgs/rock-removebg-preview.png";
                break;
            case "papel":
                changing.src = "./imgs/paper-removebg-preview.png";
                break;
            case "tijera":
                changing.src = "./imgs/scissor-removebg-preview.png";
                break;
        }
    });
});


// let clickEvent = new Event('click');
// btn.dispatchEvent(clickEvent);