import React, { useState } from 'react'
import Navbar from './Navbar'
import { Routes, Route, useParams } from 'react-router-dom'
import GameDetails from './GameDetails'
import Games from './Games'
import Home from './Home'
import Profile from './Profile'

const seedGames =[
  {
    "id": 3498,
    "slug": "grand-theft-auto-v",
    "name": "Grand Theft Auto V",
    "released": "2013-09-17",
    "tba": false,
    "background_image": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
    "rating": 4.47,
},
{
    "id": 3939,
    "slug": "payday-2",
    "name": "PAYDAY 2",
    "released": "2013-08-13",
    "tba": false,
    "background_image": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
    "rating": 3.51,
},
{
    "id": 422,
    "slug": "terraria",
    "name": "Terraria",
    "released": "2011-05-16",
    "tba": false,
    "background_image": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
    "rating": 4.05,
},
{
    "id": 4828,
    "slug": "borderlands",
    "name": "Borderlands",
    "released": "2009-10-20",
    "tba": false,
    "background_image": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg",
    "rating": 3.83,
}
]


const App = () => {
  const [games, SetGames] = useState(seedGames)

//HOC
  const ShowGameWrapper = () => {
    const { game_id } = useParams()
    const game_card = games.find(game => game.id == game_id)
    console.log(games);
    return game_card ? <GameDetails game={game_card} /> : <h4>Game not found!</h4>
}



  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/games' element={<Games games={games} />} />
      <Route path='/users' element={<Profile />} />
      <Route path='/games/:game_id' element={<ShowGameWrapper />} />
      <Route path='*' element={<h4>Page not found!</h4>} />
    </Routes> 
    </>
  )
}

export default App
