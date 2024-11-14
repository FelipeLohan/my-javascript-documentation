//Essa é a meneira como é definido uma classe em JS, colocamos o nome class seguido do nome da classe, logo após colocamos o construtor, junto com os parâmetros, e abaixo é colocado os metodos. dentro de uma classe no JS, os metodos colocados dentro dela vão diretos para o prototype, isso deixa o código mais limpo e organiza a responsabilidade de cada entidade do código.
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
