//essa é a forma mais comum de instanciar uma função
function soma(num1, num2) {
  return num1 + num2;
}

//também tem essa forma, que é sinonimo a forma acima. Sendo que a pessoa escreve mais, portanto é preferivel a de cima
const soma2 = function (num1, num2) {
  return num1 + num2;
};

//essa daqui é uma arrow function, onde oculta o termo function e usamos a seta =>
const soma3 = (num1, num2) => {
  return num1 + num2;
};

//quando temos somente 1 argumento, não é necessario o uso de parenteses e quando for somente 1 linha de ação, pode ser omitido as chaves do escopo
const dobro = num => num * 2

const triplo = num => num * 3

//mas também podemos colocar os parenteses e chaves, sem problemas.
const areaQuadrado = (lado) => {
  return lado ** 2
}
