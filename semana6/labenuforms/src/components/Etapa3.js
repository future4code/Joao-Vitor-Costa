import React from "react"
import styled from "styled-components"


const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items:center;
`
class Etapa3 extends React.Component {
    render () {
          return (
          <DivContainer>
             <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
            <p>7. Por que você não terminou um curso de graduação?</p>
            <input />
            <p>8. Você fez algum curso complementar?</p>
            <select>
                <option>Nenhum</option>
                <option>Curso técnico</option>
                <option>Curso de inglês</option>
            </select>
          </DivContainer>

          )
    }

}

export default Etapa3;