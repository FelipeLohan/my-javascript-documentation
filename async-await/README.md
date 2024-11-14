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

(MOSTRAR CASO REAL, QUANDO CHEGAR EM CASA, COM O EXEMPLO DE ASYNC E AWAIT NO COMPUTADOR)