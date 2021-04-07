import React, {useEffect, useState} from "react"
import axios from "axios"
import styled from "styled-components"

const DivContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
`

const Imagem = styled.img`
    width: 80px;
    height: 80px;
    margin-right: 6px;
    border-radius: 64px;
`

const DivMatch = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin: 6px 0;
    :hover {
        cursor: pointer;
        background-color: gray;
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
        {listOfMatches}
        <button onClick={() => putMatches()}>Desfazer todos matches</button>
        </DivContainer>
}

export default Matches