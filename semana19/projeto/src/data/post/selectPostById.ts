import { connection } from "../connection";

export const selectPostById = async (
   id: string
): Promise<any> => {
   const result = await connection.raw(`
        SELECT posts.*, name FROM labook_posts AS posts
        JOIN labook_users AS users
        ON author_id = users.id
        WHERE posts.id = '${id}';
    `)

   return result[0][0]
}