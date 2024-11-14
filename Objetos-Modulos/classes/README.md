# CLASSES

Em JavaScript as Classes são representadas pela palavra-chave `class`, ela é um pouco diferente do que em outras linguagens, como Java, C#, C++. No JavaScript as Classes foram adicionadas apartir do ES6, para tentar facilitar o uso dos prototypes, o JavaScript chama essa facilitação de `sintax sugar` uma sintax mais docinha e amigável.

Pense em uma classe como uma estrutura aonde podemos guardar informações e funções de forma relacionada e centralizada. Vamos usar um exemplo de uma classe `Product`:

```javascript
class Product {
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

const p1 = new Product("Monitor", 1200, 2);
const p2 = new Product("Carro", 30000, 10);
```

Vamos destrinchar esse código em detalhes.

## Instanciando a classe:

Usamos a palavra reservada `class` junto do nome da classe. Logo após isso abrimos o escopo da classe e colocamos a função construtora dela. Abaixo disso é instanciado as funções que vão diretamente para o prototype.

## Instanciando um objeto da classe:

Agora podemos instanciar um objeto da classe produto, e passar de argumento o construtor.

Irei instanciar um objeto que vou chamar de `p1` e será um monitor de computador.

```javascript
const p1 = new Product("Monitor", 1200, 2);
```

com isso, eu tenho acesso agora a todos os metodos de `p1` posso por exemplo fazer:

```javascript
const p1 = new Product("Monitor", 1200, 2);

console.log(p1.name)
//SAIDA: "Monitor"

p1.total() //SAIDA: 2400
```

## OBS

As classes são estruturas totalmente importantes na programação orientada a objetos, Java por exemplo é uma linguagem que funciona através de classes, as classes ajudam a organizar as responsabilidades e a manutenabilidade do código.