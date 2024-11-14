console.log('------------------------REST-----------------------')
//O operador Rest é usado para agrupar múltiplos elementos em um único array ou objeto. Ele geralmente é utilizado em parâmetros de funções para capturar múltiplos argumentos ou em desestruturações para pegar o restante dos elementos.

// Usando Rest em uma função para capturar múltiplos argumentos
function soma(...numeros) {
  return numeros.reduce((total, num) => total + num, 0)
}

console.log(soma(1, 2, 3, 4)); // Saída: 10


// Usando Rest na desestruturação de arrays
const [primeiro, segundo, ...resto] = [1, 2, 3, 4, 5];
console.log(primeiro); // Saída: 1
console.log(segundo);  // Saída: 2
console.log(resto);    // Saída: [3, 4, 5]


// Usando Rest na desestruturação de objetos
const pessoa = { nome: "Ana", idade: 25, cidade: "São Paulo" };
const { nome, ...infoRestante } = pessoa;
console.log(nome);           // Saída: "Ana"
console.log(infoRestante);    // Saída: { idade: 25, cidade: "São Paulo" }

//Se percebemos, o Rest captura tanto o Objeto como o Array de forma que cada elemento é um index. Portanto quando separamos por virgula, estamos apontando pro index do elemento espelhado.
//ex: {nome, idade, cidade} = {nome: 'Ana', idade 25, cidade 'São paulo'}
//por isso o infoRestante está capturando os 2 ultimos, pois ele ocupa todos os outros index, após o index 0 do objeto.

console.log('------------------------SPREAD-----------------------')
//O operador Spread é usado para espalhar os elementos de um array ou objeto. Ele é útil para combinar, copiar ou clonar arrays e objetos, e para passar múltiplos argumentos em chamadas de função.

// Usando Spread para combinar arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinado = [...array1, ...array2];
console.log(combinado); // Saída: [1, 2, 3, 4, 5, 6]

// Usando Spread para copiar arrays
const copia = [...array1];
console.log(copia); // Saída: [1, 2, 3]

// Usando Spread em objetos
const endereco = { cidade: "São Paulo", estado: "SP" };
const pessoaCompleta = { ...pessoa, ...endereco };
console.log(pessoaCompleta);
// Saída: { nome: "Ana", idade: 25, cidade: "São Paulo", estado: "SP" }

// Usando Spread para passar múltiplos argumentos para uma função
function multiplica(a, b, c) {
  return a * b * c;
}
const numeros = [2, 3, 4];
console.log(multiplica(...numeros)); // Saída: 24

//RESUMO:
//REST: Usado para reunir elementos de um array ou objeto (geralmente usado para capturar o restante dos elementos)

//SPREAD: expande elementos de arrays ou objetos (usado para combinar ou copiar)
