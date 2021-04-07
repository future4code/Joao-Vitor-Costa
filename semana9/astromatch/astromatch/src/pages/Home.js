import React, {useEffect, useState} from "react"
import axios from "axios"
import styled from "styled-components"

const DivContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const DivProfile = styled.div`
    display: flex;
    flex-direction: column;
    flex-direction: center;
    align-items: center;
`

const Imagem = styled.img`
    width: 300px;
    height: 300px;;
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
            <h1>{profile.name}, {profile.age}</h1>
            <h3>{profile.bio}</h3>
            </DivProfile>
            }
            <div>
            <button onClick={() => chooseMatches(true)}>❤</button>
            <button onClick={() => getProfile()}>X</button>
            </div>
            </DivContainer>
}
export default Home