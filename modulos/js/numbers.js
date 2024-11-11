//esse é um exemplo de named export, preciso declarar no código o que devo importar

function sum(num1, num2){
  return num1 + num2
}

function exp(base, expoente){
  return base ** expoente
}

function arredondar(valor, precisao){
  return valor.toFixed(precisao)
}

export {sum, arredondar}