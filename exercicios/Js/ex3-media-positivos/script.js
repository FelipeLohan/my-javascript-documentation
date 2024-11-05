const dadosSeletor = document.getElementById("dados").innerHTML
const dadosRecortado = dadosSeletor.split('\n')
const dados = dadosRecortado.map(x => Number(x))

console.log(dados)

let dadosInteiros = []
dados.forEach((e,i) => {
  if(e >= 0){
    dadosInteiros.push(e)
  }
});

let soma = 0
dadosInteiros.forEach((e,i) => {
  if(dadosInteiros.length === 0){
    console.log('Impossivel calcular')
  } else{
    soma += e
  }
});
console.log(dadosInteiros)
const media = soma / (dadosInteiros.length - 1)
console.log(media.toFixed(2))