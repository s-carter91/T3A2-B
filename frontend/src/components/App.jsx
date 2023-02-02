import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Routes, Route, useParams, useNavigate } from 'react-router-dom'
import GameDetails from './GameDetails'
import Games from './Games'
import Home from './Home'
import Profile from './Profile'
import NewReview from './NewReview'

// const seedGames =[
//   {
//     "id": 3498,
//     "slug": "grand-theft-auto-v",
//     "name": "Grand Theft Auto V",
//     "released": "2013-09-17",
//     "tba": false,
//     "background_image": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
//     "rating": 4.47,
// },
// {
//     "id": 3939,
//     "slug": "payday-2",
//     "name": "PAYDAY 2",
//     "released": "2013-08-13",
//     "tba": false,
//     "background_image": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
//     "rating": 3.51,
// },
// {
//     "id": 422,
//     "slug": "terraria",
//     "name": "Terraria",
//     "released": "2011-05-16",
//     "tba": false,
//     "background_image": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
//     "rating": 4.05,
// },
// {
//     "id": 4828,
//     "slug": "borderlands",
//     "name": "Borderlands",
//     "released": "2009-10-20",
//     "tba": false,
//     "background_image": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg",
//     "rating": 3.83,
// }
// ]


const App = () => {
  const nav = useNavigate()
  const [games, setGames] = useState([])
  const [ reviews, setReview ] = useState([])
  const [ err, setErr ] = useState(false)
  const [usersCurrentGamesState, setUsersCurrentGames] = useState([])
  const [ users, setUsers] = useState([])

//HOC
  const ShowGameWrapper = () => {
    const { game_id } = useParams()
    const game_card = games.find(game => game.id == game_id)
    console.log(games);
    return game_card ? <GameDetails game={game_card} addGame={addGame} users={users}  /> : <h4>Game not found!</h4>
}

  useEffect(() => {
    // fetch the "user"
    async function getUsers() {
      const res = await fetch("http://localhost:4002/users")
      const data = await res.json()
      setUsers(data)
    }
    getUsers()
    // set userState to that user
    // set usersCurrentGamesState
  },[])

  useEffect(() => {
    async function getGames() {
      const res = await fetch("http://localhost:4002/games")
      const data = await res.json()
      setGames(data)
      }
      getGames
    // fetch the "games"
    // set the gamesState to that list of games
  },[])

  const addGame = async (game_id) => {
    console.log(game_id)
    /// DEBUG
    /// ADD USER_ID TO /USERS/
    let response = await fetch('http://localhost:4002/users/playing',{ 
        method: 'PATCH',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({game_id: game_id})
    })
    const data = await response.json()
    console.log(data)
    setUsersCurrentGames([...usersCurrentGamesState, data])
  }

  return (
    <>
    <Navbar />
    {err && alert(err)}
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/games' element={<Games games={games} />} />
      <Route path='/users' element={<Profile />} />
      <Route path='/games/:game_id' element={<ShowGameWrapper />} />
      <Route path='/games/:game_Id/addreview' element={<NewReview />} />
      <Route path='*' element={<h4>Page not found!</h4>} />
    </Routes> 
    </>
  )
}

export default App
