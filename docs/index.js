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
      ver.html("monto total a pagar $" + totalEnvio + " " + "dolares")

      sessionStorage.setItem("totalenvio", JSON.stringify(totalEnvio))

      $("#resault").css("font-size", "30px")
      ver.slideDown('fast');
      $("#enviar").slideDown(2000)


    }
  }

}

class persona {
  constructor(nombre, apellido, nacionalidad, direccion, celular) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.nacionalidad = nacionalidad;
    this.direccion = direccion;
    this.celular = celular;
  }
}

class persona2 {
  constructor(nombre, apellido, nacionalidad, direccion,celular) {
    this.nombre2 = nombre;
    this.apellido2 = apellido;
    this.nacionalidad2 = nacionalidad;
    this.direccion2 = direccion;
    this.celular2 = celular;
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
let celularEnvia = $("#celular");



// controles persona que recibe
let nombreRecibe = $("#nombreR");
let apellidoRecibe = $("#apellidoR");
let direccionRecibe = $("#direccionR");
let nacionalidadRecibe = $("#nacionalidadR");
let celularRecibe = $("#celularR");

// muestra formularios
let enviarForm = $("#enviar")
enviarForm.click(() => {

  let personaEnvia = new persona(nombreEnvia.val(), apellidoEnvia.val(), direccionEnvia.val(), nacionalidadEnvia.val(), celularEnvia.val())
  usuario.push(personaEnvia)

  sessionStorage.setItem("personaEnvia", JSON.stringify(usuario))

  let personaRecibe = new persona2(nombreRecibe.val(), apellidoRecibe.val(), direccionRecibe.val(), nacionalidadRecibe.val(),celularRecibe.val())
  recibe.push(personaRecibe)

  sessionStorage.setItem("personaRecibe", JSON.stringify(recibe))

})



