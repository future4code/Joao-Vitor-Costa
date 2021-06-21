import connection from "../connection";

const table_name = "Cookenu_Users";

const functionSignUp = async (
   id: string, 
   email: string, 
   password: string,
   name: string) => {
 await connection
   .insert({
     id,
     name,
     email,
     password
   })
   .into(table_name);
};

export default functionSignUp;