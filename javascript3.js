let tablaTickets = document.getElementById('tablaTickets');


function modificarColumna(tabla, numeroColumna, array){
    for(let i=2, celda; i < tabla.rows.length; i++) {
        celda = tabla.rows[i].cells[numeroColumna];
        celda.innerHTML = array[i-2]
    }
}



fetch('/data.json')
    .then( (res) => res.json())
    .then( (data) => {
        const dia = data.map((el) => el.dia)
        const horaDeInicio = data.map((el) => el.horaDeInicio)
        const platea = data.map((el) => el.platea)
        const palcoSur = data.map((el) => el.palcoSur)
        const palcoNorte = data.map((el) => el.palcoNorte)
        const palcoLateralA = data.map((el) => el.palcoLateralA)
        const palcoLateralB = data.map((el) => el.palcoLateralB)

        modificarColumna(tablaTickets, 0, dia)
        modificarColumna(tablaTickets, 1, horaDeInicio)
        modificarColumna(tablaTickets, 2, platea)
        modificarColumna(tablaTickets, 3, palcoSur)
        modificarColumna(tablaTickets, 4, palcoNorte)
        modificarColumna(tablaTickets, 5, palcoLateralA)
        modificarColumna(tablaTickets, 6, palcoLateralB)
    })
