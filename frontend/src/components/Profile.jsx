import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./games.css";


const Profile = ({activeUser}) => {
    console.log(activeUser.currentGames)
    const {_id, currentGames, completedGames } = activeUser
    console.log(currentGames)
    console.log(completedGames)
    return (
        <div className='profile'>
            <main>
                <h2>Profile</h2>
                <h3>Current Games</h3>
                {/* <ul> */}
                    <div className="container">
                    <div className="gamecard d-flex flex-wrap justify-content-evenly align-content-start"   >
                    {currentGames.map((game, index) => (
                        // <li key={index}>
                        <div key={index} className="cardli bg-dark m-1" >
                            <div className="card bg-dark text-white border">
                            <Link className="link-light text-decoration-none" to={`/games/${game._id}`}>
                                <img src={game.image} alt='game' className="card-img-top border" />
                                <div className="card-body text-center">{game.name}</div>
                                </Link>  
                        {/* // </li> */}
                            </div>
                        </div>
                    ))}
                    </div>
                    </div>
                {/* </ul> */}
                <h3>Completed Games</h3>
                <ul>
                    {completedGames.map((game, index) => (
                        <li key={index}>
                            <Link to={`/games/${game._id}`}>
                            <img src={game.image} alt='game' className="card-" /> 
                                {game.image}</Link>
                        </li>                
                    ))}
                </ul>
            </main>
        </div>
  )
}

export default Profile