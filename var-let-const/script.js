const x = 10;

if(x > 0){
  var a = 100
  let b = 200
  const c = 300
  console.log("Imprimindo dentro do IF:")
    console.log(a)
    console.log(b)
    console.log(c)
}

console.log("Imprimindo fora do IF:")
  console.log(a)
  console.log(b)
  console.log(c)

  /* 
  
  Nessa demonstração, vemos que o var, conseguiu vazar do escopo dentro da estrutura de controle IF. var hoje em dia não é mais utilizado e foi substituido pela variavel let. A diferença entre var e let, é que let não vaza no escopo, e a diferença entre um let e um const, é que o const não pode ser declarado sem valor e quando declarado, não pode mudar o valor dele. Ele é uma váriavel imutável.

  var: vaza escopo, é usado para declarar variável.
  let: uma solução pro var, consertando o fato dela vazar o escopo, usada também para declarar variável.
  const: não pode ser declarada com valor undefined, e o valor dela, depois que declarado é imutável.

  */