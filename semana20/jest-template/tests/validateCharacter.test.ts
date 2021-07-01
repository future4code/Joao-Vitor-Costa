import { validateCharacter } from "../src/validateCharacter"

test("Validação de nome vazio", () => {
    const result = validateCharacter({
        name: "",
        life: 1500,
        strength: 300,
        defense: 500,
    })

    expect(result).toBe(false)
})

test("Validação de vida = 0", () => {
    const result = validateCharacter({
        name: "jv",
        life: 0,
        strength: 300,
        defense: 500,
    })

    expect(result).toBe(false)
})

test("Validação de força = 0", () => {
    const result = validateCharacter({
        name: "jv",
        life: 1500,
        strength: 0,
        defense: 500,
    })

    expect(result).toBe(false)
})

test("Validação de defesa = 0", () => {
    const result = validateCharacter({
        name: "jv",
        life: 1500,
        strength: 300,
        defense: 0,
    })

    expect(result).toBe(false)
})

test("Validação de força com valor negativo", () => {
    const result = validateCharacter({
        name: "jv",
        life: 1500,
        strength: -20,
        defense: 500,
    })

    expect(result).toBe(false)
})

test("Validação de usuário aceito", () => {
    const result = validateCharacter({
        name: "jv",
        life: 1500,
        strength: 300,
        defense: 500,
    })

    expect(result).toBe(true)
})