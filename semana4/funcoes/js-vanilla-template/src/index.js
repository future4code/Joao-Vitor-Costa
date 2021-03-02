// 1.

// a.

// 10
// 50

// b.

// Os valores 10 e 50, respectivamente, seriam apenas salvos. Nada apareceria no console.

// 2.

// a.

// Darvas
// Caio 

// b.

// Amanda 
// Caio

// 3.

// Essa função pega apenas os números pares de uma array, os elevam a 2, e depois adicionam esses números já elevados a uma segunda array.

// **Exercícios de escrita de código**

// 4.

// a.

// let apresentacao = () => {
//     console.log("Eu sou João, tenho 18 anos, moro em Belo Horizonte e sou estudante.")  
// }

// const apresentacao1 = apresentacao()


// b.

// let questionario = (nome, idade, endereco, estudante) => {
//         if (estudante === true) {
//             console.log('Meu nome é ' + nome + ', tenho ' + idade + ' anos, moro em ' + endereco + ' e sou estudante.')
//         } else {
//             console.log('Meu nome é ' + nome + ', tenho ' + idade + ' anos, moro em ' + endereco + ' e não sou estudante.')
// }
// }
// const perguntas = questionario()

// 5.

// a. 

// let operacao = (num1, num2) => {
//     const soma = num1 + num2
//     return soma
// }

// const resultado = operacao(2, 4)
// console.log("soma:", resultado)

// b. 

// let comparacao = (num1, num2) => {
//     if (num1 > num2) {
//         return true
//     } else if ( num1 < num2) {
//         return false
//     }
// }
// const resultado = comparacao(13, 14)
// console.log(resultado)

// c.

// let mensagem = (msg) => {
//     for (let i = 0; i < 10; i++) {
//         console.log("mensagem teste")
//     }
// } 

// const mensagemConsole = mensagem()

// 6.

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// a.

// let quantidadeArray = (tamanho) => {
//     for (itens of tamanho) {
//     }
//     return tamanho.length
// }

// const tamanhoArray = quantidadeArray(array)
// console.log("Tamanho array:", tamanhoArray)


// b.

// let numero = Number(prompt("Digite um número"))

// let seForPar = (numero) => {
//     console.log("Numero recebido", numero)
//     if (numero % 2 === 0){
//         return "O número é par"
//     } else {
//         return "O número é impar"
//     }
// }

// let conferir = seForPar(numero)
// console.log(conferir)

// c.

// let numerosPares = (array) => {
//     let arrayFinal = [];
  
//     for (let item of array) {
//           if (item % 2 === 0) {
//           arrayFinal.push(item)
//           }
//     }
//     return arrayFinal.length;
//   }

//   let numPar = numerosPares(array)
//   console.log(numPar)

// d.

// let numero1 = prompt("Digite um numero, se ele for par a mensagem no console será true, se for ímpar será false")
// let numerosPares = (numero1) => {
//         let arrayFinal = [numero1];
//         for (let item of arrayFinal) {
//               if (item % 2 === 0) {
//               return true
//               } else {
//                 return false
//               }
//         }
//       }
//       let numPar = numerosPares(numero1)
//       console.log(numPar)