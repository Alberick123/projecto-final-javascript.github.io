
let nombre = document.getElementById("inputIndex")

let noticiasTexto = document.getElementById("noticiasTexto")

nombre.onchange = () => {
    nombre = document.getElementById("inputIndex").value
    noticiasTexto.innerText = `Hola ${nombre}. En este video resumimos lo que fue otra gran edicion del Buenos Aires Open. Vivimos momentos inolvidables y queremos agradecerte por formar nuevamente parte de ellos. Los esperamos en la edicion del proximo año.`
}
