const operacao = process.argv[2]
const primeiroValor = Number(process.argv[3])
const segundoValor = Number(process.argv[4])
const blue = "\033[34m"

const add = primeiroValor + segundoValor
const sub = primeiroValor - segundoValor
const mult = primeiroValor * segundoValor
const div =  primeiroValor / segundoValor

if(operacao && primeiroValor && segundoValor){
if(operacao === "add"){
    console.log(`${blue} ${add}`)
} else if (operacao === "sub") {
    console.log(`${blue} ${sub}`)
} else if (operacao === "mult") {
    console.log(`${blue} ${mult}`)
} else if (operacao === "div") {
    console.log(`${blue} ${div}`)
}} else if (!operacao || !primeiroValor || !segundoValor){
    console.log("\033[34m Um ou mais parâmetros estão faltando!")
}