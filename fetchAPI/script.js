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