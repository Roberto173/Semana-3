let miarray = [];
let miarrayLong = 20;
let parrafos = "";
let sumatorio = 0;
let media = 0;
let datos = 0;


for (let i = 0; i < miarrayLong; i++) {

    datos = miarray.push(Math.round(Math.random()*100));
}

    console.log(miarray);

for (let i = 0; i < 20; i++) {

    sumatorio += miarray[i];
}

    media = parseInt(sumatorio / 20);

    parrafos = `<p>La media es:  ${media}</p>`;

    document.getElementById("div1").innerHTML=parrafos;
