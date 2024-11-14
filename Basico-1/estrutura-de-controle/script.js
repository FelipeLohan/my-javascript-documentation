//O JavaScript tem a mesma sintaxe de estrutura de controle da linguagem C

//if loop
const time = 19;
if (time < 12) {
  console.log("bom dia");
} else if (time < 18) {
  console.log("boa tarde");
} else {
  console.log("boa noite");
}

//loop switch case

const week = 3;
switch (week) {
  case 1:
    console.log("Segunda");
    break;
  case 2:
    console.log("Terça");
    break;
  case 3:
    console.log("Quarta");
    break;
  case 4:
    console.log("Quinta");
    break;
  case 5:
    console.log("Sexta");
    break;
  case 6:
    console.log("Sabado");
    break;
  case 7:
    console.log("Domingo");
    break;
  default:
    console.log("Erro");
    break;
}

//loop do while

const tentativas = 0
do{
    console.log('Digite sua senha')
    //usuario digita senha
    ++tentativas
} while(tentativas < 3)

//loop for

for(let i = 0; i < 5; i++){
    console.log(i)
}


