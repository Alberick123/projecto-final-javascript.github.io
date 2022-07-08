// HTML Contacto

let nombre;
let apellido;
let email;
let consulta;

alertaEdad()

function alertaEdad() {swal({
    title: "Eres mayor de edad?",
    text: "Solo las personas mayores de 18 años estan autorizados a entrar en esta página",
    icon: "warning",
    buttons: ["Soy menor de edad", "Tengo más de 18 años"],
    closeOnClickOutside: false,
    closeOnEsc: false,
  })
  .then((respuesta) => {
    if (respuesta) {
      swal("Estas autorizado a entrar a esta página", {
        icon: "success",
      });
    } else {
      swal("Por favor, cierre la página", {
        icon: "error",
      });
    }
  });}



/*

let edad;

solicitarEdad()

function solicitarEdad(){
    edad = prompt("Por favor, ingrese su edad")

while (edad < 18){
    alert("Es menor de edad, por favor cierre la página")
    break
}
}

localStorage.setItem("edadStorage", edad)

edad = JSON.parse(localStorage.getItem("edadStorage"))

console.log(typeof(edad))

*/


const listaConsultas = [];

class Consultas{
    constructor(nombre, apellido, email, consulta) {
        this.nombre = nombre;
        this.apellido  = apellido;
        this.email  = email;
        this.consulta = consulta;
    }
}

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    email = document.getElementById("email").value;
    consulta = document.getElementById("consulta").value;
    console.log("Formulario Enviado");
    Toastify({
      text: "Su consulta ha sido enviada correctamente!",
      duration: 2500,
      gravity: 'top',
      position: 'right'
  }).showToast();
    const consultas1 = new Consultas(nombre, apellido, email, consulta);
    listaConsultas.push(consultas1);
    console.log(listaConsultas)
    localStorage.setItem("listaConsultasStorage", JSON.stringify(listaConsultas))
}
