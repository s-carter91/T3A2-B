import React, { useEffect, useState }  from 'react'
import { Link } from 'react-router-dom'
import "./games.css";
        
const Games = ( { games } ) => {


  return (
    <>
        <h2>Games list</h2>
        <div className="container d-flex">
        {/* <ul> */}
        <div className="gamecard row">
        {games.map((game, index) => (
            <div key={index} className="gameli col">
                {/* <li key={index} className="game m-4" > */}
                <div className="card col" >
                <Link to={`/games/${game._id}`}>
                <img src={game.image} alt='game' className="card-img-top" />
                <h4>{game.name}</h4></Link>
</div>
                    
                {/* </li> */}
            </div>)
            )
        }
        {/* </ul>   */}
        </div>
        </div>
        

    </>

  )
}


export default Games