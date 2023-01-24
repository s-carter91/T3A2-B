import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import GameScreen from './screens/GameScreen'
import HomeScreen from './screens/HomeScreen'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { LinkContainer } from 'react-router-bootstrap'

export const App = () => {
  return (
    <BrowserRouter>
    <div className='d-flex flex-column site-container'>
      <header>
        <Navbar bg="dark" variant="dark">
          <Container>
            <LinkContainer to='/'>
            <Navbar.Brand>Backloggo</Navbar.Brand>
            </LinkContainer>
            
          </Container>

        </Navbar>

        <Link to="/">Backloggo</Link>
      </header>
      <main>
        <Container>
        <Routes>
          <Route path='/game/:slug' element={<GameScreen />} />
          <Route path='/' element={<HomeScreen/>} />
        </Routes>
        </Container>
      </main>
      <footer>
        <div className='text-center'>All rights reserved</div>
      </footer>

    </div>
    </BrowserRouter>
  )
}

export default App
