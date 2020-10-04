let parrafos = "";
let numero = parseInt(window.prompt(`Introduzca un número:`));


if (numero <= 100) {
    
    parrafos = `<p>${numero}</p>`;
    document.getElementById("div1").innerHTML = parrafos;
}


else if (numero > 100 && numero < 200) {
    
    parrafos = `<p>${numero}</p>`;
    document.getElementById("div2").innerHTML = parrafos;
}

else if (numero >= 200) {

    parrafos = `<p>${numero}</p>`;
    document.getElementById("div3").innerHTML = parrafos;
};
