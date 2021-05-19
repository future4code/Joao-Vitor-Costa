// A função tem como entrada um array de números e como saída um objeto com 3 números

type info = {
    maior: number,
    menor: number,
    media: number
}

type amostra = {
    numeros: number[]
    obterEstatisticas: (numeros: number[]) => info
}

function obterEstatisticas(numeros: number[]){

    const numerosOrdenados = numeros.sort(
        (a: number, b: number) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: info = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

console.table(obterEstatisticas([1,2,3,4,5,6,7,8,9,10]))