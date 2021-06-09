import connection from "../connection";

export default async function getUserById(id: string): Promise<any> {
   
   const result = await connection.raw(`
   SELECT email, 
   id, 
   cep, 
   logradouro, 
   numero, 
   complemento, 
   bairro, 
   cidade, 
   estado 
   FROM User 
   JOIN Address WHERE 
   id = user_id;
   `)

   for(const item of result[0]){
      if(item.id === id){
         return item
      }
   }
}