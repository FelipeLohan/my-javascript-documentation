# REST x SPREAD

O **rest** e o **spread** são operadores introduzidos no JavaScript (ES6) que permitem manipular coleções (arrays, objetos) de forma flexível e eficiente. Ambos utilizam a sintaxe de três pontos ` (...) `, mas têm finalidades diferentes

## DEFINIÇÃO REST:

O operador rest é usado para reunir múltiplos elementos em uma única variável. Ele é útil quando queremos capturar argumentos ou elementos "restantes" em uma função ou estrutura de dados.

## DEFINIÇÃO SPREAD:

O operador **spread** permite expandir (espalhar) elementos de um array, objeto ou iterável em um novo array ou função. Ele é útil para combinar, copiar ou passar elementos.

### EXEMPLOS REST

#### Uso para parâmetro de funções:

```
function soma(...numeros) {
  return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}

console.log(soma(1, 2, 3, 4)); // Retorna 10
```

neste caso de uso, ele usou somente uma variável ` ...numeros ` que aceito número ilimitado de argumentos. O metódo ` reduce() ` faz operações acumulativas dentro do array.

Ou seja, o ` ...numeros ` armazenou dentro de um array, os números passados no argumento da função.

#### Desestruturar Array ou Objeto:

```
const [primeiro, segundo, ...resto] = [1, 2, 3, 4, 5];
console.log(primeiro); // 1
console.log(segundo); // 2
console.log(resto); // [3, 4, 5]
```

nesse caso ele foi usado para fazer a **desestruturação** de um array, o **rest** pode ser passado no final de um array, aonde ele vai representar todo o **resto** da estrutura de dados.

### EXEMPLOS SPREAD

#### Uso com arrays:

```
const numeros = [1, 2, 3];
const maisNumeros = [...numeros, 4, 5];
console.log(maisNumeros); // [1, 2, 3, 4, 5]
```

nesse caso o **spread** espalhou dentro do novo array, o conteúdo original de ` numeros ` e concatenou com os novos valores.

#### Uso com objetos:

```
const pessoa = { nome: 'Felipe', idade: 25 };
const novaPessoa = { ...pessoa, cidade: 'São Paulo' };
console.log(novaPessoa); // { nome: 'Felipe', idade: 25, cidade: 'São Paulo' }

```

nesse caso ele fez a mesma coisa que no Array, mas sendo que com um objeto, que se vermos direitinho, são dados separados por virgulas.

`...pessoa ` armazenou todo o objeto de ` pessoa ` e passou como argumento para criar um novo objeto, adicionando mais coisas.

