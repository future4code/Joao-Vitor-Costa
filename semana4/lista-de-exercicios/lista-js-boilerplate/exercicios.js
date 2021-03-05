//Exercício 1

let array = [0, 8, 23, 16, 10, 15, 41, 12, 13]
function inverteArray(array) {
   let arrayInvertido = []
  for (let i = array.length - 1; i >= 0; i--) {
      arrayInvertido.push(array[i])
  }
  return arrayInvertido
}

//Exercício 2

function retornaNumerosParesElevadosADois (array) {
   let arrayPar = []
   array.filter((item) => {
      if (item%2 === 0){
         arrayPar.push(item*item)
      }
   })
   return arrayPar
}


//Exercício 3

function retornaNumerosPares (array) {
  let arrayPar = array.filter((item) => {
      return item % 2 === 0
   })
   return arrayPar
}

//Exercício 4

function retornaMaiorNumero(array) {
   let maiorNum = array[0]
   for (item of array){
      if(item > maiorNum) {
         maiorNum = item
      }
   }
   return maiorNum
}

//Exercício 5

function retornaQuantidadeElementos (array) {
   return array.length
}

//Exercício 6

function retornaExpressoesBooleanas() {
   const respostas = [false, false, true, true, true]
   return respostas
}


//Exercício 7

function retornaNNumerosPares(n) {
array = []

for (let i = 0; i < n; i++) {
   array.push(i * 2)
}
return array
}

// Exercício 8

function checaTriangulo(a, b, c) {
  if (a === b && b === c){
   return "Equilátero"
  } else if (a === b || a === c && b === c) {
   return "Isósceles"
  } else {
   return "Escaleno"
  }
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
  let objeto = {
   maiorNumero: "",
   maiorDivisivelporMenor: "",
   diferenca: ""
  }

  if (num1 > num2) {
     objeto.maiorNumero = num1
      if (objeto.maiorNumero % num2 === 0) {
         objeto.maiorDivisivelporMenor = true
      }
      objeto.diferenca = objeto.maiorNumero - num2
  }

  else if (num2 >= num1) {
   objeto.maiorNumero = num2
    if (objeto.maiorNumero % num1 === 0) {
      objeto.maiorDivisivelporMenor = true
    }
    objeto.diferenca = objeto.maiorNumero - num1
}
return objeto
}

// Exercício 10

function segundoMaiorEMenor(array) {
  array.sort((a, b) => a - b)
  let arrayNum =[array[array.length-2], array[1]]
return arrayNum
}

//Exercício 11

function ordenaArray(array) {
  return array.sort((a, b) => a - b)
}

// Exercício 12

function filmeFavorito() {
   let objeto = {
      nome: "O Diabo Veste Prada",
      ano: 2006,
      diretor: "David Frankel", 
      atores: [ "Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
   }
 return objeto
}

// Exercício 13

function imprimeChamada() {
   let objeto = {
      nome: "O Diabo Veste Prada",
      ano: 2006,
      diretor: "David Frankel", 
      atores: [ "Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
   }
 return `Venha assistir ao filme ${objeto.nome}, de ${objeto.ano}, dirigido por ${objeto.diretor} e estrelado por ${objeto.atores[0]}, ${objeto.atores[1]}, ${objeto.atores[2]}, ${objeto.atores[3]}.`
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
  const objeto = {
      largura: lado1,
      altura: lado2,
      perimetro: 2*(lado1 + lado2),
      area: lado1*lado2 
   }
   return objeto
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   const objeto = {
   nome: "ANÔNIMO",
	idade: 25,
	email: "astrodev@future4.com.br",
	endereco: "Rua do Futuro, 4"
   }
   return objeto
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   let novoArray = []
   for (item of arrayDePessoas) {
      if (item.idade >= 20) {
         novoArray.push(item)
      }
   }
   return novoArray
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   let novoArray = []
   for (item of arrayDePessoas) {
      if (item.idade <= 18) {
         novoArray.push(item)
      }
   }
   return novoArray
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   const novaArray = []
   for(item of array) {
      novaArray.push(item*2)
   }
   return novaArray
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
   const novaArray = []
   for(item of array) {
      novaArray.push(String(item*2))
   }
   return novaArray
}

// Exercício 17, letra C

function verificaParidade(array) {
   const novaArray = []
   for(item of array) {
      if (item%2===0) {
      novaArray.push(`${item} é par`)
   } else if (item%2===1) {
      novaArray.push(`${item} é ímpar`)
   }
   }
   return novaArray
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas(pessoas) {
   // implemente sua lógica aqui
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas(pessoas) {
   // implemente sua lógica aqui
}

//Exercício 19

const consultas = [
  { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
  { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
  { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
  { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
  ]

function retornaEmailConsulta(consultas) {
  // implemente sua lógica aqui
}

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  // implemente sua lógica aqui
}