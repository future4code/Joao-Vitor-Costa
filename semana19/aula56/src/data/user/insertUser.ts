import { connection } from "../connection";
import { insertUserDTO } from "../../model/user";

export const insertUser = async(
   user: insertUserDTO
) => {
   await connection.insert(user).into('to_do_list_users')
}