import React from 'react'
import { Container } from 'react-bootstrap'
import CardItem  from './Card'

const dataer = {gamesCard: [
    {
        title: "Games",
        info: "This is where you come to game",
        icon: ['/view.svg', '/search1.svg'],
        alt: ['view icon', 'search icon'],
        description: [' - View a Large Catalogue of Games', ' - Search to Find the Games For You']
    },
    {
        title: "Profile",
        info: "This is where you come to view your profile",
        icon: ['/view.svg', '/profile.svg'],
    }
]}

const Home = () => {

    return (
        <div className= "Home">
            <main>
            <div className="row">
                <div className="container">
                    <div className="row px-4 my-5">
                        <div className="col-sm-7">
                        <img src="https://picsum.photos/900/400" className="img-fluid rounded" alt="dummy"/>
                        </div>
                        <div className="col-sm-5">
                            <h1 className="font-weigh-light">Tagline</h1>
                            <p className='mt-4'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Unde atque harum nostrum odio totam vitae ratione molestias. Doloremque impedit fugiat itaque aspernatur mollitia sit, inventore nam, ullam assumenda a placeat!
                            </p>
                            <button type="button" className="btn btn-outline-primary">Press me</button>
                </div>
                                <div className="row">
                                <div className="card text-center bg-secondary text-white my-5 py-4">
                                    <div className="card-body">
                                    This is some text within a card body.
                                    </div>
                                </div>
                                <div className="row">
                                    {/* <div className="flex flex-col md:flex-row items-center justify-center"> */}
                                        <div className='col'>
                                            {CardItem(dataer.gamesCard[0])}
                                        </div>
                                        {/* <div className='col'>
                                            {CardItem("profile", "This is where you can view your profile")}
                                        </div>
                                        <div className='col'>
                                            {CardItem("random", "This is where the randomness happens")}
                                        </div> */}
                                        {/* <div class="card" style="width: 18rem;">
                                            <img src="https://picsum.photos/id/200/320/200" class="card-img-top" alt="place" />
                                            <div class="card-body">
                                                <h5 class="card-title">Card title</h5>
                                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <button type="button" class="btn btn-primary">Go somewhere</button>
                                    
                                            </div>
                                        </div> */}
                                        {/* <div>
                                            {CardItem("game", "this is where you come to game" )}
                                        </div> */}
                                    {/* </div> */}
                                    {/* <div className="col">
                                    hi
                                    </div>
                                    <div className="col">
                                    hi
                                    </div> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        <footer className="py-5 my-5 bg-dark">
            <div className="container px-4">
                <p className="text-center text-white">Copyright &copy; Your Website 2021</p>
            </div>
        </footer>
    </div>
  )
}

export default Home