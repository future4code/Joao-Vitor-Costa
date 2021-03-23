import React from "react"
import styled from "styled-components"
import Etapa1 from "./components/Etapa1"
import Etapa2 from "./components/Etapa2"
import Etapa3 from "./components/Etapa3"
import EtapaFinal from "./components/EtapaFinal"

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items:center;
`


class App extends React.Component {
  state = {
    etapa: 1
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1: 
        return <Etapa1 />;
      case 2: 
        return <Etapa2 />;
      case 3: 
        return <Etapa3 />;
      case 4: 
        return <EtapaFinal />;
    }
  }

  irParaProxima = () => {
    this.setState({etapa: this.state.etapa + 1})
  }

  render() {
    return (
      <DivContainer>
        {this.renderizaEtapa()}
        <br></br>
        {this.state.etapa !== 4 && <button onClick={this.irParaProxima}>Próxima etapa</button>}
      </DivContainer>
    )
  }
}

export default App
