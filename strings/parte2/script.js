const nome = 'Felipe Lohan'

console.log(`Meu nome é: ${nome}`)

const nomeLowerCase = nome.toLowerCase()
console.log(`LowerCase: ${nomeLowerCase}`) //transforma a String em LowerCase

const nomeUpperCase = nome.toUpperCase()
console.log(`UpperCase: ${nomeUpperCase}`) //transforma a String em UpperCase

const nomeCharAt = nome.charAt(3)
console.log(`charAt: ${nomeCharAt}`) //Uma função que retorna o caractere que está na posição do número que você digitou como parametro da função

const nomeReplace = nome.replace("e", "i")
console.log(`replace: ${nomeReplace}`)  //Uma função que substitui uma string por outra, nesse caso ela recebe 2 parametros, o primeiro é o caractere a ser substituido e o segundo é por qual ele será substituido

const nomeLenght = nome.length
console.log(`lenght ${nomeLenght}`) //Retorna o tamanho da String

const nomeIndexOf = nome.indexOf("i")
console.log(`indexOf: ${nomeIndexOf}`) //retorna a posição da primeira String que você colocar no parametro da função encontrada na sua String

const nomeLastIndexOf = nome.lastIndexOf("i")
console.log(`lastIndexOf: ${nomeLastIndexOf}`) //retorna a posição da ultima String que você colocar no parametro da função encontrada na sua String

const nomeSubString = nome.substring(0, 6)
console.log(`substring: ${nomeSubString}`) //recorta a String, apartir do primeiro parametro da função, até o segundo

const nomeTrim = nome.trim()
console.log(`trim: ${nomeTrim}`) //O trim serve para tirar todo o espaço em vazio da String.