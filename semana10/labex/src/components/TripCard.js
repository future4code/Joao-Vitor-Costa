import React from "react"
import styled from "styled-components"
import lixo from "../img/lixo.png"
import axios from "axios"
import {goToTripsDetailsPage} from "../routes/coordinator"
import { useHistory } from "react-router"

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 18vw;
    &:hover {
        cursor: pointer;
        background-color: white;
        color: black;
    }
`

const Img = styled.img`
    height: 4vh;
    width: 5vh;
    margin-right: 6px;
    &:hover {
        border-radius: 50%;
        background-color: gray;
        cursor: pointer;
    }
`

export const TripCard = (props) => {
    const {name, tripId, list} = props
    const history = useHistory()

    return <Div onClick={() => goToTripsDetailsPage(history, tripId)}> 
        <p>{name}</p>
        <Img src={lixo}/>
    </Div>
}