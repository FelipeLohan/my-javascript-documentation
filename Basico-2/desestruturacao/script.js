//A desestruturação serve para extrair alguma propriedade ou elemento de um objeto ou array.
//A técnica além de simplificar o código deixa ele mais legivel e reduz a quantidade de linhas

const array = [1, 2, 3, 4]
const [um , dois, tres, quatro] = array //isso é a desestruturação de um array, aqui eu dei um nome a cada item do array de acordo com seu index

console.log('--------ARRAY:-------')
console.log(um)


//--------------------
//objeto:

const pessoa = {
    nome: 'Lohan',
    idade: '18',
    sexo: 'Masculino'
}

const { nome, idade, sexo } = pessoa //nesse caso criei um objeto e peguei o nome das variaveis que quero acessar por fora, sem ter que chamar o obj

console.log('--------OBJETO:-------')
console.log(nome)
console.log(idade)
console.log(sexo)

//sem a desestruturação isso seria acessado dessa forma:
pessoa.nome
pessoa.idade
pessoa.sexo