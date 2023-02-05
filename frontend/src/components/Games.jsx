import React, { useEffect, useState }  from 'react'
import { Link } from 'react-router-dom'
import "./games.css";
        
const Games = ( { games } ) => {


  return (
    <>
        <h2>Games list</h2>
        <div className="container games">
        {/* <ul> */}
        <div className="gamecard d-flex justify-content-between flex-wrap my-6 py-4">
        {games.map((game, index) => (
            <div key={index} className="gameli bg-dark m-1 ">
                {/* <li key={index} className="game m-4" > */}
                <div className="card col text-center bg-dark text-white" >
                <Link className="link-light text-decoration-none"  to={`/games/${game._id}`}>
                <img src={game.image} alt='game' className="card-img-top" />
                <h5>{game.name}</h5></Link>
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