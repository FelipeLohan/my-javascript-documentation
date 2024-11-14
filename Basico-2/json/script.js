
//Isso é um JSON, ele é instanciado dessa forma, entre chaves e cada variavel é separada por (nome: valor)
//no caso abaixo podemos ver que o nome das variaveis está em String, o que pode ocorrer.
const obj1 = {
  "name": "Computador",
  "price": 50.9,
  "due-date": "2025-04-15"
}

//aqui no obj2 o Json está com as variaveis em String e normal
const obj2 = {
  name: "Computador",
  price: 50.9,
  "due-date": "2025-04-15"
}

//aqui no obj3 podemos ver que instanciamos um Array de Objetos dentro do items, que é algo que podemos fazer dentro de um json.
const obj3 = {
  id: 53,
  date: "2021-10-20",
  items: [
      {
          description: "Celular",
          price: 1499.99,
          quantity: 1
      },
      {
          description: "Mouse",
          price: 100.0,
          quantity: 2
      }
  ],
  client: {
      name: "Maria Red",
      email: "maria@gmail.com",
      active: true
  }
};

//metodos de acesso ao Json
console.log(obj1);
console.log(obj2);
console.log(obj3);

//podemos acessar as variaveis dentro do Json, e ainda as variaveis dentro das variaveis do Json
console.log(obj3.id);
console.log(obj3.client);
console.log(obj3.client.name);

//Muitas vezes a gente pode pegar um JSON do banco de dados ou de alguma aplicação que fornece para gente, e pode vir desse modo, totalmente em String.
//podemos fazer a conversão dessa String pra um JSON, usando o JSON.parse(nomeDaVariavel) e armazenando esse metodo em outra variavel.
//como no caso abaixo
const txt = `{"nome": "Computador", "price": 50.9, "due-date": "2025-04-15"}`;

const obj = JSON.parse(txt);

console.log(txt.name);

console.log(obj.nome);

const text = JSON.stringify(obj); //nesse caso ele ta convertendo os dados JSON em String novamente, provavelmente para ser mandado via protocolo http.