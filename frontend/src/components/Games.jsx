import React, { useEffect, useState }  from 'react'
import { Link } from 'react-router-dom'
import "./games.css"
        
const Games = ({ games }) => { // importing games and genres as a prop

    const [ searchInput, setSearchInput ] = useState('')
    const [ filteredGames, setFilteredGames ] = useState(games)

    
    const handleSubmit = (event) => {
        event.preventDefault()
        searchFilter()
    }
    const resetSearch = (evt) => {
        evt.preventDefault()
        setFilteredGames(games)
        setSearchInput('')
    }

    const searchFilter = () => {
      if(searchInput != '') {
          const searchedGames = games.filter(game => game.name.includes(searchInput) || game.name == searchInput.charAt(0).toUpperCase || game.name.includes(searchInput))
          if (searchedGames.length > 0) {
              setFilteredGames(searchedGames)
          } else {
              setFilteredGames([])
          } }
    
      //     console.log((filteredGames[0].genre.name)) // gets the state (games list) as a string fine
      //     console.log((genre)) // gets the genre state as a string fine
      //     const filtered = filteredGames.filter(game => game.genre.name == genre) // states game.genre is undefined
      //     console.log(filtered)
      //     setFilteredGames(filtered)
      // } else {
      //     setFilteredGames(games)
     

  }
    return (
        <>
            <h2>Games list</h2>
            <form className='d-flex justify-content-center'>
                <input 
                    type="text" 
                    placeholder="Search.."
                    onChange={(event) => setSearchInput(event.target.value)}
                    className="m-2"
                />
                <div className='d-flex justify-content-center'>
                  <button className="btn btn-success m-2" onClick={handleSubmit}>Search</button>
                  <button className="btn btn-success m-2" onClick={resetSearch}>Reset Search</button>
                </div>
            </form>
            <div className="container games">
              {filteredGames.length < 1 ? <p className="text-center">Sorry, not games match your search criteria, please try again or select a game from the list below</p>: <></>}
                <div className="gamecard d-flex justify-content-between flex-wrap my-6 py-4">
                    
                {filteredGames.map((game, index) => (
                    <div key={index} className="gameli bg-dark m-1 ">
                        <div className="card col text-center bg-dark text-white" >
                            <Link className="link-light text-decoration-none"  to={`/games/${game._id}`}>
                            <img src={game.image} alt='game' className="card-img-top" />
                            <h5>{game.name}</h5></Link>
                        </div>
                    </div>)
                    )
                }
                </div>
            </div>
          

      </>

  )
}


export default Games