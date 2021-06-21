import connection from "../connection";

const table_name = "Cookenu_Users"

export default async function getUserByEmail(email: string): Promise<any> {
    const result = await connection
   .select("*")
   .from(table_name)
   .where({email})
  
   return result[0] 
}

// Usado no login