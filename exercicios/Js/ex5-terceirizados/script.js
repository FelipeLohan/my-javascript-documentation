const dados = [
  {
    nome: "Maria Silva",
    valorHora: 80.0,
    horasTrabalhadas: 20,
    terceirizado: true,
  },
  {
    nome: "João Rocha",
    valorHora: 60.0,
    horasTrabalhadas: 25,
    terceirizado: false,
  },
  {
    nome: "Tiago James",
    valorHora: 80.0,
    horasTrabalhadas: 10,
    terceirizado: true,
  },
  {
    nome: "Ana Carla",
    valorHora: 70.0,
    horasTrabalhadas: 40,
    terceirizado: true,
  },
  {
    nome: "Pedro Paulo",
    valorHora: 50.0,
    horasTrabalhadas: 25,
    terceirizado: false,
  },
];


let nomesTerceirizados = []
function funcionariosTerceirizados(){
  dados.forEach(e => {
    if(e.terceirizado){
      nomesTerceirizados.push(e.nome)
    }
  });
  return console.log(nomesTerceirizados)
}

funcionariosTerceirizados()


function custoTotal(){
  let custoCalc = 0
  dados.forEach(e => {
    if(e.terceirizado){
      let custo = e.horasTrabalhadas * e.valorHora
      custoCalc += custo
    }
  });
  return console.log(`CUSTO TOTAL: R$${custoCalc}`)
}

custoTotal()


