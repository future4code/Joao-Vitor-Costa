import { User } from "../../src/model/User";
import { userMockAdmin, userMockNormal } from "./userMock";

export class UserDataBaseMock {
    public async getUserById(id: string): Promise<User | undefined> {
        switch(id){
        case "id_mock_admin":
        return userMockAdmin
        case "id_mock_normal":
        return userMockNormal
        default: 
        undefined
        }
    }
}

export default new UserDataBaseMock()