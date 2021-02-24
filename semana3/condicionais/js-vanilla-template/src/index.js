// Exercícios de interpretação de código

//1.

// O código divide o número por 2 e confere se ele tem resto, "Passou no teste" é a mensagem impressa quando o número colocado é par e "Não passou no
// teste" é para números ímpares

// 2.

// a. O código serve para mostrar ao consumidor o preço da fruta que ele quer comprar

// b. O preço da fruta maçã é R$ 2.25

// c. O preço da fruta maçã é R$ 5

// 3.

// a. A primeira linha declara a variavel numero

// b. Esse número passou no teste. Se o número fosse -10 nao haveria mensagem.

// c. Sim, uma vez que a var mensagem está sendo declarada dentro de um escopo filho, que não partilha suas informações com o escopo pai

// Exercícios de escrita de código

// 4.

// let idade = Number(prompt("Qual sua idade?"))

//     if(idade >= 18) {
//         console.log("Você pode dirigir!")
//     } else {
//         console.log("Você não pode dirigir!")
//     }
    
// 5.

// let horario = prompt("Qual o turno do dia que você estuda, sendo M (matutino) ou V (Vespertino) ou N (Noturno)? ")

//     if(horario === "M") {
//         console.log("Bom dia!")
//     }else if(horario === "V") {
//         console.log("Boa tarde!")
//     }else if(horario === "N") {
//         console.log("Boa noite!")
//     }

// 6.

// let horario = prompt("Qual o turno do dia que você estuda, sendo M (matutino) ou V (Vespertino) ou N (Noturno)? ")

//     switch(horario) {
//      case "M":
//      console.log("Bom dia!")
//      break
//      case "V":
//      console.log("Boa tarde!")
//      break
//      case "N":
//      console.log("Boa noite!")
//      break
//     }

// 7.

// let genero = prompt("Qual o gênero do filme que você pretende ver?")
// let preco = Number(prompt("Qual o preço do ingreço desse filme?"))

//     if(genero === 'fantasia' && preco <= 15) {
//         console.log("Bom filme!")
//     } else {
//         console.log("Escolha outro filme :(")
//     }

// Desafios

// 1.

// let genero = prompt("Qual o gênero do filme que você pretende ver?")
// let preco = Number(prompt("Qual o preço do ingreço desse filme?"))

//     if(genero === 'fantasia' && preco <= 15) {
//         let comida = prompt("Qual snack você vai comprar")
//         console.log("Bom filme! ...com", comida)
//     } else {
//           console.log("Escolha outro filme :(")
//     }

// 2.

let nome = prompt("Escreva seu nome completo")
let tipoDeJogo = prompt("Qual o tipo de jogo você deseja assistir")
let etapa = prompt("Qual a etapa do jogo que você deseja assistir")
let categoria = prompt("Qual a categoria do jogo que você deseja assistir?")
let quantidade = Number(prompt("Quantos ingressos você deseja comprar?"))
let preco
let total

if (etapa === "SF" && categoria === "1") {
    preco = 1320
    total = preco*quantidade 
         if (tipoDeJogo === "IN") {
             let dollar
             let dollarTotal
             dollar = preco*4,1
             dollarTotal = dollar*quantidade
             console.log ("---Dados da compra--- ")
             console.log (" Nome do cliente: ", nome)
             console.log (" Tipo de jogo: ", tipoDeJogo)
             console.log (" Etapa do jogo: ", etapa)
             console.log (" Categoria: ", categoria)
             console.log (" Quantidade de ingressos: ", quantidade)
             console.log ("---Valores---")
             console.log ("Valor do ingresso: US$ ", dollar)
             console.log ("Valor total: US$ ",  dollarTotal)

         }
            if (tipoDeJogo === "DO") {
            console.log ("---Dados da compra--- ")
            console.log (" Nome do cliente: ", nome)
            console.log (" Tipo de jogo: ", tipoDeJogo)
            console.log (" Etapa do jogo: ", etapa)
            console.log (" Categoria: ", categoria)
            console.log (" Quantidade de ingressos: ", quantidade)
            console.log ("---Valores---")
            console.log ("Valor do ingresso: R$ ", preco)
            console.log ("Valor total: R$ ",  total)
         }
}

else if (etapa === "DT" && categoria === "1") {
    preco = 660
    total = preco*quantidade 
             if (tipoDeJogo === "IN") {
             let dollar
             let dollarTotal
             dollar = preco*4,1
             dollarTotal = dollar*quantidade
             console.log ("---Dados da compra--- ")
             console.log (" Nome do cliente: ", nome)
             console.log (" Tipo de jogo: ", tipoDeJogo)
             console.log (" Etapa do jogo: ", etapa)
             console.log (" Categoria: ", categoria)
             console.log (" Quantidade de ingressos: ", quantidade)
             console.log ("---Valores---")
             console.log ("Valor do ingresso: US$ ", dollar)
             console.log ("Valor total: US$ ",  dollarTotal)

         }
         else if (tipoDeJogo === "DO") {
            console.log ("---Dados da compra--- ")
            console.log (" Nome do cliente: ", nome)
            console.log (" Tipo de jogo: ", tipoDeJogo)
            console.log (" Etapa do jogo: ", etapa)
            console.log (" Categoria: ", categoria)
            console.log (" Quantidade de ingressos: ", quantidade)
            console.log ("---Valores---")
            console.log ("Valor do ingresso: R$ ", preco)
            console.log ("Valor total: R$ ",  total)
         }
}

else if (etapa === "FI" && categoria === "1") {
    preco = 1980
    total = preco*quantidade 
         if (tipoDeJogo === "IN") {
             let dollar
             let dollarTotal
             dollar = preco*4,1
             dollarTotal = dollar*quantidade
             console.log ("---Dados da compra--- ")
             console.log (" Nome do cliente: ", nome)
             console.log (" Tipo de jogo: ", tipoDeJogo)
             console.log (" Etapa do jogo: ", etapa)
             console.log (" Categoria: ", categoria)
             console.log (" Quantidade de ingressos: ", quantidade)
             console.log ("---Valores---")
             console.log ("Valor do ingresso: US$ ", dollar)
             console.log ("Valor total: US$ ",  dollarTotal)

         }
         if (tipoDeJogo === "DO") {
            console.log ("---Dados da compra--- ")
            console.log (" Nome do cliente: ", nome)
            console.log (" Tipo de jogo: ", tipoDeJogo)
            console.log (" Etapa do jogo: ", etapa)
            console.log (" Categoria: ", categoria)
            console.log (" Quantidade de ingressos: ", quantidade)
            console.log ("---Valores---")
            console.log ("Valor do ingresso: R$ ", preco)
            console.log ("Valor total: R$ ",  total)
         }
}

else if (etapa === "SF" && categoria === "2") {
    preco = 880
    total = preco*quantidade 
         if (tipoDeJogo === "IN") {
             let dollar
             let dollarTotal
             dollar = preco*4,1
             dollarTotal = dollar*quantidade
             console.log ("---Dados da compra--- ")
             console.log (" Nome do cliente: ", nome)
             console.log (" Tipo de jogo: ", tipoDeJogo)
             console.log (" Etapa do jogo: ", etapa)
             console.log (" Categoria: ", categoria)
             console.log (" Quantidade de ingressos: ", quantidade)
             console.log ("---Valores---")
             console.log ("Valor do ingresso: US$ ", dollar)
             console.log ("Valor total: US$ ",  dollarTotal)

         }
         if (tipoDeJogo === "DO") {
            console.log ("---Dados da compra--- ")
            console.log (" Nome do cliente: ", nome)
            console.log (" Tipo de jogo: ", tipoDeJogo)
            console.log (" Etapa do jogo: ", etapa)
            console.log (" Categoria: ", categoria)
            console.log (" Quantidade de ingressos: ", quantidade)
            console.log ("---Valores---")
            console.log ("Valor do ingresso: R$ ", preco)
            console.log ("Valor total: R$ ",  total)
         }
}

else if (etapa === "DT" && categoria === "2") {
    preco = 440
    total = preco*quantidade 
         if (tipoDeJogo === "IN") {
             let dollar
             let dollarTotal
             dollar = preco*4,1
             dollarTotal = dollar*quantidade
             console.log ("---Dados da compra--- ")
             console.log (" Nome do cliente: ", nome)
             console.log (" Tipo de jogo: ", tipoDeJogo)
             console.log (" Etapa do jogo: ", etapa)
             console.log (" Categoria: ", categoria)
             console.log (" Quantidade de ingressos: ", quantidade)
             console.log ("---Valores---")
             console.log ("Valor do ingresso: US$ ", dollar)
             console.log ("Valor total: US$ ",  dollarTotal)

         }
         if (tipoDeJogo === "DO") {
            console.log ("---Dados da compra--- ")
            console.log (" Nome do cliente: ", nome)
            console.log (" Tipo de jogo: ", tipoDeJogo)
            console.log (" Etapa do jogo: ", etapa)
            console.log (" Categoria: ", categoria)
            console.log (" Quantidade de ingressos: ", quantidade)
            console.log ("---Valores---")
            console.log ("Valor do ingresso: R$ ", preco)
            console.log ("Valor total: R$ ",  total)
         }
}

else if (etapa === "FI" && categoria === "2") {
    preco = 1320
    total = preco*quantidade 
         if (tipoDeJogo === "IN") {
             let dollar
             let dollarTotal
             dollar = preco*4,1
             dollarTotal = dollar*quantidade
             console.log ("---Dados da compra--- ")
             console.log (" Nome do cliente: ", nome)
             console.log (" Tipo de jogo: ", tipoDeJogo)
             console.log (" Etapa do jogo: ", etapa)
             console.log (" Categoria: ", categoria)
             console.log (" Quantidade de ingressos: ", quantidade)
             console.log ("---Valores---")
             console.log ("Valor do ingresso: US$ ", dollar)
             console.log ("Valor total: US$ ",  dollarTotal)

         }
         if (tipoDeJogo === "DO") {
            console.log ("---Dados da compra--- ")
            console.log (" Nome do cliente: ", nome)
            console.log (" Tipo de jogo: ", tipoDeJogo)
            console.log (" Etapa do jogo: ", etapa)
            console.log (" Categoria: ", categoria)
            console.log (" Quantidade de ingressos: ", quantidade)
            console.log ("---Valores---")
            console.log ("Valor do ingresso: R$ ", preco)
            console.log ("Valor total: R$ ",  total)
         }
}

else if (etapa === "SF" && categoria === "3") {
    preco = 550
    total = preco*quantidade 
         if (tipoDeJogo === "IN") {
             let dollar
             let dollarTotal
             dollar = preco*4,1
             dollarTotal = dollar*quantidade
             console.log ("---Dados da compra--- ")
             console.log (" Nome do cliente: ", nome)
             console.log (" Tipo de jogo: ", tipoDeJogo)
             console.log (" Etapa do jogo: ", etapa)
             console.log (" Categoria: ", categoria)
             console.log (" Quantidade de ingressos: ", quantidade)
             console.log ("---Valores---")
             console.log ("Valor do ingresso: US$ ", dollar)
             console.log ("Valor total: US$ ",  dollarTotal)

         }
         if (tipoDeJogo === "DO") {
            console.log ("---Dados da compra--- ")
            console.log (" Nome do cliente: ", nome)
            console.log (" Tipo de jogo: ", tipoDeJogo)
            console.log (" Etapa do jogo: ", etapa)
            console.log (" Categoria: ", categoria)
            console.log (" Quantidade de ingressos: ", quantidade)
            console.log ("---Valores---")
            console.log ("Valor do ingresso: R$ ", preco)
            console.log ("Valor total: R$ ",  total)
         }
}

else if (etapa === "DT" && categoria === "3") {
    preco = 330
    total = preco*quantidade 
         if (tipoDeJogo === "IN") {
             let dollar
             let dollarTotal
             dollar = preco*4,1
             dollarTotal = dollar*quantidade
             console.log ("---Dados da compra--- ")
             console.log (" Nome do cliente: ", nome)
             console.log (" Tipo de jogo: ", tipoDeJogo)
             console.log (" Etapa do jogo: ", etapa)
             console.log (" Categoria: ", categoria)
             console.log (" Quantidade de ingressos: ", quantidade)
             console.log ("---Valores---")
             console.log ("Valor do ingresso: US$ ", dollar)
             console.log ("Valor total: US$ ",  dollarTotal)

         }
         if (tipoDeJogo === "DO") {
            console.log ("---Dados da compra--- ")
            console.log (" Nome do cliente: ", nome)
            console.log (" Tipo de jogo: ", tipoDeJogo)
            console.log (" Etapa do jogo: ", etapa)
            console.log (" Categoria: ", categoria)
            console.log (" Quantidade de ingressos: ", quantidade)
            console.log ("---Valores---")
            console.log ("Valor do ingresso: R$ ", preco)
            console.log ("Valor total: R$ ",  total)
         }
}

else if (etapa === "FI" && categoria === "3") {
    preco = 880
    total = preco*quantidade 
         if (tipoDeJogo === "IN") {
             let dollar
             let dollarTotal
             dollar = preco*4,1
             dollarTotal = dollar*quantidade
             console.log ("---Dados da compra--- ")
             console.log (" Nome do cliente: ", nome)
             console.log (" Tipo de jogo: ", tipoDeJogo)
             console.log (" Etapa do jogo: ", etapa)
             console.log (" Categoria: ", categoria)
             console.log (" Quantidade de ingressos: ", quantidade)
             console.log ("---Valores---")
             console.log ("Valor do ingresso: US$ ", dollar)
             console.log ("Valor total: US$ ",  dollarTotal)

         }
         if (tipoDeJogo === "DO") {
            console.log ("---Dados da compra--- ")
            console.log (" Nome do cliente: ", nome)
            console.log (" Tipo de jogo: ", tipoDeJogo)
            console.log (" Etapa do jogo: ", etapa)
            console.log (" Categoria: ", categoria)
            console.log (" Quantidade de ingressos: ", quantidade)
            console.log ("---Valores---")
            console.log ("Valor do ingresso: R$ ", preco)
            console.log ("Valor total: R$ ",  total)
         }
}

else if (etapa === "SF" && categoria === "4") {
    preco = 220
    total = preco*quantidade 
         if (tipoDeJogo === "IN") {
             let dollar
             let dollarTotal
             dollar = preco*4,1
             dollarTotal = dollar*quantidade
             console.log ("---Dados da compra--- ")
             console.log (" Nome do cliente: ", nome)
             console.log (" Tipo de jogo: ", tipoDeJogo)
             console.log (" Etapa do jogo: ", etapa)
             console.log (" Categoria: ", categoria)
             console.log (" Quantidade de ingressos: ", quantidade)
             console.log ("---Valores---")
             console.log ("Valor do ingresso: US$ ", dollar)
             console.log ("Valor total: US$ ",  dollarTotal)

         }
         if (tipoDeJogo === "DO") {
            console.log ("---Dados da compra--- ")
            console.log (" Nome do cliente: ", nome)
            console.log (" Tipo de jogo: ", tipoDeJogo)
            console.log (" Etapa do jogo: ", etapa)
            console.log (" Categoria: ", categoria)
            console.log (" Quantidade de ingressos: ", quantidade)
            console.log ("---Valores---")
            console.log ("Valor do ingresso: R$ ", preco)
            console.log ("Valor total: R$ ",  total)
         }
}

else if (etapa === "DT" && categoria === "4") {
    preco = 170
    total = preco*quantidade 
         if (tipoDeJogo === "IN") {
             let dollar
             let dollarTotal
             dollar = preco*4,1
             dollarTotal = dollar*quantidade
             console.log ("---Dados da compra--- ")
             console.log (" Nome do cliente: ", nome)
             console.log (" Tipo de jogo: ", tipoDeJogo)
             console.log (" Etapa do jogo: ", etapa)
             console.log (" Categoria: ", categoria)
             console.log (" Quantidade de ingressos: ", quantidade)
             console.log ("---Valores---")
             console.log ("Valor do ingresso: US$ ", dollar)
             console.log ("Valor total: US$ ",  dollarTotal)

         }
         if (tipoDeJogo === "DO") {
            console.log ("---Dados da compra--- ")
            console.log (" Nome do cliente: ", nome)
            console.log (" Tipo de jogo: ", tipoDeJogo)
            console.log (" Etapa do jogo: ", etapa)
            console.log (" Categoria: ", categoria)
            console.log (" Quantidade de ingressos: ", quantidade)
            console.log ("---Valores---")
            console.log ("Valor do ingresso: R$ ", preco)
            console.log ("Valor total: R$ ",  total)
         }
}

else if (etapa === "FI" && categoria === "4") {
    preco = 330
    total = preco*quantidade 
         if (tipoDeJogo === "IN") {
             let dollar
             let dollarTotal
             dollar = preco*4,1
             dollarTotal = dollar*quantidade
             console.log ("---Dados da compra--- ")
             console.log (" Nome do cliente: ", nome)
             console.log (" Tipo de jogo: ", tipoDeJogo)
             console.log (" Etapa do jogo: ", etapa)
             console.log (" Categoria: ", categoria)
             console.log (" Quantidade de ingressos: ", quantidade)
             console.log ("---Valores---")
             console.log ("Valor do ingresso: US$ ", dollar)
             console.log ("Valor total: US$ ",  dollarTotal)

         }
         if (tipoDeJogo === "DO") {
            console.log ("---Dados da compra--- ")
            console.log (" Nome do cliente: ", nome)
            console.log (" Tipo de jogo: ", tipoDeJogo)
            console.log (" Etapa do jogo: ", etapa)
            console.log (" Categoria: ", categoria)
            console.log (" Quantidade de ingressos: ", quantidade)
            console.log ("---Valores---")
            console.log ("Valor do ingresso: R$ ", preco)
            console.log ("Valor total: R$ ",  total)
         }
}

