import { type } from "os"

const minhaString: string = '1'
// A própria IDE reclama, uma vez que a variável deve sempre retornar uma string não um número.

const meuNumero: number = 1
// A própria IDE reclama, uma vez que a variável deve sempre retornar uma número não uma string. Utilizando (string | number)

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

enum CORES_DO_ARCO_IRIS {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo", 
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta"
}

const pessoa1: Pessoa = {
    nome: "joao",
    idade: 18,
    corFavorita: CORES_DO_ARCO_IRIS.AZUL
}

const pessoa2: Pessoa = {
    nome: "gui",
    idade: 27,
    corFavorita: CORES_DO_ARCO_IRIS.AMARELO
}

const pessoa3: Pessoa = {
    nome: "jatoba",
    idade: 15,
    corFavorita: CORES_DO_ARCO_IRIS.VERMELHO
}

const array = [pessoa1, pessoa2, pessoa3]

console.table(array)