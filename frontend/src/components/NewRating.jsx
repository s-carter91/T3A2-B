import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Rate } from 'antd'

const NewRating = () => {
    const { game_Id } = useParams()
    // const gameId= game_Id

    const [stars, setStars] = useState('')
    const userId = '63d14625a9c87120c737c106'
    const gameId = '63d14625a9c87120c737c103'

    const addRating = async () => {
        const newRating = {
            gameId: gameId, 
            stars: stars,
            userId : userId
          }
          const insertedRating = await fetch('http://localhost:4002/ratings',{ 
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(newRating)
            })
            const data = await insertedRating.json()
            setStars(data)
    } 

    const starsSubmit = (evt) => {
        evt.preventDefault()
        addRating(gameId, stars, userId)
        console.log(gameId, userId, stars)
    }
    return (
        <>
            <p>Rate the {`${game_Id}`}</p>
            <form onSubmit={starsSubmit}>
                <Rate 
                    defaultValue={stars}
                    onChange={(value) => {
                        setStars(value)
                    }}
                />
                <button type='submit'>Send rating</button>
            </form>
        
        </>
    )
}

export default NewRating