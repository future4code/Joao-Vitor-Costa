// Exercícios de interpretação de código

// 1. 10
//    10, 5
   
// 2. 10, 10, 10

// Exercícios de escrita de código 

1.

let nome
let idade

console.log('primeiro elemento', typeof nome)
console.log('segundo elemento', typeof idade)


nome = prompt("Digite seu nome")
idade = prompt("Digite sua idade")

console.log('nome do usuario', nome)
console.log('idade do usuario', idade)

console.log('primeira resposta', typeof nome)
console.log('segunda resposta', typeof idade)

// Até a idade que é um número é considerada string

console.log("Olá", nome, "você tem", idade, "anos")

2. 
   let endereço = prompt("Digite seu endereço")
   let cor = prompt("Digite sua cor preferida")
   let estacao = prompt("Digite sua estação preferida")
   let animal = prompt("Qual seu animal preferido?")
   let relacionamento = prompt("Qual seu estado civil?")

    console.log('endereço',endereço)
    console.log('cor',cor)
    console.log('estação',estacao)
    console.log('animal',animal)
    console.log('relacionamento',relacionamento)

3. 

let comidas = ["arroz", "feijao", "peixe", "salada", "macarrão"]

console.log( comidas)

console.log("Essas são as minhas comidas preferidas: ", comidas)

let comida = prompt("Qual sua comida preferida?")

comidas[1] = comida

console.log('comidas do usuario', comidas)


4. 
    
    let perguntas = ["Você esta usando camisa amarela: ", "Você já bebeu água hoje: ", "Você já jantou hoje: "]
    let respostas = [true, true, false]
    console.log(perguntas[0], respostas[0])
    console.log(perguntas[1], respostas[1])
    console.log(perguntas[2], respostas[2])
