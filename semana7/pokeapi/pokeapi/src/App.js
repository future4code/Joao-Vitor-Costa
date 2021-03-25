import React from "react";
import axios from "axios";
import styled from "styled-components";

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BotaoDaDiversao = styled.button`
  width: 200px;
  height: 20px;
`

const DivImagem = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
`

export default class App extends React.Component {

  state = {
    activity : {},
    pokemon: [],
    imagemPokemon: ""
  }

  componentDidMount = () => {
    this.pegarPokemons()
  }

  pegarPokemons = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151",)
    .then((res) => {
      this.setState({pokemon: res.data.results})
    }).catch((err) => {
      console.log(err)
    })
  }

pegarImagem = (nome) => {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${nome}`)
  .then((res) => {
    this.setState({imagemPokemon: res.data.sprites.front_default})
  }).catch((err) => {
    console.log(err)
  }) 
}

mudaSelect = (e) => {
  const nomePokemon = e.target.value
  this.pegarImagem(nomePokemon)
}

  pegarAtividades = () => {
    axios.get("https://www.boredapi.com/api/activity/",)
    .then((res) => {
      this.setState({activity: res.data})
    }).catch((err) => {
      console.log(err.data)
    })
  }


  render() {
    const {activity, type, participants, price, accessibility} = (
    this.state.activity )

    return (
      <DivContainer>
        <h1>Está entediado?</h1>
        <BotaoDaDiversao onClick={this.pegarAtividades}> Clique aqui!!! </BotaoDaDiversao>
        <p>Atividade: {activity}</p>
        <p>Tipo de Atividade: {type}</p>
        <p>Quantidade de participantes: {participants}</p>
        <p>Preço: {price}</p>
        <p>Acessibilidade: {accessibility}</p>

        <h1>Chame seu pokemon preferido para realizar a tarefa com você!</h1>
          <select onChange={this.mudaSelect}>
          <option value={"Qual seu pokemon preferido?"}></option>
          {this.state.pokemon.map((poke) => {
                return (
                  <option key={poke.name} value={poke.name}>
                    {poke.name}
                  </option>
                );
              })}
          </select>
          {this.state.imagemPokemon && (
            <DivImagem>
            <img alt={"imagem_pokemon"} src={this.state.imagemPokemon} />
            <p>Vamos lá! Vou te ajudar a sair do tédio!</p>
            </DivImagem>
          )}
      </DivContainer>
    );
  }
}
