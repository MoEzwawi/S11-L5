// import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row } from 'react-bootstrap'
import Sidebar from './components/SideBar'
import PlayerBottom from './components/PlayerBottom'
import MainSection from './components/MainSection'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Container fluid>
        <Row>
          <Sidebar />
          <main>
            <MainSection />
          </main>
        </Row>
      </Container>
      <PlayerBottom />
    </>
  )
}

export default App
