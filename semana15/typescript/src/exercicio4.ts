type pokemon = {
	name: string,
    types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// no terminal eu rodaria o comando (npx tsc + nome do arquivo).
// sim, o caminho serio diferente, ao invés de simplesmente colocar o nome do arquivo seria ./src/nome do arquivo.
// sim, rodando o comando npx tsc.
// Algumas configurações devem ser alteradas para manter o código funcionando em perfeito estado.