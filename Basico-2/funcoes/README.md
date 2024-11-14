# Funções

Uma função em JavaScript é um bloco de código que executa uma tarefa específica e pode ser reutilizado. As funções ajudam a organizar e reutilizar o código.

## Sintax:

O jeito mais comum de instanciar uma função é usando a palavra-chave ` function ` na frente do nome da função, ex:

```
function saudacao() {
    console.log("Olá, bem-vindo!");
}
```

sabemos que uma variável é uma função por conta dos `()` , toda vez que chamarmos `saudacao()` ela é executada.

## Função com parâmetro:

Um parâmetro é um valor que passamos na função e ela pode trabalhar com ele, exemplo:

```
function saudacao(nome) {
    console.log("Olá, " + nome + "!");
}

saudacao("Ana"); // Saída: "Olá, Ana!"
```

nesse caso instanciei uma função chamada `saudacao()` e ela aceita um parâmetro, que chamei de `nome`, portanto instanciei a função dessa forma: `saudacao('Ana')` , portando `nome = 'Ana'` somente dentro do escopo da função.

## Funções com retorno:

Uma função pode retornar um valor, exemplo:

```
function soma(a, b){
  return a + b
}

const resultado = soma(2, 2) //resultado será 4
```

nesse caso não instanciei nada na minha tela, nem dei nenhum `console.log()`, somente pedi pra função me retornar a operação a + b. E armazenei esse valor dentro da variável `resultado`.

## Funções Anônimas:

Uma função anônima é uma função sem nome. Geralmente, usamos essas funções como funções de callback ou atribuímos a uma variável.

```
const saudacao = function(nome) {
    console.log("Olá, " + nome + "!");
};

saudacao("João"); // Saída: "Olá, João!"
```

nesse exemplo da pra ver que não precisei dar um nome pra função, somente passei ela como valor da variável `saudacao`

## Arrow Functions:

Arrow functions, introduzidas no ES6, são uma maneira mais curta de escrever funções. Elas são especialmente úteis para funções pequenas e possuem uma sintaxe diferente:

```
const saudacao = (nome) => {
    console.log("Olá, " + nome + "!");
};

saudacao("Lucas"); // Saída: "Olá, Lucas!"
```

pra ser mais exato essa é a sintax dela:

```
() => {

}
```

o parentêses pode ter, ou não, um parâmetro, as Arrow Functions deixam o código mais limpo e bonito.

e se a função tiver somente 1 linha de retorno, podemos simplificar ainda mais:

```
const soma = (a, b) => a + b;
console.log(soma(5, 3)); // Saída: 8

```

nesse caso ocultamos os parentêses e simplificamos mais ainda a função.

# Funções de alta ordem:

Funções de alta ordem são aquelas que recebem uma função como argumento ou retornam uma função como resultado. Esse é um conceito importante em JavaScript e na programação funcional.

### Exemplo de uma função de alta ordem:

```
function processar(valor, funcao) {
    return funcao(valor);
}

function dobrar(num) {
    return num * 2;
}

console.log(processar(5, dobrar)); // Saída: 10
```

nesse bloco de código temos uma função `processar()`, que aceita um `valor` e `funcao` como argumento, portanto fiz uma função chamada `dobrar()`, onde ela retorna um número multiplicado por 2. portanto fiz um `console.log(processar(5, dobrar)` , passei o número 5 e ele foi dobrado pela função `dobrar()`, eu também não executei a função no argumento, somente passei a sua referência na mémoria.

### Exemplos práticos de funções de alta ordem em arrays:

- `map:` Transforma cada item do array e retorna um novo array com os itens transformados.
```
const numeros = [1, 2, 3, 4];
const dobrados = numeros.map(num => num * 2);
console.log(dobrados); // Saída: [2, 4, 6, 8]
```

- `filter:` Filtra os itens do array com base em uma condição e retorna um novo array com os itens que passaram na condição.

```
const numeros = [1, 2, 3, 4];
const pares = numeros.filter(num => num % 2 === 0);
console.log(pares); // Saída: [2, 4]
```

- `reduce:` Reduz o array a um único valor, acumulando o resultado de uma operação definida no callback.

```
const numeros = [1, 2, 3, 4];
const somaTotal = numeros.reduce((acumulador, num) => acumulador + num, 0);
console.log(somaTotal); // Saída: 10
```

### OBS:

Esses são somente alguns exemplos, para entender melhor sobre funções, crie um arquivo e teste, funções são a base para qualquer tipo de linguagem de programação, pois é o que possibilita operações mais complexas e relacionar dados.

Existem muitos outros tipos de funções de alto nivel para manipulação de arrays.