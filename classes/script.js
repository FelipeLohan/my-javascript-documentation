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
