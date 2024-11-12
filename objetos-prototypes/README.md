# OBJETOS E PROTOTYPES

## OBJETOS:

Objetos em JavaScript é um tipo de estrutura de dados, aonde podemos armazenar qualquer tipo de dado dentro de uma única variável, assim organizando o código, e centralizando seus dados de forma relacionada.

Os Objetos na maioria dos casos tentam representar coisas reais. Um exemplo pode ser um objeto pessoa, uma pessoa tem nome, idade, sexo.

```
const pessoa = {
  nome: 'Fulano',
  idade: 80,
  sexo 'M'
}
```

esse também é o modo de instanciar um objeto, ele é colocado entre chaves e cada atributo dentro dele é separada por virgulas.

## PROTOTYPE:

Uma pessoa não somente tem atributos.. ela também tem ações, portanto, dentro de um objeto temos a parte do Prototype, onde ficam armazenados todos os metódos, então vamos colocar alguns metódos que uma pessoa tem, exemplos: ` andar() `, ` sentar() `, ` bocejar() `

```
pessoa.prototype.andar = function(){
  console.log('Andando')
}

pessoa.prototype.sentar = function(){
  console.log('Sentando (Lá ele kakaka)')
}

pessoa.prototype.bocejar = function(){
  console.log('Bocejando')
}

```

então como podemos ver, o prototype existe dentro de pessoa, pois estamos acessando o atributo dentro dele. assim adicionamos funções prototype do nosso objeto.

## FUNÇÃO CONSTRUTORA

E se eu ainda não tiver informações de pessoa? mas quero botar futuramente.. Podemos fazer uma função construtora! ele é uma função que cria objetos e aceita como argumento os atributos.

```
const pessoa = function(nome, idade, sexo){
  this.nome = nome
  this.idade = idade
  this.sexo = sexo
}
```

A palavra chave ` this ` é uma referência ao próprio objeto, então eu estou falando que o ` nome ` do argumento = ao ` nome ` armazenado no objeto.

agora temos a capacidade de instanciar um novo objeto, sem ter que repetir toda a sintax dele toda vez. Vamos botar a mão na massa!

## INSTANCIANDO OBJETOS:

```
const pessoa = function(nome, idade, sexo){
  this.nome = nome
  this.idade = idade
  this.sexo = sexo
}

 //--------------METODOS----------------
pessoa.prototype.andar = function(){
  console.log('Andando')
}

pessoa.prototype.sentar = function(){
  console.log('Sentando (Lá ele kakaka)')
}

pessoa.prototype.bocejar = function(){
  console.log('Bocejando')
}

//---------INSTANCIANDO OBJETOS---------

const pessoa1 = new pessoa('Lohan', 18, 'M')

const pessoa2 = new pessoa('Carlos', 20, 'M')

const pessoa3 = new pessoa('Limas', 69, 'F')

//----------USANDO METÓDOS-------------

pessoa1.andar() SAIDA: andando

pessoa3.bocejar() //SAIDA: bocejando

pessoa2.sentar() //SAIDA: sentando
```

Você acabou de aprender a como instanciar, criar, e entender objetos!

### OBS:

É de extrema importância e boa prática que os metódos sejam colocados dentro do prototype e não na função construtora.. pois os metódos dentro do prototype são compartilhados entre si, portanto somente existe 1 metódo para vários objetos, caso ele seja colocado dentro da função construtora, a cada instancia de objeto, será gerado um novo metódo na memória, isso pode gerar uso excessivo da memória e tirar desempenho da aplicação!