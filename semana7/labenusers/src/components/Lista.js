import React from "react";
import styled from "styled-components";
import axios from "axios";
import Detalhes from "./Detalhes"

const ListaUsuarios = styled.div`
    display: flex;
    margin: auto;
    width: 500px;
    height: 100vh;
`

const Usuario = styled.div`
    display:flex;
    padding: 10px;
`

const BotaoDelete = styled.button`
    margin-left: 5px;
`

class Lista extends React.Component {

state = {
    usuarios: [],
    page: "Lista",
    usuarioId: ""
}

componentDidMount() {
    this.getUsuarios()
}

    getUsuarios = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
            headers:{
               Authorization: "joao-vitor-alves-cruz"
            } 
         }
        ).then((res) => {
            this.setState({usuarios: res.data})
        })
    }

    delUser = (userId) => {
        if(window.confirm("Você tem certeza de que deseja deletar esse usuário?")) {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
        {
            headers: {
                Authorization: "joao-vitor-alves-cruz"
            }
        }
        ).then((res) => {
            alert("Usuário deletado com sucesso!")
            this.getUsuarios()
        })
        .catch((err) => {
            alert("Ocorreu um erro! Tente realizar seu cadastro novamente mais tarde!")
        })
    }
    }

    changePage = (id) => {
        if(this.state.page !== "Lista") {
           this.setState({page: "Lista", usuarioId: id}) 
        } 
        
    }

render() {
    const userList = this.state.usuarios.map((usuario) => (
        <Usuario key={usuario.id} >
        <li onClick={() => this.changePage(usuario.id)}> {usuario.name} </li> <BotaoDelete onClick = {() => this.delUser(usuario.id) } > X </BotaoDelete>
        </Usuario>
    ))

    return(
        <div>
        {this.state.page === "Lista" ? 
        <ListaUsuarios>
            <ul>{userList}</ul>
        </ListaUsuarios> : 
        <Detalhes 
        changePage={this.changePage} 
        userId={this.state.usuarioId} 
        />
        }
    </div>
        
    )
}
}

export default Lista;