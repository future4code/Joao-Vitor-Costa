import { connection } from "../connection";
import { post } from "../../model/post";

export const insertPost = async (
   post: post
) => {
   await connection('labook_posts')
      .insert({
         id: post.id,
         photo: post.photo,
         description: post.description,
         created_at: post.created_at,
         type: post.type
      })
}