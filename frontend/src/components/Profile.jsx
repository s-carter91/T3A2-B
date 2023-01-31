import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const Profile = () => {

  const [playingGames, setPlaying] = useState([])

  const [completedGames, setCompleted] = useState([])

    useEffect(() => {
      async function fetchPlaying() {
        const res = await fetch('http://localhost:4002/users/playing')
        const data = await res.json()
        setPlaying(data)
      }
      fetchPlaying()
    }, [])

    useEffect(() => {
      async function fetchCompleted() {
        const res = await fetch('http://localhost:4002/users/completed')
        const data = await res.json()
        setCompleted(data)
      }
      fetchCompleted()
    }, [])

    return (
        <div className='profile'>
        <main>
            <h2>Profile</h2>



            <h3>Current Games</h3>
            <ul>
                {playingGames.map((game, index) => (
                    <li key={index}>
                        <Link to={`/games/${game}`}>{game}</Link>  
                    </li>
                ))}
            </ul>
            <h3>Completed Games</h3>
            <ul>
                {completedGames.map((game, index) => (
                    <li key={index}>
                        <Link to={`/games/${game}`}>{game}</Link>
                    </li>                
                ))}
            </ul>
        </main>
        </div>

  )
}

export default Profile