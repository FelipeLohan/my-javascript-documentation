const dadosSeletor = document.getElementById('dados').innerHTML
const dadosRecortado = dadosSeletor.split('\n')
const dados = dadosRecortado.map(x => Number(x))
dados.pop()

let dentro = 0
let fora = 0
dados.forEach((e, i) => {
  if(e >= 10 && e <= 20){
    ++dentro
  } else{
    ++fora
  }
});

console.log(`Fora: ${fora}`)
console.log(`Dentro: ${dentro}`)