let str1 = 'String em aspas simples'
let str2 = "String em aspas duplas"
let str3 = `Template String`

const pi = 3.141592653

const valorPi = `O valor de Pi é ${pi}`
console.log(valorPi)

console.log(`Valor de Pi arredondado: ${pi.toFixed(2)}`)

/* 

Em javascript essas são maneiras de usar Strings, elas podem ser declaradas em aspas duplas, simples ou crases, as crases formam template Strings.

Também posso tranformar um número em String como no exemplo abaixo usando o metodo toString():

*/

const piString = pi.toFixed(2).toString()

console.log(`A variavel pi: ${piString} e sei tipo: ${typeof piString}`)

/* 

Támbem posso converter uma String para número, usando o metodo Number(), ele aceita uma String como argumento:

*/

const transformarString = Number(piString)
console.log(`Valor: ${transformarString} e seu tipo: ${typeof transformarString}`)

