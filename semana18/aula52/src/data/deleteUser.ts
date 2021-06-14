import connection from "../connection"

const deleteUser = async(id: string) => {
    await connection.raw(`
    DELETE FROM User WHERE id = "${id}"
    `)
}

export default deleteUser;