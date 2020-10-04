

let parrafos = '';

//parrafos = `<p>${numero}</p>`;
//document.getElementById("div3").innerHTML = parrafos;

let nacimiento = window.prompt(`Introduzca su fecha de nacimiento (dd-mm-año):`);
let nombre = window.prompt(`Introduzca su nombre:`);
let apellido = window.prompt(`Introduzca su apellido:`);
let sexo = window.prompt(`Introduce el sexo:`);


let ultimoFecha = parseInt(nacimiento.substring(nacimiento.length - 1));
let primeraNombre = nombre.substring(0,1);
let ultimaApellido = apellido.substring(apellido.length - 1);



let letraNombre = [
    {
      letra: "a",
      masculino: "La bestia",
      femenino: "La bestia",
    },
    {
      letra: "b",
      masculino: "Agente",
      femenino: "Agente",
    },
    {
      letra: "c",
      masculino: "Gigante",
      femenino: "Gigante",
    },
    {
      letra: "d",
      masculino: "Pokemon",
      femenino: "Pokemon",
    },
    {
      letra: "e",
      masculino: "Dragón",
      femenino: "Dragón",
    },
    {
      letra: "f",
      masculino: "Alien",
      femenino: "Alien",
    },
    {
      letra: "g",
      masculino: "Fantasma",
      femenino: "Fantasma",
    },
    {
      letra: "h",
      masculino: "Doctor",
      femenino: "Doctora",
    },
    {
      letra: "i",
      masculino: "Genio",
      femenino: "Genia",
    },
    {
      letra: "j",
      masculino: "Chico",
      femenino: "Chica",
    },
    {
      letra: "k",
      masculino: "Príncipe",
      femenino: "Princesa",
    },
    {
      letra: "l",
      masculino: "Hombre",
      femenino: "Mujer",
    },
    {
      letra: "m",
      masculino: "Gatito",
      femenino: "Gatita",
    },
    {
      letra: "n",
      masculino: "Borracho",
      femenino: "Borracha",
    },
    {
      letra: "o",
      masculino: "Rey",
      femenino: "Reina",
    },
    {
      letra: "p",
      masculino: "Robot",
      femenino: "Robot",
    },
    {
      letra: "q",
      masculino: "Científico",
      femenino: "Científica",
    },
    {
      letra: "r",
      masculino: "Samurai",
      femenino: "Samurai",
    },
    {
      letra: "s",
      masculino: "Mole",
      femenino: "Mole",
    },
    {
      letra: "t",
      masculino: "Loco",
      femenino: "Loca",
    },
    {
      letra: "u",
      masculino: "Vigilante",
      femenino: "Vigilante",
    },
    {
      letra: "v",
      masculino: "Guerrero",
      femenino: "Guerrera",
    },
    {
      letra: "w",
      masculino: "León",
      femenino: "Leona",
    },
    {
      letra: "x",
      masculino: "Ángel",
      femenino: "Ángel",
    },
    {
      letra: "y",
      masculino: "Tigre",
      femenino: "Tigresa",
    },
    {
      letra: "z",
      masculino: "Saiyajin",
      femenino: "Saiyajin",
    },
    ];
    
   let letraApellido = [
    {
      letra: "a",
      masculino: "indestructible",
      femenino: "indestructible",
    },
    {
      letra: "b",
      masculino: "maravilla",
      femenino: "maravilla",
    },
    {
      letra: "c",
      masculino: "radiactivo",
      femenino: "radiactiva",
    },
    {
      letra: "d",
      masculino: "volador",
      femenino: "voladora",
    },
    {
      letra: "e",
      masculino: "mágico",
      femenino: "mágica",
    },
 {
      letra: "f",
      masculino: "salvaje",
      femenino: "salvaje",
    },
    {
      letra: "g",
      masculino: "vengador",
      femenino: "vengadora",
    },
    {
      letra: "h",
      masculino: "letal",
      femenino: "letal",
    },
    {
      letra: "i",
      masculino: "poderoso",
      femenino: "poderosa",
    },
    {
      letra: "j",
      masculino: "amoroso",
      femenino: "amorosa",
    },
    {
      letra: "k",
      masculino: "oscuro",
      femenino: "oscura",
    },
    {
      letra: "l",
      masculino: "fantástico",
      femenino: "fantástica",
    },
    {
      letra: "m",
      masculino: "invencible",
      femenino: "invencible",
    },
    {
      letra: "n",
      masculino: "valiente",
      femenino: "valiente",
    },
    {
      letra: "o",
      masculino: "superveloz",
      femenino: "superveloz",
    },
    {
      letra: "p",
      masculino: "invisible",
      femenino: "invisible",
    },
    {
      letra: "q",
      masculino: "mutante",
      femenino: "mutante",
    },
    {
      letra: "r",
      masculino: "tóxico",
      femenino: "tóxica",
    },
    {
      letra: "s",
      masculino: "sexy",
      femenino: "sexy",
    },
    {
      letra: "t",
      masculino: "asesino",
      femenino: "asesina",
    },
    {
      letra: "u",
      masculino: "karateka",
      femenino: "karateka",
    },
    {
      letra: "v",
      masculino: "galáctico",
      femenino: "galáctica",
    },
    {
      letra: "w",
      masculino: "carismático",
      femenino: "carismática",
    },
    {
      letra: "x",
      masculino: "violento",
      femenino: "violenta",
    },
    {
      letra: "y",
      masculino: "nocturno",
      femenino: "nocturna",
    },
    {
      letra: "z",
      masculino: "venenoso",
      femenino: "venenosa",
    },
    ]   ;
    
   let fechaNacimiento = [
    {
      numero: 0,
      masculino: "del espacio",
      femenino: "del espacio",
    },
    {
      numero: 1,
      masculino: "de la justicia",
      femenino: "de la justicia",
    },
    {
      numero: 2,
      masculino: "de Marvel",
      femenino: "de Marvel",
    },
    {
      numero: 3,
      masculino: "de las tinieblas",
      femenino: "de las tinieblas",
    },
    {
      numero: 4,
      masculino: "de fuego",
      femenino: "de fuego",
    },
    {
      numero: 5,
      masculino: "de la noche",
      femenino: "de la noche",
    },
    {
      numero: 6,
      masculino: "del futuro",
      femenino: "del futuro",
    },
    {
      numero: 7,
      masculino: "de acero",
      femenino: "de acero",
    },
    {
      numero: 8,
      masculino: "exterminador",
      femenino: "exterminadora",
    },
    {
      numero: 9,
      masculino: "de otro planeta",
      femenino: "de otro planeta",
    },
    ];

    for (let i = 0; i < nacimiento.length; i++) {

        if (nacimiento(i).)
    }
   
