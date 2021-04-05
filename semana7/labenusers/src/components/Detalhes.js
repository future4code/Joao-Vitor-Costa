import React from "react";
import styled from "styled-components";
import axios from "axios";
import Lista from "./Lista"

 const Usuario = styled.div`
     display:flex;
     flex-direction: column;
     padding: 10px;
 `

class Detalhes extends React.Component {

 state = {
     page: "Detalhes",
     inputName: "",
     inputEmail: "",
 }

 componentDidMount = () => {
     this.getUsuario()
 }

 changePage = () => {
     if(this.state.page === "Lista") {
         return <Lista />
     }
 }

 changePageState = () => {
      this.setState({page: "Lista"})
  }

     getUsuario = () => {
         axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.props.id}`,
         {
             headers:{
                Authorization: "joao-vitor-alves-cruz"
             } 
          }
         ).then((res) => {
             this.setState({inputName: res.data.name, inputEmail: res.data.email})
         })
     }

    render() {
        return(
        <Usuario>
        <p>Email: {this.state.inputEmail}</p> <p>Nome: {this.state.inputName}</p> 
        </Usuario>
        )
    }
}

export default Detalhes;