let lista = [2, 5, 3, 8, 12, 4, 9, 10, 22, 34];
console.log(lista);
let sumatorio = 0;
let media;
let parrafos = "";

for (let i=0; i<lista.length; i++) {

    sumatorio += parseInt(lista [i]);
}
    
    media = sumatorio / 10;

    parrafos = `<p>La media es:  ${media}</p>`;

    document.getElementById("div1").innerHTML=parrafos;