# Promises

Uma `Promise` é um objeto que representa a eventual conclusão ou falha de uma operação assíncrona. Ela possui três estados principais.

1. **Pending (pendente)** - estado inicial, esperando o retorno da Promise

2. **Fulfilled (resolvida)** - a operação foi concluida com sucesso e a promise está com o valor disponivel

3. **Rejected (rejeitada)** - operação falhou, e temos um erro

## Como criar um Promise?

Podemos criar um `Promise` apartir de uma função construtora dele, a função recebe 2 parâmetros: ` resolve ` e ` reject `

```javascript
const minhaPromise = new Promise(resolve, reject) => {
  let sucesso = true

  if(sucesso){
    resolve('Operação realizada com sucesso')
  } else {
    reject('Operação falhou')
  }
}
```

No bloco de código acima podemos ver que instanciamos um objeto `Promise`, que na verdade é uma função, recebeu 2 argumentos, que é o `resolve` e o `reject`, dentro da função instanciei uma variável chamada `sucesso` e setei o valor dela como `true`.

Fiz um `if`, a condição do `if` foi que caso sucesso fosse `true`, resolve retornaria `('Operação realizada com sucesso')`, caso contrário `reject` retornaria `('Operação falhou')`.

Já que foi `sucesso = true` , foi retornado o `resolve` , portanto minha `Promise` está `Fulfilled` e o valor dentro dela, é o retorno de `resolve`.

## Utilizando then , catch e finally

1. **then -** executa uma função, quando a Promise é resolvida com sucesso.

2. **catch -** executa uma função quando a promise é rejeitada

3. **finally -** executa uma função sempre, independente do resultado

```javascript
minhaPromise
    .then(resultado => {
        console.log(resultado); // "A operação foi bem-sucedida!"
    })
    .catch(erro => {
        console.error(erro); // "A operação falhou."
    })
    .finally(() => {
        console.log("Processo finalizado.");
    });

```

no `then` , a variável `resultado`, passada de argumento na função, será o valor de `resolve`.
Mesma coisa pro `catch` , sendo que o retorno virá de `reject`.
