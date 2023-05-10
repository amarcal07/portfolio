//consultar o seletor
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const cep = document.querySelector("#cep");
  
let nomeOk = false
let emailOk = false

function validarNome(){
    let txtNome = document.querySelector("#txtNome")

    if(nome.value.length < 3){
        txtNome.innerHTML = "Nome muito curto"
        txtNome.style.color = "black"
        nomeOk = false
    }
    else{
        txtNome.innerHTML = "🗸"
        txtNome.style.color = "green"
        nomeOk = true
    }
}

function validarEmail() {
  let txtEmail = document.querySelector("#txtEmail");

  if (email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1) {
    txtEmail.innerHTML = "E-mail inválido";
    txtEmail.style.color = "red";
    emailOk = false;
  } else {
    txtEmail.innerHTML = "✔";
    txtEmail.style.color = "green";
    emailOk = true;
  }
}

function validarEmailRegEx(){
    let regex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/
    let txtEmail = document.querySelector("#txtEmail")

    if(email.value.match(regex)){
        txtEmail.innerHTML = "🗸"
        txtEmail.style.color = "green"
        emailOk = true
    }else{
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "black"
        emailOk = false
    }
} 

function validarMensagem() {
    let txtMensagem = document.querySelector("#txtMensagem");
if (mensagem.value.length >= 100) {
    txtMensagem.innerHTML = "Mensagem muito grande!";
    txtMensagem.style.color = "black";
    mensagemOk = false;
  } else {
    txtMensagem.innerHTML = "✔";
    txtMensagem.style.color = "green";
    mensagemOk = true;
  }
}

//validar email e nome
function enviarFormulario(){
    if(nomeOk === true && emailOk === true)
         alert(nome.value  + ", Obrigada pela sua mensagem!")
    else{
        alert("Por favor, preencha o formulário corretamente!")
        }
}

function consultarCep(){

    //convertendo uma resposta pro formato JSON

    console.log(cep.value)
    const url = `https://viacep.com.br/ws/${cep.value}/json/`
    fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => {
        document.getElementById("endereco").innerHTML =
        jsonBody.logradouro +
        "\n" +
        jsonBody.bairro +
        "\n" +
        jsonBody.localidade +
        "\n" +
        jsonBody.uf 
    })
    //retorna erro se a operação falhar
    .catch((error) => {
        alert("CEP não encontrado!")
    })
}
