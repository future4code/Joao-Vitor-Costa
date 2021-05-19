type post = {
    autor: string,
    texto: string
}

const posts: post[] = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
  ]

// A função recebe o array de posts e uma string sendo o nome de um autor e tem como saída o filme cujo autor é o mesmo do declarado

function buscarPostsPorAutor(posts: post[], autorInformado: string) {
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )
  }

  console.table(buscarPostsPorAutor(posts, "Hermione Granger"))