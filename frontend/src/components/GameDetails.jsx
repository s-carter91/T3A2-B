import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import NewRating from './NewRating'

const GameDetails = ({ game, addGame, activeUser, removeGame }) => {
    const {game_id} = useParams()
    const [ inPlaying, setPlaying ] = useState(false)
    const [ rating, setRating ] = useState(null)
    const [ reloadRating, setReloadRating ] = useState(null)
    const [ displayReview, setDisplayReview ] = useState(null)

    const handleDelete= () =>{
        removeGame(game_id)
        setPlaying(false)
    }


    const handleSubmit = () => {
        addGame(game_id)
        setPlaying(true)
        
    }

    // Fetches review to display on page
    useEffect(() => {
        async function getReview() {
            const res = await fetch(`https://t3a2-b-server-production.up.railway.app/reviews/${game_id}`)
            const data = await res.json()
            if (data.length>0) {
                setDisplayReview(data[0])          
            }
        }
        getReview()
    },[])
    
    // Fetches ratings (if there are any) and provides the average rating of a game
    useEffect(() => {
        async function getRatings() {
            const res = await fetch(`https://t3a2-b-server-production.up.railway.app/ratings/stars/${game_id}`)
            const data = await res.json()
            if (data.length > 0) {
                const avg =
                    data.reduce((sum, curr) => sum + Number(curr), 0) /
                    data.length
                setRating(avg.toFixed(1))
            } else {

            }
        }
            getRatings()
    },[reloadRating])

  return (
    <>
        <h5>{game.name}</h5>
        
        <div className= "Home">
            <main>
            <div className="row">
                <div className="container">
                    <div className="row px-4 my-5">
                        <div className="col-sm-5">
                            <h1 className="font-weigh-light text-center">{game.name}</h1>
                            <p className='mt-4 text-start'>
                                {game.description}
                            </p>
                            {/* <form onSubmit={handleSubmit}>
                                <input ></input>
                                <button type="submit" className="addGame btn btn-outline-primary" >Add to my games</button>
                            </form> */}
                            {activeUser ?
                            <>
                            <div className='p-1'>
                            {inPlaying ? 
                                <button type="button" onClick={handleDelete} className='btn-success btn'>Remove from your playing List</button> :
                                <button type="button" onClick={handleSubmit} className="addGame btn btn-outline-primary" >Add to my games</button>
                                }
                            </div>

                            <div className='p-1'>

                                <button type="button" onClick={handleDelete} className="deleteGame btn btn-outline-primary" >Remove from my games</button>
                            
                            </div>
                            
                            <div className='p-1'>
                                <Link to={`/games/${game_id}/addreview`}>
                                    <button type="button" className="btn btn-outline-primary" >Post a Review</button>
                                </Link>
                            </div>
                            
                            <div>
                                <h4 className='pt-1'>Rate {game.name}</h4>
                                <NewRating activeUser={activeUser} setReloadRating={setReloadRating}/>
                            </div>
                            </> :
                            <>
                            </>
                            }
                            <div className='text-warning'>
                                {rating ?
                                    <p>{game.name} has an average rating of {rating} &#9734; based off site users</p> :
                                    <p>{game.name} currently has no ratings from users on the site. Be the first by sending a rating above!</p>
                                }
                            </div>
                        </div>
                            <div className="col-sm-7">
                                <img src= {game.image} className="img-fluid rounded" alt="dummy"/>
                            </div>

        
                                <div className="row">
                                    <div className="card text-center bg-secondary text-white my-5 py-4">
                                        <div className="card-body">
                                            <h3>Reviews of {game.name} by other users on BackloGGo</h3>
                                            {displayReview ? <p>{displayReview.content}</p>:
                                            <p>This games doesn't have any reviews... yet!</p>}
                                    
                                    </div>
                                </div>
                                <div className="row">
                                    {/* <div className="flex flex-col md:flex-row items-center justify-center"> */}
                                        <div className='col bg-secondary text-white'>
                                            
                                        </div>
                                        <div className='col'>
                                            
                                        </div>
                                        <div className='col'>
                                            
                                        </div>

                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </main>
        
    </div>
    </>
  )}

export default GameDetails