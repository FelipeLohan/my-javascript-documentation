# Seleção de elementos no DOM

## Introdução

A maior fama do javascript é o seu poder e facilidade de conseguir capturar e manipular elementos do html de maneira fácil e rápida. Hoje aprenderemos a manipular o código HTML pelo JavaScript.

## Document Object Model (DOM):

O DOM é o metódo que acessamos o código HTML do site. Dentro do navegador temos 2 objetos muito complexos e completos, o `Window` e `Document`, elas dão acesso e controle a todos as outras propriedades e metódos existentes dentro de um código HTML.

- `Window`: Dá acesso a janela do navegador como um todo.
- `Document`: Através do `window` da acesso ao html da página.

**OBS:** Depois abra uma página e o console dela, e consulte o objeto window e window.document, para ver o grande número de propriedades e metódos que ela tem. (Te juro é gigante)

## Como selecionar elementos do HTML?

Podemos selecionar usando alguns metódos padrões do `document`, `querySelector()` é o mais usado, a gente consegue selecionar usando a notação do css, também o `getElementByClass()` e
`getElementById()` que pega o elemento por classe e id.

Darei um exemplo:

```html
<!-- CÓDIGO HTML -->
<body>
    <h1>Minha página</h1>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
    <div class="card" data-product-id="32">
        <p>Card 1</p>
    </div>
    <div class="card" data-product-id="45">
        <p>Card 2</p>
    </div>
    <script src="./script.js"></script>
</body>
```

```javascript
//Código JavaScript
let item = document.querySelector("li");
console.log(item) //Saida: <li><li>
```

Isso faz uma referência ai primeiro `li` do html.

