import connection from "../connection";

const table_name = "Cookenu_Users"

export default async function getUserById(id: string): Promise<any> {
   const result = await connection
   .select("*")
   .from(table_name)
   .where({id})
   
   return result[0] 
}

// Usado no getProfile