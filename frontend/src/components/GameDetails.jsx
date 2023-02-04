import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import NewRating from './NewRating'

const GameDetails = ({ game, addGame, activeUser }) => {
    const {game_id} = useParams()
    const [ inPlaying, setPlaying ] = useState(false)
    const [ rating, setRating ] = useState('')
    

    const handleSubmit = () => {
        addGame(game_id)
        console.log('truers')
        setPlaying(true)
        
    }


    

useEffect(() => {
    async function getRatings() {
        const res = await fetch(`http://localhost:4002/ratings/stars/${game_id}`)
        const data = await res.json()
        console.log(data)
        const avg =
            data.reduce((sum, curr) => sum + Number(curr), 0) /
            data.length
        setRating(avg.toFixed(1))
        }
        getRatings()
    // fetch the "games"
    // set the gamesState to that list of games
  },[])

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
                            <p className='mt-4 text-center'>
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
                                <button className='btn-success btn'>✔️</button> :
                                <button type="button" onClick={handleSubmit} className="addGame btn btn-outline-primary" >Add to my games</button>
                                }
                            </div>
                            
                            <div className='p-1'>
                                <Link to={`/games/${game_id}/addreview`}>
                                    <button type="button" className="btn btn-outline-primary" >Post a Review</button>
                                </Link>
                            </div>
                            
                            <div>
                                <p >Rate the {game.name}</p>
                                <NewRating activeUser={activeUser}/>
                            </div>
                            </> :
                            <>
                            </>
                            }
                            <div>
                                <p>{game.name} has an average rating of {rating} &#9734; based off site users</p>
                            </div>
                        </div>
                        <div className="col-sm-7">
                            <img src= {game.image} className="img-fluid rounded" alt="dummy"/>
                        </div>

                        
                                <div className="row">
                                <div className="card text-center bg-secondary text-white my-5 py-4">
                                    <div className="card-body">
                                    {game.rating}
                                    
                                    </div>
                                </div>
                                <div className="row">
                                    {/* <div className="flex flex-col md:flex-row items-center justify-center"> */}
                                        <div className='col bg-secondary text-white'>
                                            1
                                        </div>
                                        <div className='col'>
                                            2
                                        </div>
                                        <div className='col'>
                                            3
                                        </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        <footer className="py-5 my-5 bg-dark">
            <div className="container px-4">
                <p className="text-center text-white">Copyright &copy; BackloGGo 2023</p>
            </div>
        </footer>
    </div>
    </>
  )}

export default GameDetails