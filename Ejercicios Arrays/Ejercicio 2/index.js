let parrafos = "";

let miarray = [];
let i;

for (i = 0; i < 3; i++) {

    miarray.push(window.prompt(`Introduzca un string:`));

}

parrafos += `<p>${miarray [1]}</p>`;
parrafos += `<p>${miarray [2]}</p>`;
parrafos += `<p>${miarray [0]}</p>`;

document.getElementById("div1").innerHTML = parrafos;