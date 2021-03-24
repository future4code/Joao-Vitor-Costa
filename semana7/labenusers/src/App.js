import React from "react";
import styled from "styled-components";
import Lista from "./components/Lista"
import Home from "./components/Home"

const BotaoPagina = styled.button`
  width: 300px;
  height: 20px;
  margin: 10px;
`;

export default class App extends React.Component { 
  state = {
    page: "Home"
  }

  changePage = () => {
    switch(this.state.page) {
      case "Home":
        return  <Home /> 
      case "Lista":
        return  <Lista /> 
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
        return <BotaoPagina onClick={this.changePageState}> Lista de usuários </BotaoPagina>
      case "Lista":
        return <BotaoPagina onClick={this.changePageState}> Cadastro </BotaoPagina>
    }
  }

  render() {
    return (
      <div>
        {this.changeButton()}
        {this.changePage()} 
      </div>
    );
  }
}