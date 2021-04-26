import React from "react"
import styled from "styled-components"
import perfis from "../img/home.png"
import matches from "../img/matches.png"

const DivContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 360px;
    height: 6vh;
    margin: 12px 0;
    border-bottom: 1px solid #E7F2F8;
`
const DivGeral = styled.div``

const Icons = styled.img`
    height: 70%;
    width: 12%;
:hover{
    cursor: pointer;
    transform: scale(1.3 ,1.3);
    transition: all 0.5s;
}
`

const Header = (props) => {

    const renderHeader = () => {
        if(props.currentPage === "Home"){
            return <DivContainer>
                <h1>AstroMatch</h1>
                <Icons src={matches} onClick={() => props.changePage()}/>
            </DivContainer>
        } else {
            return <DivContainer>
                <Icons src={perfis} onClick={() =>  props.changePage()}/>
                <h1>AstroMatch</h1>
            </DivContainer>
        }
    }

    return  <DivGeral>
            {renderHeader()}
            </DivGeral>
}

export default Header