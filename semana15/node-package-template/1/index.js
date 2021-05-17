const nome = process.argv[2]
const idade = process.argv[3]
const futuro = Number(idade) + 7
if(nome && idade){
console.log(`Olá, ${nome}! Você tem ${idade} anos! E em sete anos sua idade será ${futuro}!`)
} else {
    console.log("Esperava 2 parâmetros só recebi um.")
}