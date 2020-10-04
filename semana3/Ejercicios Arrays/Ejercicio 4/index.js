

let array = [];
let parrafos = "";

//for (let i = 0; i < 10; i++) {
 for (let i = 0; i < 10; i++) {  
    //array.push(window.prompt("escribe algo"));   
     array.push(window.prompt(`Introduzca un valor:`));
}

//for (let i = 0; i < array.length; i++) {
  for (let i = 0; i < array.length; i++) {
    //parrafos += `<p>${array[i]}</p>`;
      parrafos += `<p>${array[i]}</p>`;
}

document.getElementById("div1").innerHTML = parrafos;
  //document.getElementById("div1").innerHTML = parrafos;

/*
    //creamos un array vacio

const array = [];
let parrafos = "";

for (let i = 0; i < 10; i++) {
    array.push(window.prompt("escribe algo"));
}

for (let i = 0; i < array.length; i++) {
    parrafos += `<p>${array[i]}</p>`;
}
document.getElementById("div1").innerHTML = parrafos;