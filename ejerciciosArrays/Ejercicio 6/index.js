

let array = [];
let parrafos = "";

for (let i = 0; i < 3; i++) {

    array.push(window.prompt(`Introduzca un número:`));

}

    let num1 = parseInt(array[0]);
    let num2 = parseInt(array[1]);
    let num3 = parseInt(array[2]);

    if (num1 > num2 && num1 > num3) {

        parrafos = `<p>El número mayor es  ${num1}</p>`;
    }

    else if (num1 > num2 && num3 > num1) {

        parrafos = `<p>El número mayor es  ${num3}</p>`;
    }

    else if (num2 > num1 && num2 > num3) {

        parrafos = `<p>El número mayor es  ${num2}</p>`;
    }

    
    
    document.getElementById("div1").innerHTML=parrafos;