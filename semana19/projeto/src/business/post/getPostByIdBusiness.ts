import { selectPostById } from "../../data/post/selectPostById"

export const getPostByIdBusiness = async (
   id: string
): Promise<any> => {
   const result = await selectPostById(id)

   if (!result) {
      throw new Error("Tarefa não encontrada")
   }

   const postWithUserInfo = {
      id: result.id,
      photo: result.photo,
      description: result.description,
      type: result.type,
      createdAt: result.created_at,
      authorId: result.author_id
   }

   return postWithUserInfo
}