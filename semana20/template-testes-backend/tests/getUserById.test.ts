import { UserBusiness } from "../src/business/UserBusiness"
import { UserDatabase } from "../src/data/UserDatabase"
import hashGeneratorMock from "./mocks/hashGeneratorMock"
import idGeneratorMock from "./mocks/idGeneratorMock"
import tokenGeneratorMock from "./mocks/tokenGeneratorMock"
import userDataBaseMock from "./mocks/userDataBaseMock"

const userBusinessMock = new UserBusiness(
    idGeneratorMock,
    hashGeneratorMock,
    userDataBaseMock as UserDatabase,
    tokenGeneratorMock
)

describe("getUserById", () => {
    test("Usuário não existente", async() => {
        expect.assertions(2)
        try {
           await userBusinessMock.getUserById("id_mock")
        } catch (error) {
           expect(error.message).toBe("User not found")
           expect(error.statusCode).toBe(404) 
        }
    })
    test("Usuário existente", async () => {
        expect.assertions(2)
        try {
            const getUserById = jest.fn(
                (id: string) => userBusinessMock.getUserById(id)
              )
                
              const result = await getUserById("id_mock_admin")
        
              expect(getUserById).toHaveBeenCalledWith("id_mock_admin")
              expect(result).toEqual({
                id: "id_mock_admin",
                name: "astrodev",
                email: "astrodev@gmail.com",
                role: "ADMIN",
              })
        } catch (error) {
            console.log(error.message)
        }
    })
})