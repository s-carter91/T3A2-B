import React, { useEffect, useState } from 'react'
import dotenv from 'dotenv'
import Navbar from './Navbar'
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate } from 'react-router-dom'
import GameDetails from './GameDetails'
import Games from './Games'
import Home from './Home'
import Profile from './Profile'
import NewReview from './NewReview'
import SignUp from './SignUp'
import Login from './LoginNew'
import Logout from './Logout'
import Footer from './Footer'
import "../App.css"
dotenv.config()

api_address = "https://t3a2-b-server-production.up.railway.app"


const App = () => {
  const nav = useNavigate()
  const [ games, setGames ] = useState([]) // getting all games
  const [ gameName, setGameName] = useState() // getting game to pass to new review
  // const [ reviews, setReview ] = useState([])
  const [ err, setErr ] = useState(false)
  const [ usersCurrentGamesState, setUsersCurrentGames] = useState([])
  // const [ users, setUsers] = useState('')
  const [ activeUser, setActiveUser] = useState(null) // getting the active user
  const [ token, setToken ] = useState(localStorage.getItem('token') || null) 
  const [ reloadReview, setReloadReview ] = useState(null)


//HOC
  const ShowGameWrapper = () => {
    const { game_id } = useParams()
    const game_card = games.find(game => game._id == game_id)
    return game_card ? <GameDetails game={game_card} addGame={addGame} removeGame={removeGame} activeUser={activeUser}
    /> : <h4>Game not found!</h4>
}

  // Fetch the games
  useEffect(() => {
    async function getGames() {
      const res = await fetch(`${api_address}/games`)
      const data = await res.json()
      setGames(data)
      }
      getGames()
    // fetch the "games"
    // set the gamesState to that list of games
  },[])



  useEffect(() => {
      async function checkForToken() {
          const token = localStorage.getItem('token') 
          console.log(`${token} this is the token`)
          if (token && token.length > 10) {
              const res = await fetch(`${api_address}/auth/loggedin`, {
              headers: {
                  "Authorization": `Bearer ${token}`
              }}) 
              const data = await res.json()
              setActiveUser(data)
          } else {
            console.log('No token found. Please stop reading the console and login!')
          }
      }
      checkForToken()
  }, [usersCurrentGamesState])
  
  //Add game function
  const addGame = async (gameId) => {

    let response = await fetch(`${api_address}/users/${activeUser._id}/playing`,{ 
        method: 'PATCH',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({ gameId: gameId })
    })
    const data = await response.json()
    console.log(data)
    setUsersCurrentGames([...usersCurrentGamesState, data])
  }

  //Remove game function
  const removeGame = async (gameId) => {

    let response = await fetch(`${api_address}/users/${activeUser._id}/playing`,{ 
        method: 'DELETE',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({ gameId: gameId })
    })
    const data = await response.json()
    console.log(data)
    setUsersCurrentGames([...usersCurrentGamesState, data])
  }

  return (
    <>
  <div className="app">
    <div className='page-container'>
      <div className='content-wrapper'>
    <Navbar activeUser={activeUser} />
    {err && alert(err)}
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login setActiveUser={setActiveUser} setToken={setToken}/>} />
      <Route path='/signup' element={<SignUp setActiveUser={setActiveUser} setToken={setToken}/>} />
      <Route path='/logout' element={<Logout setToken={setToken} setActiveUser={setActiveUser} nav ={nav}/>} />
      <Route path='/games' element={<Games games={games} />} />
      <Route path='/my_profile' element={<Profile activeUser={activeUser} />} />
      <Route path='/games/:game_id' element={<ShowGameWrapper />} />
      <Route path='/games/:game_Id/addreview' element={<NewReview activeUser={activeUser} games={games} setReloadReview={setReloadReview}/>} />
      <Route path='*' element={<h4>Page not found!</h4>} />
    </Routes>
    </div>
    <Footer />
    </div>
  </div>
    </>
  )
}

export default App
