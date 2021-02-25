// Atividades de interpretação ****************************************************************************

// 1

// O código soma a variavel i com a variavel valor. 10, uma vez que o código adiciona 1,2,3 e 4 a 0 (o valor da variavel valor)

// 2.

// a.

// 19
// 21
// 23
// 25
// 27
// 30

// b.

// Não, para indicar os índices, o mais indicado é o for.

// Atividades de Escrita **********************************************************************************

// let arrayOriginal = [8, 7, 4, 3, 20, 25, 42, 37, 28, 9, 30]

// a.

// for(let numeros of arrayOriginal) {
//   console.log(numeros)
// }

// b.

// for(let numeros of arrayOriginal) {
//   console.log(numeros/10)
// }

// c.

// let arrayPar = []

// for(numeros of arrayOriginal){
//     if(numeros%2 === 0) {
//         arrayPar.push(numeros)
//     }
//     console.log(arrayPar)
// }

// d.

// for (let i = 0; i < arrayOriginal.length; i++){
//     let numero = arrayOriginal[i]
//     console.log("O elemento do índex ", i, " é ", numero)
// }

// e.

// let maiorNum = 0
// let menorNum = arrayOriginal[0]

//   for(let i = 0; i < arrayOriginal.length; i++) {
//       if( arrayOriginal[i] > maiorNum) {
//         maiorNum = arrayOriginal[i]
//       }
//       if( arrayOriginal[i] < menorNum) {
//         menorNum = arrayOriginal[i]
//       }
//       console.log("O maior número é ", maiorNum," e o menor número é", menorNum)
//   }

// Desafios************************************************************************************************

// 1.

// let convite = Number(prompt("Escolha algum número aleatório"))
// console.log("Vamos jogar!")
// let tentativa 
// let quantidade = []

// while (convite !== tentativa) {
// tentativa = Number(prompt("Qual foi o número escolhido?"))
// console.log("O número chutado foi: ", tentativa)
//         if (convite > tentativa) {
//                 console.log("Errou. O número escolhido é maior");
//         } 
//         else if (convite < tentativa) {
//                 console.log("Errou. O número escolhido é menor");
//         }
//         quantidade.push(tentativa)
// }

//   if ((convite = tentativa)) {
//   console.log("Acertou!");
//   console.log("O número de tentativas foi: ", quantidade.length);
// }