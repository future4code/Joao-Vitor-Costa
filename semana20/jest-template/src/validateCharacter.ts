export interface Character {
    name: string
    life: number
    defense: number
    strength: number
}

export const validateCharacter = (input: Character) => {
    if(!input.defense || !input.life || !input.strength || !input.name){
        return false
    } if (input.defense <= 0 || input.strength <= 0 || input.life <= 0){
        return false
    }
    return true
}