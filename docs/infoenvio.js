let personaEnvia = JSON.parse(sessionStorage.getItem("personaEnvia"))
let personaRecibe = JSON.parse(sessionStorage.getItem("personaRecibe"))



let mostrarForm = $("#resulForm");
let mostrarForm2 = $("#resulForm2");
let tabla = "<table>";
let tabla2 = "<table>";

tabla =
    tabla +
    `<tr>
    <th>Nombre</th>
    <th>Apellido</th>
    <th>direccion</th>
    <th>País</th>
    <th>Celular</th>
    </tr>`
    ;

for (const elem of personaEnvia) {
    tabla =
        tabla +
    `<tr persona><td>${elem.nombre}</td><td>${elem.apellido}</td><td>${elem.nacionalidad}</td><td>${elem.direccion}</td><td>${elem.celular}</td></tr>`;
}

tabla = tabla + "</table>";

tabla2 =
    tabla2 +
    `
    <tr>
    <th>Nombre</th>
    <th>Apellido</th>
    <th>direccion</th>
    <th>País</th>
    <th>Celular</th>
    </tr>`;

for (const elem of personaRecibe) {
    tabla2 =
        tabla2 +
    `<tr><td>${elem.nombre2}</td><td>${elem.apellido2}</td><td>${elem.nacionalidad2}</td><td>${elem.direccion2}</td><td>${elem.celular2}</td></tr>`;
}

tabla2 = tabla2 + "</table>";

mostrarForm.html (tabla)
mostrarForm2.html(tabla2)


let totalApagar = sessionStorage.getItem("totalenvio")

let ver = $("#resault")
$("#resault").css("font-size", "30px")
ver.html("Total a pagar $" + totalApagar + " "+ "dolares");

//api de valor dolar
const URLJSON = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"


$("#cotiza").click(() => {
    $.getJSON(URLJSON, function (precio, estado) {
        if (estado === "success") {
            let misDatos = precio;
            let elemento = misDatos[0].casa
                $(".muestraDolar").append(`<div ">
                            <p> ${elemento.nombre}</p>
                            <p>compra ${elemento.compra}</p>                         
                            <p>venta ${elemento.venta}</p>
                            </div>`)
                    .delay(2000) 
            let cambio = $("#totalPesos")
            let totalP = totalApagar * parseInt (elemento.venta )
            const conver = totalP.toLocaleString('en');
            cambio.html("total en pesos $" + conver)
        }
        
    });


});