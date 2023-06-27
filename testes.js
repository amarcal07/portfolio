console.log("Hello World!")


//criando váriaveis (pode mudar o valor)
let nome = "Andresa"

//criando váriaveis (não pode mudar o valor)
const sobrenome = "Marçal"

console.log(nome + " " + sobrenome)

nome = "Douglas"
console.log(nome + " " + sobrenome)

let numero1 = 30
let numero2 = 10
console.log(numero1 + numero2)


//funcão no JS
function dividir(num1, num2){
    return num1 / num2
}
console.log(dividir (10,5))

//funcão com IF
function dividir(num1, num2){
    if(num2 === 0){
    return "Não é possível dividir por zero!"
}
    return num1 / num2
}
let resultado = dividir(10,0)
console.log(resultado)

//soma no const (não consegue alterar o valor)
const soma = (num1, num2) => num1 + num2
console.log(soma(20,30))

//tabuada com FOR e resultado com `$` no JS
function tabuada(num1){
    for(let contador = 1; contador <=10; contador++){
            console.log(`${num1} x ${contador} = ${num1 * contador}`)
    }      
}
tabuada(5)

//vetor de strings no JS
const nomes = ["Andresa", "Douglas", "Romeu"]
    nomes.forEach(nome => console.log(nome))