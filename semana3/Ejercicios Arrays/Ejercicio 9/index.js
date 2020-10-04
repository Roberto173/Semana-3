let parrafo = "";

let miarray = [];
let datosArray = 0;
let datoTeclado = parseInt(window.prompt(`Introduzca un número entre 0 y 9:`));
let nuevoDato = 0;

for (let i = 0; i < 10; i++){

    datosArray[i] = miarray.push(1);

}

    console.log(miarray);

if (datoTeclado >= 0 && datoTeclado <= 9) {

    console.log(miarray[datoTeclado]);
    nuevoDato = datoTeclado * 2;
    console.log(nuevoDato);
    miarray[datoTeclado-1] = nuevoDato;
    console.log(miarray);
}



