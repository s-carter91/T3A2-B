import React,  { useState } from 'react'
import { useParams } from 'react-router-dom'

const GameDetails = ({ game, addGame }) => {
    const {game_id} = useParams()
    const [ inPlaying, setPlaying ] = useState(false)

    const handleSubmit = () => {
        addGame(game_id)
        setPlaying(true)
    }

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
                                Add game description to game 
                                For years, humans on this earth have searched far and wide for the best game cataloguing website that uses 
                                the MERN Stack. Look no further than BackloGGo, the superior gaming catalogue site built using the MERN stack.
                            </p>
                            {/* <form onSubmit={handleSubmit}>
                                <input ></input>
                                <button type="submit" className="addGame btn btn-outline-primary" >Add to my games</button>
                            </form> */}
                            {inPlaying ? 
                                <button className='btn-success btn'>✔️</button> :
                                <button type="button" onClick={handleSubmit} className="addGame btn btn-outline-primary" >Add to my games</button>
                                }
                            
                        </div>
                        <div className="col-sm-7">
                        <img src= {game.background_image} className="img-fluid rounded" alt="dummy"/>
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