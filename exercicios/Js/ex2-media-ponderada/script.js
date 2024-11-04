
const seletorDados = document.getElementById('dados').innerHTML
const dadosRecortados = seletorDados.split('\n')
const dados = dadosRecortados.map(x => Number(x))
console.log(dados)
let media = 0
let x = 0
let y = 0
let z = 0
for(let i = 0; i < dados.length; i++){

  switch(i){
    case 0:
      x = dados[i]
      break;
    case 1:
      y = dados[i]
      break;
    case 2:
      z = dados[i]
      break;
    default:
      console.log('Somente aceita 3')
      break;      
  }
}
media = ((x * 2) + (y * 3) + (z * 5)) / 10

console.log(media)
 