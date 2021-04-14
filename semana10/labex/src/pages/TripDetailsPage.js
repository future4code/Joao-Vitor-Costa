import React, {useEffect, useState} from "react"
import { useHistory, useParams } from "react-router-dom";
import axios from "axios"
import styled from "styled-components"
import {useProtectedPage} from "../hooks/useProtectedPages"
import { goToAdminHomePage } from "../routes/coordinator";

const TripsDetailsPage = () => {
  useProtectedPage()
  const [trip, setTrip] = useState({})
  const history = useHistory()
  const { id } = useParams()

  useEffect(() => {
    tripDetails(id)
  }, [])

  const tripDetails = (id) => {
    const token = window.localStorage.getItem("token")
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-vitor-alves-cruz/trip/${id}`,
    {
      headers: {
        auth: token
      }
    }
  )
    .then((res) => {
      setTrip(res.data.trip)
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div>
      <h1>TripsDetailsPage</h1>
      <button onClick={() => goToAdminHomePage(history)}> voltar </button>
      <p>{trip.name}</p>
      <p>{trip.date}</p>
    </div>
  );
}

export default TripsDetailsPage;