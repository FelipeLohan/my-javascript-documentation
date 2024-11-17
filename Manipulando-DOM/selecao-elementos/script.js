const item1 = document.querySelector("li"); // o querySelector() é um metódo usado para selecionar um elemento usando a mesma notação do css
//nesse caso passei o elemento 'li' e ele vai me retornar o primeiro elemento li do meu código css

console.log(item1); //imprime o elemento 'li' selecionado
console.log(item1.outerHTML); //me imprime o texto dentro, junto com a tag selecionada
console.log(item1.innerHTML); //me imprime somente o texto, e o html que tiver dentro dele

const items = document.querySelectorAll("li"); //me retorna uma node list, com todos os 'li' do html
//node list é um array like, portanto tem o mesmo estilo de um array, mas não herda os metódos padrões de um array

console.log(items); //imprime uma node list dos 'li'

const card1 = document.querySelector('[data-product-id="32"]') //um seletor de data-set

console.log(card1);

const paragrafo = document.createElement("p"); //instanciei uma variável e nessa variável criei e armazenei um elemento 'p' usando o createElement
paragrafo.innerHTML = "Descrição"; //depois de criado esse elemento, eu posso acessar atributos dentro dele, modifiquei o innerHTML dele.
card1.appendChild(paragrafo); //adicionei o paragrafo como um filho do card1.

card1.classList.add("super-border"); //aqui acessei a classList do card1 e adicionei +1 classe chamada super-border

const cards = document.querySelectorAll(".card"); //nesse caso criei uma node list do '.card', que me retornou os 2 cards
//const cards = document.getElementsByClassName("card");

console.log(cards);

Array.from(cards).map(item => {
  console.log(item.innerHTML);
});

//esse metodo Array.from(nomeDoArrayLike) converte um array like em Array, portanto consigo acessar o metódo map() dessa forma e outros metódos de arrays.