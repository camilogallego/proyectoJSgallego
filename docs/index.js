$("#divGeneral").hide();

$("#btnMostar").click(() => {
  $("#divGeneral").slideDown(2000);
  $("#comenzar").hide()
});

$("#enviar").hide();

let calcular = $("#calcular");
calcular.click(btnCalcular)

// calcula el monto a enviar
function btnCalcular() {

  let selecciones = $("[name=flexRadioDefault]");
  for (const enviar of selecciones) {
    if (enviar.checked) {
      let opcion = "";
      switch (enviar.value) {
        case "AL":
          opcion = 0.4
          break;
        case "NM":
          opcion = 0.6
          break;
        case "EU":
          opcion = 0.8
          break;


      }

      let montoEnvio = parseInt($("#montoEnvio").val())

      const costoEnvio = x => x * opcion;

      const suma = (a, b) => a + b;

      // calcula el valor del envio
      let totalEnvio = suma(montoEnvio, costoEnvio(montoEnvio));

      let ver = $("#resault").hide()
      ver.html("monto total a pagar $" + totalEnvio)

      sessionStorage.setItem("totalenvio", JSON.stringify(totalEnvio))

      $("#resault").css("font-size", "30px")
      ver.slideDown('fast');
      $("#enviar").slideDown(2000)


    }
  }

}


class persona {
  constructor(nombre, apellido, nacionalidad, direccion) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.nacionalidad = nacionalidad;
    this.direccion = direccion;
  }
}

class persona2 {
  constructor(nombre, apellido, nacionalidad, direccion) {
    this.nombre2 = nombre;
    this.apellido2 = apellido;
    this.nacionalidad2 = nacionalidad;
    this.direccion2 = direccion;
  }
}

// arriy para almacenar usuario que envia
let usuario = []

// arriy para almacenar usuario que envia
let recibe = []

// controles persona que envia
let nombreEnvia = $("#nombre");
let apellidoEnvia = $("#apellido");
let direccionEnvia = $("#direccion");
let nacionalidadEnvia = $("#nacionalidad");


// controles persona que recibe
let nombreRecibe = $("#nombreR");
let apellidoRecibe = $("#apellidoR");
let direccionRecibe = $("#direccionR");
let nacionalidadRecibe = $("#nacionalidadR");

// muestra formularios
let enviarForm = $("#enviar")
enviarForm.click(() => {

  let personaEnvia = new persona(nombreEnvia.val(), apellidoEnvia.val(), direccionEnvia.val(), nacionalidadEnvia.val())
  usuario.push(personaEnvia)

  sessionStorage.setItem("personaEnvia", JSON.stringify(usuario))

  let personaRecibe = new persona2(nombreRecibe.val(), apellidoRecibe.val(), direccionRecibe.val(), nacionalidadRecibe.val())
  recibe.push(personaRecibe)

  sessionStorage.setItem("personaRecibe", JSON.stringify(recibe))

})
//api de valor dolar

const URLJSON = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"


$("#cotiza").click(() => {
  $.getJSON(URLJSON, function (precio, estado) {
    if (estado === "success") {
      let misDatos = precio;
      for (let i = 0; i <= 1; i++) {
        let elemento = misDatos[i].casa
        $(".muestraDolar").append(`<div style="grid-auto-flow: row;">
                                <p> ${elemento.nombre}</p>
                                <p>${elemento.venta}</p>
                                <p> ${elemento.compra}</p>                         
                            </div>`)
          .delay(2000)
          .fadeOut(9000)
      }
    }
  });
  
});

