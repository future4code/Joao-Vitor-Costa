import connection from "../connection";

const userTableName = "User";

const createUsers = async (
   id: string, 
   email: string, 
   password: string,
   role: string) => {
 await connection
   .insert({
     id,
     email,
     password,
     role
   })
   .into(userTableName);
};

export default createUsers;