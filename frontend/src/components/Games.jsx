import React, { useEffect, useState }  from 'react'
import { Link } from 'react-router-dom'
import "./games.css";
// import Game from './GameCard'


// const URL = "http://localhost:4002/games";

// const Games = () => {
//     const [games, setGames] = useState();
    
//     useEffect(() => {
//         async function fetchGames() {
//             const res = await fetch(URL)
//             const data = await res.json()
//             setGames(data)

//         }
//         fetchGames()
//         }, []);

        


//         return(
//             <div>
//             <div>
//             <ul>
//                 {games 
//                 && games.map((game, index) => (
//                     <div key={index}>
//                         <Game game={game}/>
//                     </div>
//                 ))}
//             </ul>    
//         </div>    
//             </div>
//         )

// }
        
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