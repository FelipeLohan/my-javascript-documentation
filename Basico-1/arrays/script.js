//COMO VER O TAMANHO DO ARRAY:
const valores = ['Maria', 19, 'claudio',true, undefined]
tamanhoValores = valores.length

console.log(tamanhoValores)

//REMOVER ELEMENTOS:
const nomes = ['Joao', 'Lohan', 'Felipe', 'Lima']
removerNome = nomes.pop() //essa função remove o ultimo elemento e retorna ele.
removerNome2 = nomes.shift() //essa função remove o primeiro nome e retorna ele.

console.log(nomes)





//INSERIR ELEMENTOS:
const alturas = [1.43, 1.67, 1.75, 1.99]
inserirAltura = alturas.push(2.10) //essa função adiciona o elemento dado como argumento na ultima posição do array
inserirAltura2 = alturas.unshift(1.37)//essa função adiciona o elemento dado como argumento na primeira posição do array

console.log(alturas)





//INSERIR E REMOVER ELEMENTOS GERAL:
const letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G']

letras.splice(0, 1) //Essa função aceita 2 argumentos, o primeiro ela pergunta aonde vai começar a fazer as alterações, a segunda pergunta quantos elementos ela vai remover apartir daquela posição(Contando com a própria posição), a ultima é qual elemento será adicionado após o primeiro argumento.






//CONCATENAR ARRAYS:
const meninos = ['Joao', 'Mario', 'Rodrigo']
const meninas = ['Alice', 'Maria', 'Josefinha']

const todos = meninas.concat(meninos)// A função concat, faz a concatenação do Array antes do ponto junto com o array que está no argumento da função

console.log(todos)




//ACESSO E ATRIBUIÇÃO:
const frutas = ['Melancia', 'Laranja', 'Kiwi', 'Melao']
console.log(frutas[0]) //Um array pode ser acessado colocando o index do elemento ao lado do nome dele
frutas.forEach((element,index) => {
  console.log(element) //o element faz referencia a literalmente o elemento em si.
  //ou
  console.log(frutas[index]) //o index faz referencia literalmente ao número do index que o elemento está.
});

for(let i = 0; i < frutas.length; i++){
  console.log(frutas[i]) //Esse é o metodo de acesso usando for, o elemente i será o index do array.
}