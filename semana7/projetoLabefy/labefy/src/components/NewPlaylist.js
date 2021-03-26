import styled from "styled-components"
import axios from "axios"
import {baseUrl, axiosConfig} from "../parameters"
import React from "react"

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
  width: 450px;
  height: 200px;
  background-color: #1ed760 ;
`;

const InputNome = styled.input`
  width: 250px;
  margin: 0 5px;
  border: none;
  border-radius: 16px;
  outline: 0;
`;

const BotaoEnviar = styled.button`
  outline: 0;
  border: none;
  background-color: #191414;
  color: white;
  display: flex;
  justify-content: center;
  margin: 0 10px;
  padding: 10px;
  border-radius: 16px;
  width: 180px;
&:hover {
  background-color: #555555;
  cursor: pointer;
}
`

const Input = styled.div`
    display:flex;
    margin: 5px;
`

class NewPlaylist extends React.Component {

    state = {
        name: ""
    }

    handleName = (e) => {
        this.setState({name: e.target.value})
    }

    createPlaylist = () => {
        const body = {
            name: this.state.name
        }
        axios.post(baseUrl, body, axiosConfig
        ).then((res) => {
            this.setState({name: ""})
            alert("Playlist criada com sucesso!")
        }).catch((e) => {
            alert("Ocorreu um erro! Estamos trabalhando para resolver o problema!")
            this.setState({name: ""})
            console.log(e.data)
        })
    }

  render() {
    return(
      <DivContainer>
          <h1>Criação de playlists</h1>
          <Input>
          <label>Nome da playlist: </label>
          <InputNome value={this.state.name} onChange={this.handleName}></InputNome>
          </Input>
          <BotaoEnviar onClick={this.createPlaylist}>Criar Playlist</BotaoEnviar>
      </DivContainer>
    )
  }
}
export default NewPlaylist