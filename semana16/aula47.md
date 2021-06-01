1. a) A resposta retornada pelo raw, é tudo que o banco retorna, sem limitações, ou seja, retorna mais informações do que a pedida, assim, temos que especificar qual é a resposta esperada.

    b) const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = '${name}'
    `)
        return result
    }

   c) const getNumberOfItens = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) FROM Actor WHERE gender = "${gender}"
  `)
	return result[0]
}

    2. a) const updateActor = async (id: string, salary: number): Promise<any> => {
    await connection("Actor")
        .update({
        salary: salary,
        })
        .where("id", id);
    };

    b) const deleteActor = async (id: string): Promise<void> => {
    await connection("Actor")
        .delete()
        .where("id", id);
    }; 

        c) const avgSalary = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
        .avg("salary as average")
        .where({ gender });
    return result[0].average;
    };

    3.a) const getActorById = async (id: string): Promise<any> => {
        const result = await connection("Actor")
        .where("id", id)
        return result
    }

    b)