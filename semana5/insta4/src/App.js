import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
    state = {
      posts: [
        {
        nomeUsuario:"paulinha",
        fotoUsuario:"https://picsum.photos/50/50",
        fotoPost:"https://picsum.photos/200/150"
        },

        {
          nomeUsuario:'guiba',
          fotoUsuario:'https://image.flaticon.com/icons/png/512/17/17004.png',
          fotoPost:'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg'
        },

        {
          nomeUsuario:'jatoba',
          fotoUsuario:'https://i.pinimg.com/564x/4e/b7/9c/4eb79c72f3c6f88c6713a853b3504634.jpg',
          fotoPost:'https://st2.depositphotos.com/6544740/9337/i/600/depositphotos_93376372-stock-photo-sunset-over-sea-pier.jpg'
        }
      ],
      
    }

    adicionaPost = () => {
      const novoPost = {
        nomeUsuario: this.state.valorInputNome,
        fotoUsuario: this.state.valorInputFoto,
        fotoPost: this.state.valorInputPost
      }
      const novosPosts = [...this.state.posts, novoPost]
      this.setState({posts: novosPosts})

      this.setState({ valorInputNome: "" })
      this.setState({ valorInputFoto: "" })
      this.setState({ valorInputPost: "" })
    }

    onChangeInputNome = (event) => {
      this.setState({ valorInputNome: event.target.value });
    };
  
    onChangeInputFoto = (event) => {
      this.setState({ valorInputFoto: event.target.value });
    };
  
    onChangeInputPost = (event) => {
      this.setState({ valorInputPost: event.target.value });
    };

  render() {
    const ListaDeComponentes = this.state.posts.map((post) => {
      return(
        <Post key = {post.nomeUsuario}  
              nomeUsuario = {post.nomeUsuario} 
              fotoUsuario = {post.fotoUsuario}
              fotoPost = {post.fotoPost}
          />
      )
    })

    return(
      <Container>
        <input 
          value={this.state.valorInputNome}
          onChange={this.onChangeInputNome}
          placeholder={"Nome"}
        />
        <input 
          value={this.state.valorInputFoto}
          onChange={this.onChangeInputFoto}
          placeholder={"Foto de Usuário"}
        />
        <input 
          value={this.state.valorInputPost}
          onChange={this.onChangeInputPost}
          placeholder={"Foto do seu post"}
        />
        <button onClick={this.adicionaPost}> Postar! </button>
      {ListaDeComponentes} 
      </Container>
    )
  }
}

export default App;