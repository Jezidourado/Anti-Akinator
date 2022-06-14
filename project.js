var perguntaAnterior = ''

const elementoResposta = document.querySelector('#resposta')

const inputPergunta = document.querySelector('#inputPergunta')

const respostas = [
  'Depende de você.',
  'Me pergunta amanhã.',
  'Porquê eu tenho que saber de tudo?',
  'Você só pensa em si mesmo?',
  'Faz de conta que sim.',
  'É ruim em...',
  'Tenho cara de vidente?',
  'Se nem você sabe, não vai ser eu que vou te responder.',
  'Ta parecendo pergunta de ENEM isso aí.',
  'ÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉ NÃO!',
  'Nem se chover canivete.',
  'Pergunta pro Akinator.'
]

// clicar em fazer pergunta
function fazerPergunta() {
  elementoResposta.style.opacity = 1

  if (inputPergunta.value == '') {
    alert('Digite sua pergunta')
    return
  }

  const pergunta = inputPergunta.value

  if (perguntaAnterior == pergunta) {
    alert('Faça uma nova pergunta')
    return
  }

  perguntaAnterior = pergunta

  // gerar número aleatório
  const totalRespostas = respostas.length - 1
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = respostas[numeroAleatorio]

  // sumir a resposta depois de 5 segundos
  setTimeout(function () {
    elementoResposta.style.opacity = 0
  }, 4000)
}
