let parrafos = "";

let miArray = [];
let datosArray = 0;
let num = 0; //El valor introducido por teclado (puede ser cualquiera)
let posArray = 0;  //La posición del array que se corresponde con el dato de entrada del teclado (entre 0 y 10)
let nuevoValor = 0; //El valor del array modificado cuando le sumamos +1


for (let i = 0; i < 10; i++){           // Definir 10 posiciones para el Array. Cada posición contendrá un 0.

    datosArray[i] = miArray.push(0);
    console.log(miArray);

}

    num = parseInt(window.prompt(`Introduzca valores entre 0 y 10:`)); //Pedimos al usuario que introduzca números por teclado

while (num >= 0 && num <= 10) {  //Si el número está entre 0 y 10, sumamos 1 a la posición del array que se corresponda con el número leído

        posArray = num - 1;
        miArray[(posArray)] += 1;  
        console.log(miArray);                                                             
        num = parseInt(window.prompt(`Introduzca valores entre 0 y 10:`));
    }

 if (num > 10) {

    console.log(`El número introducido no es correcto (${num} > 10)`);

 }  

else if (num < 0) {

    for (let i = 0; i < miArray.length; i++) {

        console.log(`Posición ${i}, contiene el valor ${miArray[i]}`);

    }
}