# MODULOS (ES6)

Antes de começarmos esse capitulo, creio que essa parte é uma das mais importantes do JavaScript atual, pois ela é muito usada em FrameWorks, irei tratar os modulos de maneira mais aprofundada, para que não reste dúvidas sobre o assunto

## O que é um modulo?

O conceito tecnico de modulo é que ele é uma unidade de código que pode ser reutilizada em diferentes partes do aplicativo. Ele pode exportar variáveis, funções, objetos ou classes, que podem ser importados em outro módulo.

tente relacionar um modulo, com uma classe em java, porém um modulo é algo muito mais flexivel que isso, pois dependendo do caso, não precisa ser instanciado.

## Beneficios de usar modulo?

O uso de módulos ajuda a organizar e separar responsabilidades do código, o que é muito importante à medida que o código cresce em complexidade. Além disso, o uso de módulos permite a manutenção mais fácil e o encapsulamento das funcionalidades.

## Trabalhando com modulos na prática!

### Named export:
Vamos montar uma biblioteca para trabalhar com operações númericas, para criarmos um modulo, criaremos um novo arquivo ` .js ` irei criar um arquivo chamado ` numbers.js `

```
//Dentro de numbers.js

export function sum(num1, num2){
  return num1 + num2
}

export function exp(base, expoente){
  return base ** expoente
}

export function arredondar(valor, precisao){
  return valor.toFixed(precisao)
}

```

dentro do ` numbers.js ` fiz uma biblioteca de operações, agora criarei um arquivo chamado ` main.js ` e usarei os operadores dentro dele. Pode perceber que antes de cada função existe a palavra chave ` export `, ela é usada para indicar que essa variável poderá ser importada por outros modulos.

vamos importar os operadores de exponenciação e soma para meu arquivo ` main.js `

```
//Dentro de main.js

import {sum, exp} from './js/numbers.js'

let x = 5
let y = 3

const soma = sum(x, y) //SAIDA: 8
```

dentro do arquivo ` main.js ` usamos a palavra chave ` import ` , seguido de um objeto desestruturado com o nome das funções. e depois foi usado a palavra ` from ` seguido de uma String contendo o caminho do arquivo ` numbers.js ´ (No seu caso pode estar salvo de outro modo).

isso que fizemos foi uma named export, pois tivemos que colocar entre as chaves, o nome dos itens que queriamos importar, agora irei demonstrar a default export.

### Default export:

Nesse exemplo iremos exportar dentro do modulo ` main.js ` um produto, irei criar um arquivo ` product.js ` e iremos criar uma classe product dentro dele.

```
//Dentro de product.js

export default class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  total() {
    return this.price * this.quantity;
  }

  add(amount) {
    this.quantity += amount;
  }

  remove(amount) {
    if (amount <= this.quantity) {
      this.quantity -= amount;
    }
  }

  label() {
    return `Dados: ${this.name} , ${this.price.toFixed(2)}`;
  }
}
```

essa classe ` Product ` tem várias variáveis e metódos, um detalhe, é que agora que estamos trabalhando com modulos, os metódos instanciados dentro de um modulo de uma classe, vão diretamente para o prototype, portanto facilita o código e deixa ele mais limpo.

foi usado as palavras chaves ` export default `, isso significa que somente esse item dentro da meu modulo poderá ser exportado. E posso exportar ele dentro do main

```
//Dentro do main.js

import Product from './js/product.js'

const prod1 = new Product('Kwid', 60000, 3)
console.log(prod1.name) //SAIDA: 'Kwid'
```

desse modo acabei de fazer uma instancia de Product dentro de outro modulo, assim consegui jogar toda a responsabilidade do produto, para a classe responsável pelo produto.

## Mais sobre import

### named import:

Se você fez uma exportação nomeada, você usa ` {} ` para importar os itens específicos:

```
import { sum, exp } from './js/numbers.js'

console.log(sum(2, 3)) // SAIDA: 5
console.log(exp(5, 2)) // SAIDA: 25

```

Você pode renomear a importação se desejar, usando ` as `:

```
import { sum as somar, exp } from './js/numbers.js';

console.log(somar(4, 5)); // SAIDA: 9
```

### default import:

Se você usou `export default `, a importação não precisa de ` {} ` e pode ser nomeada de qualquer forma

```
import Product from './js/product.js'

const prod1 = new Product('Kwid', 60000, 3)
console.log(prod1.name) //SAIDA: 'Kwid'
```

### importando tudo de um modulo:
```
import * as matematica from './numbers.js';

console.log(matematica.sum(2, 3));  // SAIDA: 5
console.log(matematica.exp(5, 2));  // SAIDA: 25
```

somente usar o caractere ` * ` , assim poderá importar todos os itens que tiverem com export dentro do modulo ao qual você deseja importar.