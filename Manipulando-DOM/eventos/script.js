const inputName = document.forms.cadastro.name; //Consigo acessar um forms dessa forma, usando oi document.forms os outros atributos após o . são o name='' de cada item dentro do forms

inputName.addEventListener("keyup", handleInputNameKeyup); //o addEventListener('evento', funcao) é um metódo que adiciona um observador de evento ao código. Nesse caso eu coloquei o "keyup", toda vez que estou interagindo com o evento, e digito algo, a função handleInputNameKeyUp é ativada.

const inputEmail = document.forms.cadastro.email;

inputEmail.addEventListener("change", handleInputEmailChange); //o "change" é muito usado também, usado para validações assincronas e outras utilidades, toda vez que estamos alterando um formulario, e saimos do campo de texto, ele ativa a função.

const btnSubmit = document.querySelector('[type="submit"]');

btnSubmit.addEventListener("click", handleBtnSubmitClick); //O "click" é muito usado em botões, toda vez que damos o click em um botão, ele ativa a função.

function handleInputNameKeyup(event) { //Toda função dentro de addEventListener pode receber um parâmetro que é o event. event.target aponta pro elemento selecionado, os . seguidos, são as propriedades que quero acesar.
  console.log(event.target.value);
}

function handleInputEmailChange(event) {
  if (validateEmail(event.target.value)) {
    event.target.classList.remove("input-error");
  } else {
    event.target.classList.add("input-error");
  }
}

function handleBtnSubmitClick(event) {
  event.preventDefault(); //preventDefault() usado para tirar o acontecimento esperado do evento. No caso de um botão, ele normalmente tem o evento de direcionar a gente para outra página, o preventDefault() tira isso.
  console.log(`Dados: ${inputName.value}, ${inputEmail.value}`);
}

//Lógica de validação de email.
// https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}