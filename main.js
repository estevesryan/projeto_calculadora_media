const form = document.getElementById('form-atividade')
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji celebrando" />'
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji decepcionado" />'
let notaMinima = prompt('Digite a nota minima')


while(notaMinima == 0 || notaMinima == '') {
    notaMinima = prompt('Digite a nota minima')
}

const atividades = []
const notas = []
let linhas = ''

const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
6
form.addEventListener('submit', (e) => {
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
    atualizaMediaFinal()
})

function adicionaLinha() {
    const nomeAtividade = document.getElementById('nome-atividade')
    const notaAtividade = document.getElementById('nota-atividade')

    if(atividades.includes(nomeAtividade.value)) {
        alert(`A atividade ${nomeAtividade.value} ja foi inserida`)
    } else {
    atividades.push(nomeAtividade.value)
    notas.push(parseFloat(notaAtividade.value))
    
    let linha = '<tr>'
    linha += `<td>${nomeAtividade.value}</td>`
    linha += `<td>${notaAtividade.value}</td>`
    linha += `<td>${notaAtividade.value >= notaMinima ? imgAprovado : imgReprovado }</td>`
    linha += `</tr>`

    linhas += linha
    }

    nomeAtividade.value = ''
    notaAtividade.value = ''
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal()
    
    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2)
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado: spanReprovado 
}

function calculaMediaFinal() {
    let somaDasNotas = 0 
    
    notas.forEach(nota => {
        somaDasNotas += nota
    });

    return media = somaDasNotas / notas.length
}