# FETCH API

A Fetch API é uma maneira moderna de fazer requisições HTTP em JavaScript para buscar dados de servidores ou enviar dados para eles. Usada com frequência para interagir com APIs (interfaces que permitem a comunicação entre sistemas)

##  Estrutura básica de um fetch:

O `fetch` é uma função embutida no JavaScript que permite fazer uma requisição `HTTP`. Ele recebe uma `URL` como argumento e retorna uma `Promise` (uma promessa de que o código vai terminar futuramente). As `Promises` permitem que você trabalhe com operações assíncronas (que não travam o fluxo do programa enquanto esperam o servidor responder).

```javascript
const resultadoDoFetch = fetch(URL)
```

### Fetch API na prática, com exemplo real

Irei demonstrar um código real, onde vamos usar uma API, onde enviamos um CEP, e ela retorna para gente todas as informações sobre aquele CEP, da base de dados do correios e IBGE.

```javascript
let cep = '01001000' //esse é CEP que quero testar
const URL = `https://viacep.com.br/ws/${cep}/json/` //Essa é a URL do site onde farei o fetch, passei de parâmetro a variável cep

const fetchResult = fetch(URL) //fiz o fetch, passando de parãmetro da URL, e guardei dentro do fetchResult, isso me retornou uma promise.
console.log(fetchResult)

fetchResult //Acessei a promise usando then, pois ela foi fulfilled.
  .then(result => { //fiz a arrow function pra acessar o resultado da Promise, apelidei ela no argumento de result
    const jsonResult = result.json() //usei essa função, que tá no prototype do result, onde posso pegar o Json direto da API
    console.log(jsonResult) //o result.json() me retornou outra promise, a qual está fulfilled
      jsonResult
        .then(result => { //acessei ela usando then, vi que era um objeto json, portanto instanciei uma variável estado e guardei o uf do json dentro dela
          console.log(result)
          let estado = result.uf
            console.log(estado) //consegue pegar o estado daquele cep.
        })
  })
```

Vamos entender trecho a trecho desse código, e lhe garanto que você vai sair daqui, com o conhecimento necessário para fazer um fetch e começar a se aventurar no mundo das APIs.

1. Instanciei uma variável CEP, com um CEP existente na vida real.

2. O CEP foi passado dentro da URL, da minha API (A API está disponivel na internet, se chama ViaCep, https://viacep.com.br/)

3. Depois disso eu instanciei uma variável e dentro dela o valor será o resultado do meu `fetch`, passando de parâmetro a `URL` da `API`.

**UMA PARTE IMPORTANTE AGORA!**

4. Esse `fetch`me retornou uma `Promise`, que é o tempo necessário da `API` chegar até o servidor, e ele enviar devolta uma resposta ao `cliente`, portanto usaremos o `then` para acessar o resultado da `Promise` caso não tenha erros.

5. armazenei o resultado dessa `Promise` dentro de uma variável chamada `jsonResult` e a palavra chave do `then` chamada `result` chamei o metódo `.json()`, que me retorna o `json` daquela `Promise`.

**Mais um obstaculo**

6. O metódo `json()` me retornou outra `Promise`, então terei que usar outro `then` dentro desse `Promise` acessando o `jsonResult`, depois disso, consigo acessar o `json` interno, e consegui acessar as propriedades dentro do `json`.

7. consigo acessar o elemento `uf`e armazenar dentro de uma variável.

**Parabéns, se você seguiu os passos junto comigo, ou tentou no seu código também, você acabou de consumir seu primeiro API em JavaScript, enfim, estamos chegando ao fim do tutorial, me sinto feliz que você leu até aqui!**

Se você achou dificil, no capitulo sobre `async` e `await`, isso ficará 10x mais fácil e intuitivo, simplificando o código e aplicando o conceito de `sintax sugar`.


