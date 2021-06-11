import connection from "../connection";

const table_name = "Cookenu_Recipes";

const functionCreateRecipe = async (
   id: string, 
   title: string, 
   description: string,
   createAt: string,
   user_id: string) => {
 await connection
   .insert({
     id,
     title,
     description,
     createAt,
     user_id
   })
   .into(table_name);
};

export default functionCreateRecipe;

