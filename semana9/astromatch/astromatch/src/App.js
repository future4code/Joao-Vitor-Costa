import React, {useState} from "react"
import styled from "styled-components"
import Home from "./pages/Home"
import Matches from "./pages/Matches"
import Header from "./components/Header"
import "../src/App.css"

const DivGeral = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  height: 72vh;
  width: 400px;
  border: 3px dotted black;
  background: #FFA384;
  font-family: "Roboto", sans-serif;
  border-radius: 24px;
`

function App() {
  const [page, setPage] = useState("Home")

  const renderPage = () => {
    if(page === "Home"){
      return <Home />
    } else if (page === "Matches") {
      return <Matches />
    }
  }

  const changePage = () => {
    if(page === "Home") {
      setPage("Matches")
    } else if (page === "Matches"){
      setPage("Home")
    }
  }

  const renderHeader = () => {
    if(page === "Home") {
      return <Header changePage={changePage} currentPage={page}
      />
    } else if (page === "Matches") {
      return <Header changePage={changePage} currentPage={page}
      />
    }
  }

  return (
  <DivGeral>
    <DivContainer>
      {renderHeader()}
      {renderPage()}
    </DivContainer>
    </DivGeral>
  )
}

export default App;