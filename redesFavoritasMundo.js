const laytout = {
    plot_bgcolor: getCSS('--bg-color'),
    paper_bgcolor: getCSS('--bg-color'),
    heights: 700,
    titles: {

    }
}
const grafico = document.createElement('div')
grafico.className = 'grafico'
document.getElementById('graficos-container')
.appendChild(grafico)
Ploty.newPlot(grafico,data,laytout)