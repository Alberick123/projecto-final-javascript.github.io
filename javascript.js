// HTML Contacto

solicitarEdad()

let nombre = prompt("Nombre:");
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
}


function solicitarEdad(){
    let edad;
    edad = +(prompt("Por favor, ingrese su edad"))

while (edad < 18){
    alert("Es menor de edad, por favor cierre la página")
    break
}
}


const listaConsultas = [];

class Consultas{
    constructor(nombre, apellido, email, consulta) {
        this.nombre = nombre;
        this.apellido  = apellido;
        this.email  = email;
        this.consulta = consulta;
    }
}

const consultas1 = new Consultas(nombre, apellido, email, consulta);

listaConsultas.push(consultas1);

for (const i of listaConsultas) {
    console.log(listaConsultas)
}
