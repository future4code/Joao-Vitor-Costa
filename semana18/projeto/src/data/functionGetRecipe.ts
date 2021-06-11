import connection from "../connection";

 const functionGetRecipe = async(id: string) => {
    const result = await connection.raw(`
    SELECT * FROM Cookenu_Recipes WHERE id = "${id}"
    `)

    return result[0]
};

export default functionGetRecipe;