import { insertPost } from "../../data/post/insertPost";
import { postData } from "../../model/post";
import { getTokenData } from "../../services/authenticator";
import { generateId } from "../../services/idGenerator";

export const createPostBusiness = async (
    postData: postData,
    token: string
) => {

   const author = getTokenData(token)

   const author_id = author.id

   if(!author){
      throw new Error('Esse usuário não existe')
   }

   if (
      !postData.photo ||
      !postData.description ||
      !postData.created_at ||
      !postData.type
   ) {
      throw new Error('"photo", "description", "created_at" e "type" são obrigatórios')
   }

   const id: string = generateId()

   const postWithUserInfo = {id, ...postData, author_id}

   await insertPost(postWithUserInfo)
}