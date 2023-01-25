import { GameModel, ReviewModel, RatingModel, PlatformModel, GenreModel, dbClose  } from './db.js'

// deleting data before seeing
await GameModel.deleteMany()
console.log('Deleted all games')
await ReviewModel.deleteMany()
console.log('Deleted all reviews')
await RatingModel.deleteMany()
console.log('Deleted all ratings')
await PlatformModel.deleteMany()
console.log('Deleted all platforms')
await GenreModel.deleteMany()
console.log('Deleted all genres')

const genres = [
    {name: 'Action'},
    {name: 'Adventure'},
    {name: 'Racing'},
    {name: 'Sport'},
    {name: 'Puzzle'},
    {name: 'MOBA'}
]

const gens = await GenreModel.insertMany(genres)
console.log('Updated genres')

const platforms = [
    {name: 'Playstation'},
    {name: 'Xbox'},
    {name: 'PC'},
    {name: 'Switch'}
]

const plats = await PlatformModel.insertMany(platforms)
console.log('Updated platforms')

const allgames = [{
    name: 'God of War',
    genre: gens[1],
    platform: plats[0],
    multiplayer: false,
    time_to_complete: 20 
},
{
    name: 'League of Legends',
    genre: gens[5],
    platform: plats[2],
    multiplayer: true,
    time_to_complete: 1000
},
{
    name: 'Pokemon Scarlet',
    genre: gens[1],
    platform: plats[3],
    multiplayer: true,
    time_to_complete: 35
}
]

const games = await GameModel.insertMany(allgames)
console.log('Updated all games')

dbClose()
