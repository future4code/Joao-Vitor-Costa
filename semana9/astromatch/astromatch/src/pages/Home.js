import React, {useEffect, useState} from "react"
import axios from "axios"
import styled from "styled-components"
import like from "../img/heart.png"
import cancel from "../img/cancel.png"

const DivContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 300px;
`

const DivProfile = styled.div`
    display: flex;
    flex-direction: column; 
    padding: 6px;
    margin-bottom: 12px;
    background: #E7F2F8;
    border-radius: 24px;
    width: 100%;
    height: 52vh;
`

const Imagem = styled.img`
    width: 300px;
    height: 30vh;
    margin: 6px 0;
    border-radius: 24px;
`

const Bio = styled.h3`
    align-self: center;
    height: 8vh;
`

const H2 = styled.h2`
    height: 10vh;
`

const DivBotoes = styled.div`
    display: flex;
    justify-content: space-evenly;
`

const Icon = styled.img`
    width: 20%;
    height: 6vh;
:hover{
    cursor: pointer;
    transform: scale(1.2,1.2);
    transition: all 0.5s;
}
`

const Home = () => {
    const [profile, setProfile] = useState({})

    useEffect(() => {
        getProfile()
    },[])

    const getProfile = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:joao/person",)
        .then((res) => {
            setProfile(res.data.profile)
        }).catch((err) => {
            console.log(err)
        })
    }

    const chooseMatches = (id) => {
        const body = {
            id: profile.id,
            choice: id
        } 
        axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:joao/choose-person", body)
        .then((res) => {
            if(res.data.isMatch === true){
                alert("Match! Essa pessoa se interessou por você assim como você se interessou por ela! Vá na lista de matches e chame ela pra bater um papo!")
                getProfile()
            } else if (res.data.isMatch === false){
                getProfile()
            }
        }).catch((err) => {
            console.log(err)
        })
    }


    return  <DivContainer>
            {profile &&
            <DivProfile>
            <Imagem src={profile.photo} alt="Foto"/> 
            <H2>{profile.name}, {profile.age}</H2>
            <Bio>{profile.bio}</Bio>
            </DivProfile>
            }
            <DivBotoes>
            <Icon src={cancel} onClick={() => getProfile()}></Icon>
            <Icon src={like} onClick={() => chooseMatches(true)}></Icon>
            </DivBotoes>
            </DivContainer>
}
export default Home