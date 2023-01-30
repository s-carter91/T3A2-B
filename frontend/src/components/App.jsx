import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import GameDetails from './GameDetails'
import Games from './Games'
import Home from './Home'
import Layout from './Layout'
import Profile from './Profile'

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/games' element={<Games />} />
      <Route path='/users' element={<Profile />} />
      <Route path='/games/:id' element={<GameDetails />} />
      <Route path='*' element={<h4>Page not found!</h4>} />
    </Routes> 
    {/* <Home />
    <Games />
    <Profile /> */}
    </>
    

  )
}

export default App
