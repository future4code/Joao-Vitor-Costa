import React, {useEffect, useState} from "react"
import { useHistory } from "react-router-dom";
import axios from "axios"
import styled from "styled-components"
import {Button, Input, Select} from "../components/Estilization"
import fundo from "../img/fundo.jpg"
import {useForm} from "../hooks/useForm"

const DivContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${fundo});
  background-size: 100%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
`;

const Form = styled.form`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: white;
`

const ApplicationFormPage = () => {
  const history = useHistory()

  useEffect(() => {
    list()
    countriesList()
  },[])

  const initialState = {
    name: "",
    age: "",
    applicationText:"",
    profession: "",
    country: ""
  }
  const [trips, setTrips] = useState([])
  const [form, onChange] = useForm(initialState)
  const [countries, setCountries] = useState([]);

  const apply = (id) => {
    const body = {
      "name": form.name,
      "age": form.age,
      "apliccationText": form.applicationText,
      "profession": form.profession,
      "country": form.country
    }

    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-vitor-alves-cruz/trips/${id}/apply`, body)
    .then((res) => {
      alert("VocÊ aplicou para essa vaga!")
    }).catch((err) => {
      console.log(err)
    })
  }

  const list = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-vitor-alves-cruz/trips"
      )
      .then((res) => {
        setTrips(res.data.trips);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const countriesList = () => {
    axios
      .get("https://servicodados.ibge.gov.br/api/v1/localidades/paises")
      .then((res) => {
        setCountries(res.data);
      })
      .catch((err) => {
        alert("Erro!");
      });
  };

  const filteredList = trips.map((trip) => {
    return <option> {trip.name} </option>
  })

  const filteredCountries = countries.map((country) => {
    return <option key={country.nome}> {country.nome} </option>;
  });

  return (
    <DivContainer>
      <h1>ApplicationFormPage</h1>
      <Form>

      <Select 
      required
      >
        <option>Escolha a viagem</option>
        {filteredList}
      </Select>  


      <Select required name="country">
          <option>Escolha um planeta</option>
          {filteredCountries}
        </Select>


      <Input 
      required
      name = "name"
      placeholder={"Nome"}
      value = {form.name}
      onChange={onChange}>
      </Input>

      <Input 
      required
      name = "age"
      min = "18" 
      placeholder={"Idade"} 
      type="number"
      value = {form.age}
      onChange={onChange}>
      </Input>

      <Input 
      required
      name = "applicationText"
      placeholder={"Texto de candidatura"}
      type = "text"
      value = {form.applicationText}
      onChange={onChange}>
      </Input>

      <Input 
      required
      type = "text"
      name = "profession"
      placeholder={"Profissão"}
      value = {form.profession}
      onChange={onChange}>
      </Input>






      <div>
      <Button onClick={history.goBack}> voltar </Button>
      <Button>Enviar</Button>
      </div>
      </Form>
    </DivContainer>
  );
}

export default ApplicationFormPage; 