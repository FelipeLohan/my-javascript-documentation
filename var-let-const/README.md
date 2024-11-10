# VAR X LET X CONST

## VAR:
O var era um metódo mais antigo do EcmaScript usado para instanciar variáveis, sendo que ele tem alguns problemas.

* O var vaza no escopo de funções, portanto se você instanciar ele dentro de uma função, ele ainda fica acessivel, fora dela, imagine você fazer um loop for, e a variavel 'var i' vazar do escopo.

* O var tem problema de hoisting, portanto pode dar interferência no seu código, e variáveis podem dar undefined.

## LET:
Let atualmente é o método mais moderno possivel para váriaveis, ela foi criada com o objetivo de consertar os erros que o var trazia.

* Ela não vaza mais no escopo de funções, portanto pode usar sem medo..

* O let é uma variável, portanto ela é mutável.

* Consertou os problemas de Hoisting.

## CONST:
Não sei se é certo chamar const de váriavel, pois ele é certamente o contrário disso. Usamos const para declarar uma constante, ele também não vaza em escopo de função, e é o método mais usado e recomendado de instanciar uma constante. Ela também só pode ser instanciada com um valor já definido, pois é imutável.

* Não vaza escopo de função.
* É usado para instanciar constantes imutáveis(uma vez instanciada, não pode alterar seu valor)
* É obrigatório ter um valor, para ser instanciada.


