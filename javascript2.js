
let nombre = document.getElementById("inputIndex")

let noticiasTexto = document.getElementById("noticiasTexto")

let fecha = new Date()

let fechaHoras = fecha.getHours()

nombre.onchange = () => {
    nombre = document.getElementById("inputIndex").value
    const condicionHora = (fechaHoras >= 20 || fechaHoras < 6) ? true : false
    condicionHora ? noticiasTexto.innerText = `Buenas noches ${nombre}. En este video resumimos lo que fue otra gran edicion del Buenos Aires Open. Vivimos momentos inolvidables y queremos agradecerte por formar nuevamente parte de ellos. Los esperamos en la edicion del proximo año.` : noticiasTexto.innerText = `Buenos dias ${nombre}. En este video resumimos lo que fue otra gran edicion del Buenos Aires Open. Vivimos momentos inolvidables y queremos agradecerte por formar nuevamente parte de ellos. Los esperamos en la edicion del proximo año.`
}
