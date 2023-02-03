import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Routes, Route, useParams, useNavigate } from 'react-router-dom'
import GameDetails from './GameDetails'
import Games from './Games'
import Home from './Home'
import Profile from './Profile'
import NewReview from './NewReview'


const App = () => {
  const nav = useNavigate()
  const [ games, setGames ] = useState([])
  const [ reviews, setReview ] = useState([])
  const [ err, setErr ] = useState(false)
  const [usersCurrentGamesState, setUsersCurrentGames] = useState([])
  // const [ users, setUsers] = useState('')
  const [ activeUser, setActiveUser] = useState(null)

//HOC
  const ShowGameWrapper = () => {
    const { game_id } = useParams()
    const game_card = games.find(game => game._id == game_id)
    return game_card ? <GameDetails game={game_card} addGame={addGame} 
      activeUser={activeUser}  
    /> : <h4>Game not found!</h4>
}

  //Fetch the games
  useEffect(() => {
    async function getGames() {
      const res = await fetch("http://localhost:4002/games")
      const data = await res.json()
      setGames(data)
      }
      getGames()
    // fetch the "games"
    // set the gamesState to that list of games
  },[])


//Fetch the user
useEffect(() => {
    // fetch the "user"
    async function getActiveUser() {
      const res = await fetch("http://localhost:4002/users/")
      const data = await res.json()
      console.log(data)
      setActiveUser(data)
      setUsersCurrentGames(data.currentGames)
    }
    getActiveUser()
    // set userState to that user
    // set usersCurrentGamesState
  },[])

  const addGame = async (game_id) => {
    /// DEBUG
    /// ADD USER_ID TO /USERS/
    let response = await fetch(`http://localhost:4002/users/${activeUser._id}/playing`,{ 
        method: 'PATCH',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({game_id: game_id})
    })
    const data = await response.json()
    setUsersCurrentGames([...usersCurrentGamesState, data])
  }

  return (
    <>
    <Navbar activeUser={activeUser} />
    {err && alert(err)}
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/games' element={<Games games={games} />} />
      <Route path='/my_profile' element={<Profile activeUser={activeUser} />} />
      <Route path='/games/:game_id' element={<ShowGameWrapper />} />
      <Route path='/games/:game_Id/addreview' element={<NewReview />} />
      <Route path='*' element={<h4>Page not found!</h4>} />
    </Routes> 
    </>
  )
}

export default App
