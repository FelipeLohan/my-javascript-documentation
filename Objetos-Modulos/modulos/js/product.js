//isso é um exemplo de default export, onde apenas posso exportar 1 componente por modulo.

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