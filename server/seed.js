import { GameModel, ReviewModel, RatingModel, PlatformModel } from './db'

// deleting data before seeting
await GameModel.deleteMany()
console.log('Deleted all games')
await ReviewModel.deleteMany()
console.log('Deleted all reviews')
await RatingModel.deleteMany()
console.log('Deleted all reviews')
await PlatformModel.deleteMany()
console.log('Deleted all platforms')

const platforms = [
    {name: 'Playstation'},
    {name: 'Xbox'},
    {name: 'PC'},
    {name: 'Switch'}
]

const plats = await PlatformModel.insertMany(platforms)
console.log('Updated all platforms')

const allgames = [{
    name: 'God of War',
    platform: plats[0],
    multiplayer: 'False',
    "time to complete": 20 
},
{
    name: 'League of Legends',
    platform: plats[2],
    multiplayer: 'True',
    "time to complete": 1000
},
{
    name: 'Pokemon Scarlet',
    platform: plats[3],
    multiplayer: 'True',
    "time to complete": 35
}
]


const games = await GamesModel.insertMany(allgames)