import React, {useEffect, useState} from "react"
import axios from "axios"
import styled from "styled-components"

const DivContainer = styled.div`
display: flex;
flex-direction: column;
height: 100%;
overflow: auto;
`

const Imagem = styled.img`
    width: 70px;
    height: 70px;
    margin-right: 6px;
    border-radius: 64px;
`

const DivMatch = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin: 6px 0;
    :hover {
        border-radius: 32px;
        cursor: pointer;
        background-color: #E7F2F8;
    }
`

const Button = styled.button`
    border-radius: 32px;
    padding: 6px;
    border: none;
    outline: 0;
    width: 100%;
    :hover {
        cursor: pointer;
        background: #E7F2F8;
    }
`

const Matches = () => {
    const [matches, setMatches] = useState([])

    useEffect(() => {
        if(matches !== 0) {
        getMatches()
        } 
    }, [])

    const getMatches = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:joao/matches")
        .then((res) => {
            setMatches(res.data.matches)
        }).catch((err) => {
            console.log(err.data)
        })
    }

    const putMatches = () => {
        if(window.confirm("Você realmente deseja excluir todos seus matches?")){
        axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:joao/clear")
        .then((res) => {
            getMatches()
        }).catch((err) => {
            console.log(err.data)
        })
    }
    }

    const listOfMatches = matches.map((match) => {
          return <DivMatch>
                <Imagem src={match.photo}/>
                <p>{match.name}</p>
                 </DivMatch>
    })

    return <DivContainer>
        <Button onClick={() => putMatches()}>Desfazer todos matches</Button>
        {listOfMatches}
        </DivContainer>
}

export default Matches