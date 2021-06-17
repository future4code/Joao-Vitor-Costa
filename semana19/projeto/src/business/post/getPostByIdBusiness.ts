import { selectPostById } from "../../data/post/selectPostById"
import { post } from "../../model/post"

export const getPostByIdBusiness = async (
   id: string
): Promise<post> => {
   const result = await selectPostById(id)

   if (!result) {
      throw new Error("Tarefa não encontrada")
   }
   
   return result
}