const operacao = process.argv[2]
const primeiroValor = process.argv[3]
const segundoValor = process.argv[4]

if(operacao === "add"){
    console.log(Number(primeiroValor) + Number(segundoValor))
} else if (operacao === "sub") {
    console.log(Number(primeiroValor) - Number(segundoValor))
} else if (operacao === "mult") {
    console.log(Number(primeiroValor) * Number(segundoValor))
} else if (operacao === "div") {
    console.log(Number(primeiroValor) / Number(segundoValor))
}
