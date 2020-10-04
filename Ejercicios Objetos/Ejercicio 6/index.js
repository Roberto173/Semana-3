

let nombre = window.prompt(`Introduzca su nombre:`);
let apellido = window.prompt(`Introduzca su apellido:`);
let fecha = window.prompt(`Introduzca la fecha de su nacimiento (formato d-mm-año):`);
let sexo = window.prompt(`Introduzca su sexo:`);

let ultimoFecha = parseInt(fecha.substring(fecha.length-1));
let primeraNombre = nombre.substring(0, 1);
let ultimoApellido = apellido.substring(apellido.length-1);

