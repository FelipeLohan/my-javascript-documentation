# ARRAYS

Um `Array` é um tipo de estrutura de dados, onde podemos armazenar uma coleção de qualquer tipo de dado, com números, objetos, strings ou até outros `Arrays`.

## Instanciando um Array:

```javascript
let frutas = ["maçã", "banana", "laranja"];
```
o `Array` é representado pelos conchetes `[]` , e podemos instanciar ela como qualquer outra variável, dentro do `[]` os elementos do `Array` são separados por virgula, e a ordem deles é contada através do `index`, o primeiro item tem o `index` 0, o segundo `index` 1, e assim por diante.

portanto podemos acessar um item dentro do array dessa forma:

```javascript
let frutas = ["maçã", "banana", "laranja"];
console.log(frutas[0]); // Saída: "maçã"
console.log(frutas[1]); // Saída: "banana"
console.log(frutas[2]); // Saída: "laranja"

```

O número entre `[]` representa o index, que também determina a posição do item dentro do array.

## Propriedade lenght:

```javascript
let frutas = ["maçã", "banana", "laranja"];
console.log(frutas.length); // Saída: 3
```

O `Array` por si só, tem vários metódos que permitem a gente manipular ele, e propriedades. Um deles é o `lenght`, que retorna o número de itens dentro do `Array`.

## Metódos mais usados em Array

- `push()` Adiciona um ou mais elementos ao final do array.
```javascript
frutas.push("uva");
console.log(frutas); // Saída: ["maçã", "banana", "laranja", "uva"]

```

- `pop()` Remove o último elemento do array.
```javascript
frutas.pop();
console.log(frutas); // Saída: ["maçã", "banana", "laranja"]

```

- `shift()` Remove o primeiro elemento do array.
```javascript
frutas.shift();
console.log(frutas); // Saída: ["banana", "laranja"]

```

- `unshift()` Adiciona um ou mais elementos ao início do array.
```javascript
frutas.unshift("morango");
console.log(frutas); // Saída: ["morango", "banana", "laranja"]

```

- `indexOf()` Retorna o índice da primeira ocorrência de um valor. Se o valor não for encontrado, retorna -1.
```javascript
let indice = frutas.indexOf("banana");
console.log(indice); // Saída: 1

```

- `splice()` Remove, substitui ou adiciona elementos em uma posição específica do array.
```javascript
frutas.splice(1, 1); // Remove um elemento na posição 1
console.log(frutas); // Saída: ["maçã", "laranja"]

```

- `slice()` Cria uma cópia de uma parte do array sem modificá-lo.
```javascript
let novasFrutas = frutas.slice(0, 2);
console.log(novasFrutas); // Saída: ["maçã", "banana"]
```

## Navegação dentro de um Array:

A maneira mais tradicional de percorrer um `Array` é usando o loop `for`

```javascript
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
```

Como pode ver, a gente usou a condicional como `i < frutas.lenght` , portanto ele vai percorrer todos os itens dentro do `Array`, começando pelo `index` 0, e indo até o `index` máximo do `Array`, portanto podemos usar a variável `i`, pra representar aquele `index` especificamente.






