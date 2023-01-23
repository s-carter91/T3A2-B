import React from 'react'
import data from './data'

export const App = () => {
  return (
    <div>
      <header>
        <a href="/">Backloggo</a>
      </header>
      <main>
        <h1>Trending Games</h1>
      <div className="games">
        {data.games.map(game => (
        <div className='game' key={game.slug}>
            <a href={`/product/${game.slug}`}>
             <img src={game.image} alt={game.name}/>
            </a>
            <p>
              {}
            </p>
          </div>))
        }
      </div>
      </main>

    </div>
  )
}

export default App
