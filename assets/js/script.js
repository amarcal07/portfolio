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
        txtNome.style.color = "red"
        nomeOk = false
    }
    else{
        txtNome.innerHTML = "🗸"
        txtNome.style.color = "green"
        nomeOk = true
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
        txtEmail.style.color = "red"
        emailOk = false
    }
} 

//validar email e nome
function enviarFormulario(){
    if(nomeOk === true && emailOk === true)
         alert(nome.value  + ", Obrigada pela sua mensagem")
    else{
        alert("Por favor, preencha o formulário corretamente!")
        }
}

function consultarCep(){

    const url = `https://viacep.com.br/ws/${cep.value}/json/`
    //convertendo uma resposta pro formato JSON
    fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => {
        document.getElementById("dados").innerHTML =
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