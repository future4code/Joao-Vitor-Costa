import React from "react"
import styled from "styled-components"

const DivContainer = styled.div`
    display: flex;
`

const Header = (props) => {

    const renderHeader = () => {
        if(props.currentPage === "Home"){
            return <DivContainer>
                <h1>AstroMatch</h1>
                <button onClick={() => props.changePage()}>teste</button>
            </DivContainer>
        } else {
            return <DivContainer>
                <button onClick={() =>  props.changePage()}>teste</button>
                <h1>AstroMatch</h1>
            </DivContainer>
        }
    }

    return  <div>
            {renderHeader()}
            </div>
}

export default Header