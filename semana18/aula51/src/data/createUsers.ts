import connection from "../connection";

const userTableName = "User";

const createUsers = async (
   id: string, 
   email: string, 
   password: string) => {
 await connection
   .insert({
     id,
     email,
     password,
   })
   .into(userTableName);
};

export default createUsers;