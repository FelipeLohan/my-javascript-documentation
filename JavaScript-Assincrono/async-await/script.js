//O async e await, é uma sintax sugar, para o .then .catch, pois ele já faz esse tratamento automaticamente armazenando na variável o then.


const cep = '01001000'
const url = `https://viacep.com.br/ws/${cep}/json/`

async function fetchJson(url){ //aqui eu isntanciei a função, usando o async, dizendo pro js que isso é uma função assincrona
  const fetchJson = await fetch(url) //aqui fiz o fetch() da URL, já que é uma função assicrona, tenho que colocar o await
  const jsonPromise = await fetchJson.json() //mesma coisa com o json(), coloquei await, pois tenho que esperar pegar o then, dele e armazenar em jsonPromise
  const estadoJson = jsonPromise.uf //aqui o jsonPromise já estava pronto, contendo o corpo do json, armazenei jsonPromise.uf , dentro da variável estadoJson
  console.log(estadoJson) //fiz a chamada
}

fetchJson(url)

//conclusão: O async e await é uma forma 10x mais limpa de trabalhar com Promises, principalmente em casos que não é tão necessário o tratamento de catch.