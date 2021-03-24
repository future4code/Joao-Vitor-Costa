import React from "react";
import styled from "styled-components";
import axios from "axios";

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 10px;
  border: 1px solid black;
  width: 300px;
`;

const InputNome = styled.input`
  width: 250px;
`;

const InputEmail = styled.input`
  width: 250px;
`;

const BotaoEnviar = styled.button`
  width: 100px;
  height: 20px;
  margin-top: 10px;
`;

const Input = styled.div`
    display:flex;
    margin: 5px;
`


class Home extends React.Component {

    state = {
      nameInput: "",
      emailInput: "",
    }


    handleName = (event) => {
      this.setState({nameInput: event.target.value})
    }
  
    handleEmail = (event) => {
      this.setState({emailInput: event.target.value})
    }
    
    createUser = () => {
      const body = {
        name: this.state.nameInput,
        email: this.state.emailInput
      }
      axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "joao-vitor-alves-cruz"
          }
        }
      )
      .then((res) => {
        this.setState({nameInput: ""})
        this.setState({emailInput: ""})
        alert("Seu cadastro foi realizado com sucesso!")
      })
      .catch((err) => {
        alert("Ocorreu um erro! Tente realizar seu cadastro novamente mais tarde!")
        this.setState({nameInput: ""})
        this.setState({emailInput: ""})
      })
    }
  
    render() {
      return (
        <div>
          <DivContainer>
            <Input>
            <label>Nome: </label>
            <InputNome value={this.state.nameInput} onChange={this.handleName} ></InputNome>
            </Input>
            <Input>
            <label>Email: </label>
            <InputEmail value={this.state.emailInput} onChange={this.handleEmail}></InputEmail>
            </Input>
            <BotaoEnviar onClick={this.createUser}>Salvar</BotaoEnviar>
          </DivContainer>
        </div>
      );
    }
  }

export default Home;