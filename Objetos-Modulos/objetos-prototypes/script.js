const Product = function(nome, preco, quantity){ //Assim é o modo como criamos um objeto construtor, somente deve ser criado os atributos dentro dele, sem metodos, os metodos são colocados no Prototype
  this.nome = nome
  this.preco = preco
  this.quantity = quantity
}

Product.prototype.total = function(){
  return this.preco * this.quantity
} //Assim é como adicionamos metodos ao prototype, a diferença de colocar metodos no prototype e no construtor, é que no prototype os metodos serão compartilhados entre todas as instancias, já no construtor, para cada objeto instanciado, será criado um novo metodo na memoria.

const p1 = new Product('celular', 2600, 5) //Assim criamos um objeto de product, usando a palavra new, junto da parametrização.

console.log(p1)
console.log(p1.total())
