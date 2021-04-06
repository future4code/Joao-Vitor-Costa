import React, { useState, useEffect } from "react";
import axios from "axios";
import PokeCard from "./components/index";
import styled from "styled-components"

const DivContainer = styled.div`
margin: auto;
width: 300px;
`

const App = () => {
  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState("")

  useEffect(() => {
    const getPoke = () => {
      const url = "https://pokeapi.co/api/v2/pokemon/?limit=151"
      axios
      .get(url)
      .then(response => {
        setPokeList(response.data.results) 
      })
      .catch(err => {
        console.log(err);
      })}
      getPoke()
    }, [pokeList])

  const changePokeName = (event) => {
    setPokeName(event.target.value) 
  };

    return (
      <DivContainer>
        <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {pokeName && <PokeCard pokemon={pokeName} />}
      </DivContainer>
    );
  
}

export default App;