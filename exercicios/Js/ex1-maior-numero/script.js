const seletorDados = document.getElementById('dados').innerHTML
const dadosRecortados = seletorDados.split('\n')
const dados = dadosRecortados.map(x => Number(x))

console.log(dados)
let maiorNumero = 0
dados.forEach((e, i) => {
  if(e > maiorNumero){
   maiorNumero = e
  }
});
console.log(maiorNumero)