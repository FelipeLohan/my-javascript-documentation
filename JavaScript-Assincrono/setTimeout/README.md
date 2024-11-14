# setTimeout()

` setTimeout ` é um metódo usado para executar uma função, **após um determinado tempo** que o usuário escolher.

## SINTAX

```
setTimeout(() => {
  
}, timeout);
```

## EXPLICAÇÃO

O ` setTimeout() ` aceita uma função ou código, dentro do escopo das aspas, e onde está escrito timeout, é o tempo que vai demorar para ação ocorrer, a unidade do timeout é expressa em milissegundos

### Exemplo:

```
function bomDia(nome) {
  console.log(`Bom dia ${nome}`);
}

console.log("A");

setTimeout(() => {
  bomDia("Lohan");
}, 2000);

console.log("B");
```

neste bloco de código temos uma função `bomDia` que aceita um ` nome ` como argumento, e retorna uma mensagem de bom dia, com o nome dado.

o ` setTimeout() ` somente vai executar essa ação após os 2000ms que foi dado como segundo argumento. 2000ms = 2s

o código ainda vai rodar de forma assincrona, portanto, o ` console.log('b') ` será executado primeiro do que o ` setTimeout() `, somente após 2 segundos, ele será executado.