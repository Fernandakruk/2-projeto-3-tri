import { getCSS, criarGrafico } from "./common.js"
import { getCSS,criarGrafico,incluirTexto } from "./common.js"
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
  const config = {
    responsive: true,
    displayModeBar: false
}
Ploty.newPlot(grafico,data,layout,config)

criarGrafico(data,layout)
incluirTexto(`embora o <span>Instagram</span> ocupe a quarta posição em termos 
de número total de usuários entre as redes sociais, destaca-se como a
<span>preferida dos usuários</span>.Supera até mesmo o <span>Facebook</span>, a plataforma
com mais usuários, sendo terceira opção mais apreciada pelos usuários,<br>Essa preferência
evidente a forte conexão e apreço que as pessoas tem pelo Instagram emcomparação
com outras redes`)
