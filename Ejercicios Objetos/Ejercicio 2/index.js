


    datosPersonales = {

        nombre: "Roberto",
        edad: "47"
    };

    document.getElementById("div1").innerHTML=`
        <p>Nombre: ${datosPersonales.nombre}</p>
        <p>Edad: ${datosPersonales.edad}</p>
        `
    
        datosPersonales.altura = 173;

        document.getElementById("div2").innerHTML=`
        <p>Nombre: ${datosPersonales.nombre}</p>
        <p>Edad: ${datosPersonales.edad}</p>
        <p>Altura: ${datosPersonales.altura} cm</p>`;
        