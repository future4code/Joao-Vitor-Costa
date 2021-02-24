// Exercícios de interpretação de código

// 1.

// a. false

// b. false

// c. true

// e.  boolean

// 2.

// a. undefined

// b. null

// c. 11

// d. 3

// e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// f. 9

// Exercícios de escrita de código

// 1. 

let suaIdade = Number(prompt("Qual a sua idade?"))
let idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo?"))

let resultado = suaIdade > idadeAmigo

console.log("Sua idade é maior do que a do seu melhor amigo?", resultado)

suaIdade -= idadeAmigo

console.log(suaIdade)

// 2.

let numero = Number(prompt("Insira um número par"))

numero %= 2

console.log(numero)

// quando um número par é dividido por 2 ele gera um resultado exato, sem resto, já quando um número ímpar é inserido, este gera um resto de 1.

// 3.

let listaDeTarefas = []

let pergunta1 = prompt("Digite 3 de seus afazeres do dia")
let pergunta2 = prompt("Digite 3 de seus afazeres do dia")
let pergunta3 = prompt("Digite 3 de seus afazeres do dia")

listaDeTarefas.push(pergunta1)
listaDeTarefas.push(pergunta2)
listaDeTarefas.push(pergunta3)

console.log(listaDeTarefas)

let retirar = prompt("Quando você terminar alguma atividade retire ela do seu planejamento (0, 1 ou 2)")

listaDeTarefas.splice(retirar, 1)

console.log(listaDeTarefas)

// 4. 

let nome = prompt("Digite seu nome")
let email = prompt("Digite seu e-mail")

console.log("O e-mail " + email + " foi cadastrado com sucesso. Seja bem-vinda(o), " + nome)


// Desafios 

// 1.

let valorF = 77

let resultado2 = (valorF - 32)* 5/9 + 273.15 + "K"

console.log(resultado2)

let valorC = 80

let result = (valorC)*9/5 + 32 + "°F"

console.log(result)

let calculoC = 30 

let calculo1 = (calculoC)*9/5 + 32 + "°F"

console.log(calculo1)

let calculoF = 86

let calculo2 = (calculoF - 32)* 5/9 + 273.15 + "K"

console.log(calculo2)

let numero2 = Number(prompt("Qual deve ser o valor convertido de °C para °F e K"))

let numeroCalculo = (numero2)*9/5 + 32 + "°F"
let numeroCalculo2 = numero2 + 273.15 + "K"  

console.log(numeroCalculo, numeroCalculo2)

// 2.

// a.

let gasto1 = 280 * 0.05

console.log(gasto1)

// b.

let gastoDesconto = 280 * 0.05 * 0.85

console.log(gastoDesconto)

// 3.

// a.

let libra = 20

let libraCalculo = "20lb equivalem a " + libra/2.205 + "kg"

console.log(libraCalculo)

// b.

let onca = 10.5

let oncaCalculo = "10.5oz equivalem a " + onca/35.274 + "kg"

console.log(oncaCalculo)

// c.

let milha = 100

let milhaCalculo = "100mi equivalem a " + milha*1609 + "m"

console.log(milhaCalculo)

// d.

let ft = 50

let ftCalculo = "50ft equivalem a " +  ft/3.281 + "m"

console.log(ftCalculo)

// e.

let gal = 103.56

let galCalculo = "103.56gal equivalem a " +  gal*3.785 + "L"

console.log(galCalculo)

// f.

let xic = 450

let xicCalculo = "450xic equivalem a " +  xic/6 + "L"

console.log(xicCalculo)

// e.   

 let libraUsuario = Number(prompt("Conversão de lb para kg"))

 let libraCalculoUsuario = libraUsuario + "lb equivalem a " + libraUsuario/2.205 + "kg"

 console.log(libraCalculoUsuario)