import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const Profile = ({activeUser}) => {
    const {_id, currentGames, completedGames } = activeUser
    console.log(currentGames)
    console.log(completedGames)
    return (
        <div className='profile'>
            <main>
                <h2>Profile</h2>
                <h3>Current Games</h3>
                <ul>
                    {currentGames.map((game, index) => (
                        <li key={index}>
                            <Link to={`/games/${game}`}>{game.name}</Link>  
                        </li>
                    ))}
                </ul>
                <h3>Completed Games</h3>
                <ul>
                    {completedGames.map((game, index) => (
                        <li key={index}>
                            <Link to={`/games/${game}`}>{game.name}</Link>
                        </li>                
                    ))}
                </ul>
            </main>
        </div>
  )
}

export default Profile