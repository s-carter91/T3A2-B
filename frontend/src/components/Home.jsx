import React from 'react'
import { Container } from 'react-bootstrap'
import CardItem  from './Card'
import NewRating from './NewRating'
import { Link } from 'react-router-dom'

const carddata = {gamesCard: [
    {
        title: "Games",
        info: "This is where you come to game",
        icon: ['/view.svg', '/search1.svg', '/filter.svg'],
        alt: ['view icon', 'search icon', 'filter icon'],
        description: [' - View a Large Catalogue of Games', ' - Search to Find the Games For You', ' - Filter to discover new games']
    },
    {
        title: "Profile",
        info: "This is where you come to view your profile",
        icon: ['/game.svg', '/check.svg', '/star.svg'],
        alt: ['game icon', 'check icon', 'star icon'],
        description: [' - View Saved Games on Your Profile', ' - Check of Completed Games', ' - Rate and Review Games']
    }
]}

const Home = () => {

    return (
        <div className= "Home">
            <main>
            <div className="row">
                <div className="container">
                    <div className="row px-4 my-5">
                        <div className="col-sm-5">
                            <h1 className="font-weigh-light text-center">BackloGGo</h1>
                            <p className='mt-4 text-start'>
                                For years, humans on this earth have searched far and wide for the best game cataloguing website that uses 
                                the MERN Stack. Look no further than BackloGGo, the superior gaming catalogue site built using the MERN stack.
                            </p>
        
                        </div>
                        <div className="col-sm-7">
                        <img src="https://static.vecteezy.com/system/resources/previews/002/144/780/original/gaming-banner-for-games-with-glitch-effect-neon-light-on-text-illustration-design-free-vector.jpg" className="img-fluid rounded" alt="dummy"/>
                        </div>
                        
                                <div className="row">
                                <div className="card text-center bg-secondary text-white my-5 py-4">
                                    <div className="card-body">
                                    This is some text within a card body.
                                    </div>
                                </div>
                                <div className="row">
                                    {/* <div className="flex flex-col md:flex-row items-center justify-center"> */}
                                       <div className='col bg-secondary m-1'>
                                            <Link className="link-light text-decoration-none" to="/games">
                                                {CardItem(carddata.gamesCard[0])}
                                            </Link>
                                            {/* <button className="bi bi-star">  &#9734;</button>
                                            <button className="bi bi-star">  &#9734;</button>
                                            <button className="bi bi-star">  &#9734;</button>
                                            <button className="bi bi-star">  &#9734;</button>
                                            <button className="bi bi-star">  &#9734;</button>  */}
                                            {/* <NewRating /> */}
                                        </div>
                                        <div className='col bg-secondary m-1'>
                                            <Link className="link-light text-decoration-none" to="/login">
                                                {CardItem(carddata.gamesCard[1])}
                                            </Link>
                                        </div> 

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
    </div>
  )
}

export default Home