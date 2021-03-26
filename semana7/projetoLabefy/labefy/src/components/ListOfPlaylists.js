import styled from "styled-components"
import axios from "axios"
import React from "react"
import lixo from "../img/lixo.png"

const Item = styled.li`
    color: white;
`

const Lixo = styled.img`
width: 20px;
height: 20px;
margin-left: 5px;
&:hover {
    cursor: pointer;
}
`

const ListaPlaylist = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    overflow: auto;
`

const Playlist = styled.div`
    display:flex;
    padding: 10px;
`

const Titulo = styled.h1`
    color: white;
`


class ListOfPlaylists extends React.Component {

    state = {
        playlists: [],
    }

    componentDidMount = () => {
        this.getPlaylist()
    }

    getPlaylist = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
            headers: {
                Authorization: "joao-vitor-alves-cruz"
            }
        }
        )
        .then((res) => {
            this.setState({playlists: res.data.result.list})
        })
    }

    delPlaylist = (playlistId) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`, 
        {
            headers: {
                Authorization: "joao-vitor-alves-cruz"
            }
        }).then((res) => {
            alert("Playlist deletada!")
            this.getPlaylist()
        })
        .catch((e) => {
            alert("Ocorreu um erro! Estamos trabalhando para resolver o problema!")
            console.log(e.data)
        })
    }

  render() {
    const playlistList = this.state.playlists.map((play) => ( 
        <Playlist>
            <Item key={play.id}>{play.name}</Item> <Lixo src={lixo} onClick={() => this.delPlaylist(play.id)}></Lixo>
        </Playlist>
        ))

    return(
      <ListaPlaylist>
          <Titulo>Playlists criadas</Titulo>
          <ul>
              {playlistList}
          </ul>
      </ListaPlaylist>
    )
  }
}
export default ListOfPlaylists