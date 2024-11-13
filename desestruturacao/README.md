# DESESTRUTURAÇÃO

A desestruturação serve para extrair alguma propriedade ou elemento de um objeto ou array. A técnica além de simplificar o código deixa ele mais legivel e reduz a quantidade de linhas.

## Desestruturação de Arrays:

### Nomeando valores por posição e capturando

```javascript
const numeros = [10, 20, 30];
const [a, b, c] = numeros;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

```

nesse caso consegui capturar os itens do array e ainda armazenar em uma variável.

### Ignorando elementos:

```javascript
const numeros = [10, 20, 30, 40];
const [primeiro, , terceiro] = numeros;

console.log(primeiro); // 10
console.log(terceiro); // 30
```

Nesse exemplo consegui capturar o primeiro e terceiro item do `index`, seguindo o `index` da desestruturação também

## Desestruturação de Objetos:

```javascript
const pessoa = { nome: "Ana", idade: 25 };
const { nome, idade } = pessoa;

console.log(nome); // "Ana"
console.log(idade); // 25
```

nesse exemplo, conseguimos capturar e transformar em uma variável o `nome` e `idade` do objeto.

### mudando nome do atributo:

```javascript
const pessoa = { nome: "Ana", idade: 25 };
const { nome: nomePessoa, idade: idadePessoa } = pessoa;

console.log(nomePessoa); // "Ana"
console.log(idadePessoa); // 25
```

Você pode atribuir propriedades a variáveis com nomes diferentes.

### adicionando propriedades

```javascript
const pessoa = { nome: "Ana" };
const { nome, idade = 30 } = pessoa;

console.log(nome); // "Ana"
console.log(idade); // 30
```

aqui foi adicionado a propriedade `idade`, ao objeto `pessoa`