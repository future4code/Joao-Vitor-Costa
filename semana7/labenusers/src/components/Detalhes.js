import React from "react";
import styled from "styled-components";
import axios from "axios";

 const Usuario = styled.div`
     display:flex;
     flex-direction: column;
     padding: 10px;
 `

class Detalhes extends React.Component {

 state = {
     usuario: []
 }

     getUsuario = (userId) => {
         axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
         {
             headers:{
                Authorization: "joao-vitor-alves-cruz"
             } 
          }
         ).then((res) => {
             this.setState({usuario: res.data})
         })
     }

    render() {
     const user = this.state.usuario.map((usu) => {
         <Usuario>
         <p>Nome: </p> <p>{usu.name}</p> 
         <p>Email: </p> <p>{usu.email}</p>
         </Usuario>
     })
        return(
        <p>
        {user}
        <button onClick={this.props.changePage} >Voltar</button>
        </p>
        )
    }
}

export default Detalhes;