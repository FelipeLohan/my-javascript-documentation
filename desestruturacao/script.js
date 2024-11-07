const pessoa = {
    name: 'Felipe',
    age: 18
}

const pessoa2 = {
    name: 'Carlos',
    age: 32
}

const { name, age } = pessoa
console.log(name, age)

const  { name: name1, age: age1 } = pessoa2

console.log(name1, age1)
