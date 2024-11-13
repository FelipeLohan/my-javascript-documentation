# ESTRUTURAS DE CONTROLE

Estruturas de controle são comandos ou instruções que determinam quais blocos de código serão executados em um programa. Elas são acionadas por meio de palavras ou expressões reservadas ou chaves. 

## Estrutura condicional:

Essas estruturas permitem executar blocos de código com base em condições.

### if else:

```javascript
if(condicao){

} else {

}
```

O `if else` é uma estrutura de controle, que chamamos de condicional, pois ela atende a uma condição para ser executada. A condição é colocada entre `()` da estrutura, após a palavra reservada `if`, se a condição colocada entre parenteses for `true` o bloco entre `{}` será executado.

O ` else` é algo opcional, caso a condição seja `false`, ele será executado e executará o comando dentro do bloco de codigo dele.

um exemplo real:

```javascript
let maiorDeIdade = true

if(maiorDeIdade){
  console.log('Pode ser preso')
} else {
  console.log('Não pode ser preso')
}
```

Como vimos, se a condição for `true` o comando será executado, e sim, é `true`, portanto a saida no terminal foi: `console.log('Pode ser preso')`

outro exemplo:

```javascript
let maiorLado
let comprimento = 10
let altura = 5

if(comprimento > altura){
  maiorLado = 'Comprimento'
} else {
  maiorLado = 'Altura'
}
```

Nesse exemplo estamos testando a condição por meio de uma operação comparativa. Esse tipo de operação retorna como resultado `true` ou `false`

### else if:

```javascript
if(condicao){

} else if(condicao2){

} else if(condicao3){

} else {

}
```

Podemos fazer uma cadeia de ` if ` usando `else if` , e `else` será executado caso nenhuma das condições dos `if` seja `true`

exemplo real:

```javascript
// Função para calcular o IMC
function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);

    console.log("Seu IMC é: " + imc.toFixed(2));

    // Classificação do IMC
    if (imc < 18.5) {
        console.log("Classificação: Abaixo do peso");
    } else if (imc >= 18.5 && imc < 24.9) {
        console.log("Classificação: Peso normal");
    } else if (imc >= 25 && imc < 29.9) {
        console.log("Classificação: Sobrepeso");
    } else {
        console.log("Classificação: Obesidade");
    }
}

// Exemplo de uso
let peso = 70; // em kg
let altura = 1.75; // em metros

calcularIMC(peso, altura);
```

### Switch case:

Avalia uma expressão e executa o bloco de código correspondente ao caso `case` que corresponde ao valor da expressão.

```javascript
switch (expressao) {
    case valor1:
        // Código para valor1
        break;
    case valor2:
        // Código para valor2
        break;
    default:
        // Código se nenhum caso corresponder
}
```

O `switch case` é uma ótima alternativa em alguns casos para o `if else`, veja um exemplo prático:

```javascript
let diaDaSemana = 5

switch(diaDaSemana){
  case 1:
    Console.log('Domingo')
    break;
  case 2:
    Console.log('Segunda')
    break;
  case 3:
    Console.log('Terça')
    break;
  case 4:
    Console.log('Quarta')
    break;
  case 5:
    Console.log('Quinta')
    break;
  case 6:
    Console.log('Sexta')
    break;
  case 7:
    Console.log('Sábado')
    break;
  default:
    Console.log('Dia invalido')          
}
```
O bloco `switch case` pega o valor da variável colocada nas `()` e tenta achar em algum `case`, quando ela acha o valor em algum `case` ela executa o comando abaixo dele, que termina com um `break;`, o comando `break;` é obrigatório colocar, pois ele indica para o programa que o bloco de comandos acabou ali. E pula pra fora do `switch case`

## Estrutura de repetição:

Estruturas de repetição permitem executar um bloco de código várias vezes.

### for loop:

```javascript
for (let i = 0; i < 10; i++) {
    // Código a ser executado repetidamente
}
```

O loop for, é um pouco mais complexo, seu funcionamento, ele é um dos comandos mais usados principalmente para acessar estrutura de dados, como Arrays e Lists.

Vamos entender passo a passo o valor na `() `, primeiro foi instanciado um variável `let i = 0` , ela poderia ter qualquer nome, mas chamamos ela de `i` pois é uma convenção por todos os programdores que seja esse nome dentro de um `for` . após isso eu coloquei uma condição `i < 10` , isso significa que o loop for ficará sendo repetido, toda vez, enquanto o valor de `i` for menor que 10. Depois disso coloquei uma operação `i++`, ou seja, a cada repetição, o valor de `i` será acrescentado +1, o loop vai repetir 10 vezes. Pois o valor de `i` começou com 0, e a cada loop acrescenta +1, a condição é que o loop vai continuar até que `i < 10`, quando `i` deixar de ser menor que 10, o loop terminará.

um exemplo que podemos fazer com `for` é um contador:

```javascript
for(let i = 0; i <= 5; i++){
  console.log(i)
}

//Saída:
//1
//2
//3
//4
//5
```

Nesse exemplo o loop vai continuar até que `i <= 5`, quando essa condição se tornar `false` ele irá parar.

### do while
```javascript
do {
    // Código a ser executado ao menos uma vez
} while (condicao);
```

No loop `do while` o código dentro do `do` é executado e quando chega ao fim ele testa a condição do `while`, caso ela seja `true` o código volta a ser executado novamente. Até que a condição de `while` seja `false`

exemplo prático:

```javascript
let numero = 1;

do {
    console.log("Número atual é: " + numero);
    numero++;
} while (numero <= 5);
```

## OBS:

A Sintaxe das estruturas de controle do `JavaScript` são inspiradas na da linguagem `C`, isso ocorre também com `C#` , `Java` , `C++` e outras linguagens, portanto você aprendendo uma vez em `JavaScript` aprenderá em todas linguagens (Ou quase todas) linguagens mais usadas e relevantes do mundo.