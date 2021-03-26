import NewPlaylist from "./components/NewPlaylist"
import ListOfPlaylists from "./components/ListOfPlaylists"
import styled from "styled-components"
import React from "react"
import logo from "./img/logo.png"

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 8vh;
  background-color: #1ed760;
  justify-content: space-between;
`

const Footer = styled.div`
  height: 8vh;
  background-color: #1ed760;
  display: flex;
  justify-content: center;
  align-items: center;
`

const DivConteudo = styled.div`
  height: 84vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #191414;
`

const BotaoPagina = styled.button`
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
  padding: 11px;
  background-color: #555555;
  cursor: pointer;
}
`

const Logo = styled.img`
  margin-left: 5px;
  height: 80%;
  width: 5%;
`

const Titulo = styled.h1`
  color: #ffffff;
`

export class App extends React.Component {

  state = {
    page: "Home"
  }

  changePage = () => {
    switch(this.state.page) {
      case "Home":
        return  <NewPlaylist /> 
      case "Lista":
        return  <ListOfPlaylists /> 
    }
  }

  changePageState = () => {
    if(this.state.page === "Home" ) {
    this.setState({page: "Lista"})
    } else if (this.state.page === "Lista") {
    this.setState({page: "Home"})
    }
  }

  changeButton = () => {
    switch(this.state.page) {
      case "Home":
        return <BotaoPagina onClick={this.changePageState}> Lista de playlists </BotaoPagina>
      case "Lista":
        return <BotaoPagina onClick={this.changePageState}> Cadastrar nova playlist </BotaoPagina>
    }
  }

  render() {
    return(
      <DivContainer>

        <Header>
        <Logo src={logo}></Logo>
        <Titulo> Labefy </Titulo>
        {this.changeButton()}
        </Header>

        <DivConteudo>
        {this.changePage()}
        </DivConteudo>


        <Footer>
      <Logo src={logo} ></Logo>
        </Footer>
      </DivContainer>
    )
  }
}
export default App