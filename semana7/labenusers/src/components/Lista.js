import React from "react";
import styled from "styled-components";
import axios from "axios";

const ListaUsuarios = styled.div`
    display: flex;
    /* flex-direction: column; */
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

render() {
    const userList = this.state.usuarios.map((usuario) => (
        <Usuario>
        <li key={usuario.id}> {usuario.name} </li> <BotaoDelete onClick = {() => this.delUser(usuario.id) } > X </BotaoDelete>
        </Usuario>
    ))
    return(
        <ListaUsuarios>
            <ul>{userList}</ul>
        </ListaUsuarios>
    )
}
}

export default Lista;