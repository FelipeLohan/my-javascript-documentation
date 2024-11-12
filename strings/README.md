# Strings

## CONCEITO:
Uma String é um texto, que no JavaScript é representado por `""` ou `''`, assim o JavaScript consegue identificar que esse dado é uma String.

## CONCATENAÇÃO:
Podemos concatenar uma String usando o operador de ` + ` por exemplo:

> let saldoConta = 2000 
console.log('tenho r$' + saldoConta + 'de saldo em minha conta') 

## TEMPLATE STRINGS:

Também pode ser declarado uma String usando ` `` ` tudo colocado entre a crase, é uma template String, ela facilita a concatenação de dados, pois os dados são colocados dentro de um cifrão seguido por chaves `${}` evitando de ter que usar o sinal de ` + ` para fazer a concatenação, deixa o código mais limpo

> let saldoConta = 2000 
console.log('tenho ${saldoConta} reais em minha conta)

### Conversão de Number para String:

> let numero = 10
> let numeroConvertido = numero.toString()

o metódo `toString()` converte um número para String

### Conversão de String para Number:

> let numeroString = '10'
let numeroConvertido = Number(numeroString)

o metódo `Number()` aceita como argumento uma String que você deseja transformar em Number, muito usado para quando capturamos informações de banco de dados ou html, e elas vem em String, mas precisamos tratar como Number.

### String convertida em minusculo e maiusculo:

> let nome = 'Felipe Lohan'
> let nomeMaiusculo = nome.toUpperCase()
> let nomeMinusculo = nome.toLowerCase()

- `toUpperCase()` é usado para transformar a String toda em maiusculo

- `toLowerCase()` é usado para transformar em minusculo

### Mostrar um caractere em especifico:

>let nome = 'Felipe Lohan'
> console.log(nome.charAt(3)) //retorna 'i'

esse bloco de código vai me retornar o caractere 'i', pois de acordo com o index dessa minha String, o caractere 'i' é o número 3, os caracteres começam a ser contados do número 0.

ou seja o `charAt(n)` recebe um valor como argumento que é o index da palavra que você quer que a função retorne

### Alterar determinado caractere por outro

>let nome = 'Felipe Lohan'
> console.log(nome.replace(e, i)) //Filipe Lohan

o metódo `replace()` aceita 2 argumento, o primeiro é o primeiro caractere que você quer que seja recolocado, o segundo é por qual você quer que isso aconteça.

no caso do código acima, eu substitui o caractere 'e', por 'i', note que somente foi substituido a primeira letra 'e', pois ele somente pega o primeiro caractere que foi selecionado, caso quisesse pegar todos, deveria ser usado uma expressão regular.

### Saber o número de caracteres na sua String:

``` let nome = 'Felipe Lohan'
console.log(nome.lenght) //vai me retornar o numero de caracteres em Felipe Lohan ```

`lenght` não é um metódo, somente é um acesso a String, que armazena o tamanho dela, o retorno desse atributo é literalmente o número exato de caracteres usado na String, contando espaços em branco.

