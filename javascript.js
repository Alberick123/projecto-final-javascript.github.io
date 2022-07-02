// HTML Contacto

let nombre;
let apellido;
let email;
let consulta;
let edad;

solicitarEdad()

/*let nombre = prompt("Nombre:");
let apellido = prompt("Apellido:");
let email = prompt("Email:");
let consulta = prompt("Consulta:");

if (nombre === ""){
    alert("Por favor, ingrese su nombre")
}

if (apellido === ""){
    alert("Por favor, ingrese su apellido")
}

if (email === ""){
    alert("Por favor, ingrese su email")
}

if (consulta === ""){
    alert("Por favor, ingrese su consulta")
}*/

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
    alert("Su consulta ha sido enviada");
    console.log("Formulario Enviado");
    const consultas1 = new Consultas(nombre, apellido, email, consulta);
    listaConsultas.push(consultas1);
    console.log(listaConsultas)
    localStorage.setItem("listaConsultasStorage", JSON.stringify(listaConsultas))
}
