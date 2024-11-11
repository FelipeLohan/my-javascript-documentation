import * as number from './numbers.js' //esse é o modo de importar um named, eu usei * pois já declarei no modulo quais funções eu queria exportar, mas caso eu não declarasse lá, deveria usar o { sum, arredondar } no lugar do *
import Product from './product.js' //esse é o modo de importar um default


console.log(number.sum(3, 4))
console.log(number.arredondar(3.3242, 2))

const prod1 = new Product('Kwid', 60000, 3)
console.log(prod1.name)