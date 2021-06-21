import { performPurchase } from "../src";
import {LOCATION, NACIONALITY, User, verifyAge, Result} from "../src/casino"

describe("treinando erros", () => {
    test("saldo maior", () => {
        const user = {
            name: "joao", 
            balance: 50
        }

        const output = performPurchase(user, 20)
        expect(output).not.toBe(undefined)
    })

    test("saldo igual", () => {
        const user = {
            name: "joao", 
            balance: 50
        }

        const output = performPurchase(user, 20)
        expect(output).not.toBe(undefined)
    })

    test("saldo maior", () => {
        const user = {
            name: "joao", 
            balance: 50
        }

        const output = performPurchase(user, 20)
        expect(output).not.toBe(undefined)
    })

    ////////////////////////////////////////////////////

    test("casino", () => {
        const casino = {
            name: "Cassino Malado",
            location: LOCATION.BRAZIL
        }

        const casino2 = {
            name: "Malated Casino",
            location: LOCATION.EUA
        }

        const user1: User = {
            name: "gui",
            age: 27,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const user2: User = {
            name: "jatobiro",
            age: 41,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const user3: User = {
            name: "jv",
            age: 18,
            nacionality: NACIONALITY.AMERICAN
        }

        const users = [
            user3,
            user2,
            user1
        ]
            
        const output: Result = verifyAge(casino, users)

        console.log(output)

        expect(output)
    })
})