import { insertPost } from "../../data/post/insertPost";
import { postData } from "../../model/post";
import { generateId } from "../../services/idGenerator";

export const createPostBusiness = async (
    postData: postData
) => {

   if (
      !postData.photo ||
      !postData.description ||
      !postData.created_at ||
      !postData.type
   ) {
      throw new Error('"photo", "description", "created_at" e "type" são obrigatórios')
   }

   const id: string = generateId()

   await insertPost({
      id,
      ...postData
   })
}