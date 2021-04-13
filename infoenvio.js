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
    <th>Nacionalidad</th>
    </tr>`
    ;

for (const elem of personaEnvia) {
    tabla =
        tabla +
        `<tr persona><td>${elem.nombre}</td><td>${elem.apellido}</td><td>${elem.nacionalidad}</td><td>${elem.direccion}</td></tr>`;
}

tabla = tabla + "</table>";

tabla2 =
    tabla2 +
    `
    <tr>
    <th>Nombre</th>
    <th>Apellido</th>
    <th>direccion</th>
    <th>Nacionalidad</th>
    </tr>`;

for (const elem of personaRecibe) {
    tabla2 =
        tabla2 +
        `<tr><td>${elem.nombre2}</td><td>${elem.apellido2}</td><td>${elem.nacionalidad2}</td><td>${elem.direccion2}</td></tr>`;
}

tabla2 = tabla2 + "</table>";

mostrarForm.html (tabla)
mostrarForm2.html(tabla2)


let totalApagar = sessionStorage.getItem("totalenvio")

let ver = $("#resault")
$("#resault").css("font-size", "30px")
ver.html("Total a pagar $" + totalApagar)