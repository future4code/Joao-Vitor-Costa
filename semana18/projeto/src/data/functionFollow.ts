import connection from "../connection";

const table_name = "Cookenu_Follows";

const functionFollow = async (
   my_id: string, 
   user_id: string) => {
 await connection
   .insert({
       my_id,
       user_id
   })
   .into(table_name);
};

export default functionFollow;