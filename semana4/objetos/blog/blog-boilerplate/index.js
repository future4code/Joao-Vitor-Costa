
let array = []

function receberDados() {
const container = document.getElementById("container-de-posts")
let title = document.getElementById("titulo-post")
let name = document.getElementById("autor-post")
let content = document.getElementById("conteudo-post")
let imagem = document.getElementById("imagem-post")

const dados = {
    titulo: title.value,
    nome: name.value,
    conteudo: content.value,
    img: imagem.value
}
if(dados.titulo !== "" && dados.autor!=="" && dados.conteudo!==""){
    array.push(dados);
}else {
    alert("Preencha todos os dados!");}

console.log(array)

container.innerHTML += `<h2>${dados.titulo}</h2>`
container.innerHTML += `<h3>${dados.nome}</h3>`
container.innerHTML += `<p>${dados.conteudo}</p>`

title.value = " "
name.value = " "
content.value = " "

if (imagem.value.includes(".jpg") || imagem.value.includes(".png") && imagem.value.includes("http")){  
    dados  
    container.innerHTML += `<img src=${imagem.value}>`
    imagem.value = ""
} else if (imagem.value === "") {
    imagem.value = ""
    return
} else {
    alert("Link inválido! ")
    imagem.value = ""
}

}
function apertouEnter(event){
    if (event.key === 'Enter'){
        receberDados()    }
}