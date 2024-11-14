# ASYNC / AWAIT

## Async:

A palavra-chave `async` é usada para declarar uma função assíncrona. Isso significa que essa função sempre retornará uma `Promise`, mesmo que você não use `return` explicitamente. O `async` permite que você use `await` dentro da função para lidar com operações assíncronas.

## Await:

A palavra-chave `await` só pode ser usada dentro de funções `async`. Ela pausa a execução da função até que a `Promise` do lado direito de `await` seja resolvida, permitindo que você escreva código assíncrono de forma síncrona.

## Sintax

```javascript
async function esperarPorAlgo() {
    console.log("Esperando...");
    let resultado = await new Promise(resolve => setTimeout(() => resolve("Pronto!"), 2000));
    console.log(resultado); // Saída: "Pronto!" (após 2 segundos)
}

esperarPorAlgo();
```

# Como Async e Await funcionam juntos?

O objetivo de `async` e `await` é simplificar o tratamento de código assíncrono, evitando o uso de múltiplas .`then()` aninhadas.

Vou mostrar o mesmo exemplo da aula passada, sobre fetch API e veremos a diferença entre um código e o outro.

```javascript
const cep = '01001000'
const url = `https://viacep.com.br/ws/${cep}/json/`

async function fetchJson(url){ //aqui eu instanciei a função, usando o async, dizendo pro js que isso é uma função assincrona
  const fetchJson = await fetch(url) //aqui fiz o fetch() da URL, já que é uma função assicrona, tenho que colocar o await
  const jsonPromise = await fetchJson.json() //mesma coisa com o json(), coloquei await, pois tenho que esperar pegar o then, dele e armazenar em jsonPromise
  const estadoJson = jsonPromise.uf //aqui o jsonPromise já estava pronto, contendo o corpo do json, armazenei jsonPromise.uf , dentro da variável estadoJson
  console.log(estadoJson) //fiz a chamada
}

fetchJson(url)

//conclusão: O async e await é uma forma 10x mais limpa de trabalhar com Promises, principalmente em casos que não é tão necessário o tratamento de catch.
```

1. Diferente do outro metódo, colocamos o `async` seguido de uma função, passarei a `URL` como parâmetro de argumento dela.

2. Depois podemos instanciar uma variável para guardar o resultado `fulfilled` do `fetch`.

3. No valor da variável colocamos a palavra chave `await` pois ela só dará um retorno quando a `Promise` der algum retorno, `rejected` ou `fulfilled` (o `await` só funciona em funções assincronas, por isso temos que colocar dentro de uma função com o `async` de prefixo.)

**Detalhe importante**

Podemos perceber que não precisei fazer `.then()`, pois o resultado do `then()` já é armazenado dentro da variável.

3. fiz o mesmo com o `json()`, colocando o await como prefixo, pois também gera uma `Promise`

4. e pronto, consegui acessar o `json` e consequentemente a propriedade `uf`.