import React, { useEffect, useState }  from 'react'
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
        
const Games = (props) => {

    const [games, setGames] = useState([
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
    ]);

  return (
    <>
        <h2>Games list</h2>
        <div className="container">
        <ul>
        {games.map((game, index)=> <div className="gameli"><li key={index} className="game m-4" >
            <img src={game.background_image} alt='game' />
        </li></div>)}
        </ul>  
        </div>
        

    </>

  )
}


export default Games