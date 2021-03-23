import React from "react"
import styled from "styled-components"


const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items:center;
`

class Etapa2 extends React.Component {
  
  render () {
      
        return (
        <DivContainer>
          <h1>ETAPA 2 - INFORMAÇÕES DE ENSINO SUPERIOR</h1>
            <p>5. Qual curso?</p>
            <input />
            <p>6. Qual a unidade de ensino?</p>
            <input />
        </DivContainer>
        )
  }
}
export default Etapa2;