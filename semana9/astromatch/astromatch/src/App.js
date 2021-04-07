import React, {useState} from "react"
import styled from "styled-components"
import Home from "./pages/Home"
import Matches from "./pages/Matches"
import Header from "./components/Header"

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  height: 100vh;
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
    <DivContainer>
      {renderHeader()}
      {renderPage()}
    </DivContainer>
  )
}

export default App;