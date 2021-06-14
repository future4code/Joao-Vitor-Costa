import {connection} from "../connection"

export const deleteUserData = async(id: string) => {
    await connection.raw(`
    DELETE FROM User_Arq WHERE id = "${id}"
    `)
}