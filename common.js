const getCSS = (variavel) => {
    const bodyStyles = getComputedStyle(document.body)
    return bodyStyles.getPropertyValue(variavel)
}

const tickConfig = {
    family: getCSS('--font'),
    size: 16,
    color: getCSS('--primary-color')
}
function criarGrafico(data, laytout){
    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container')
    .appendChild(grafico)
     Ploty.newPlot(grafico,data,laytout)
}
export {getCSS, tickConfig, criarGrafico}