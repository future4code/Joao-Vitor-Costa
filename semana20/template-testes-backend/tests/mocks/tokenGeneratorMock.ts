import { USER_ROLES } from "../../src/model/User"

export class TokenGeneratorMock {
    public generate = (input: AuthenticationData) => {
        return "token_mock"
    }
    public verify = (token: string) => {
        return {
            id: "token_mock",
            role: USER_ROLES.NORMAL
        }
    }
}

export interface AuthenticationData {
    id: string;
    role: string;
  }
  
export default new TokenGeneratorMock()  