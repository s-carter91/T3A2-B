import React, { useEffect, useState }  from 'react'
import { Link } from 'react-router-dom'
import "./games.css";
        
const Games = ( { games } ) => {


  return (
    <>
        <h2>Games list</h2>
        <div className="container">
        {/* <ul> */}
        <div className="row my-4 px-5 d-flex justify-content-around">
        {games.map((game, index) => (
            <div key={index} className="gameli col">
                {/* <li key={index} className="game m-4" > */}
                <div className="card" >
                <Link to={`/games/${game._id}`}>
                <img src={game.image} alt='game' className="card-img-top" />
                {game.name}</Link>
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