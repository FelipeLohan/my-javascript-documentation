//esse é um exemplo de named export, preciso declarar no código o que devo importar

export function sum(num1, num2) {
  return num1 + num2;
}

export function exp(base, expoente) {
  return base ** expoente;
}

export function arredondar(valor, precisao) {
  return valor.toFixed(precisao);
}
