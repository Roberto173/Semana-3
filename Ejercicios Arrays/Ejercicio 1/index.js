


        let i;
        let miarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        let parrafos = "";



        for (i = 0 ; i < miarray.length ; i++) {

            parrafos += `<p>${miarray [i]}</p>`;

        }

        document.getElementById("div1").innerHTML = parrafos;