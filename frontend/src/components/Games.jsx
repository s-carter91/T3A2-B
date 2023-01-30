import React, { useState }  from 'react'


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
    ]);

  return (
    <>
        <h2>Games list</h2>
        <div className="container">
        {games.map((game, index)=> <div key={index} className="row d-flex m-3" >
            <img src={game.background_image} width={50} alt='game' />
        </div>)}    
        </div>
        

    </>

  )
}

export default Games