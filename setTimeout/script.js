function bomDia(nome) {
  console.log(`Bom dia ${nome}`);
}

console.log("A");

setTimeout(() => {
  bomDia("Lohan");
}, 2000);
//Esse é a sintaxe do setTimeout, ele serve para mostrar ou fazer algo no código após o tempo colocado no segundo argumento dele, o tempo é medido em milisegundos, portanto 2000ms = 2 segundos, o setTimeout faz isso de maneira assincrona, portanto seu código vai rodar normalmente, e só depois do tempo passado como argumento, ele fará a ação no código.
//Nesse caso eu fiz uma função bomDia que aceita um nome como argumento, e joguei dentro do setTimeout, somente depois de 2000ms ele me retornará a função escrita dentro do escopo da arrow function

console.log("B");

//também pode perceber que mesmo o console.log('B') estando abaixo do setTimeout, ele foi mostrado antes, pois o setTimeout não para a execução do código. Isso é o significado de ser assincrono.
