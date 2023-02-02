import { connectToDb, dbClose  } from './db.js'
import { GameModel } from './models/GameModel.js'
import { ReviewModel } from './models/ReviewModel.js'
import { RatingModel } from './models/RatingModel.js'
import { PlatformModel } from './models/PlatformModel.js'
import { GenreModel } from './models/GenreModel.js'
import { UserProfileModel } from './models/UserModel.js'

connectToDb()

// deleting data before seeing
await UserProfileModel.deleteMany()
console.log('Deleted all user profiles')
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
    image:'https://media.rawg.io/media/games/1aa/1aa4ca34a8a6bb57a2e065c8332dc230.jpg',
},
{
    name: 'League of Legends',
    genre: gens[5],
    platform: plats[2],
    multiplayer: true,
    image: 'https://media.rawg.io/media/games/78b/78bc81e247fc7e77af700cbd632a9297.jpg',
},
{
    name: 'Pokemon Scarlet',
    genre: gens[1],
    platform: plats[3],
    multiplayer: true,
    image: 'https://media.rawg.io/media/games/5ab/5abb8e4af55eb8c867410c3a740355b9.jpg',
},
{
    name: "Grand Theft Auto V",
    released: gens[1],
    platform: plats[2],
    multiplayer: false,
    image: "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",

},
{
    name: "payday-2",
    released: gens[0],
    platform: plats[2],
    multiplayer: false,
    image: 'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',

},

]

const games = await GameModel.insertMany(allgames)
console.log('Updated all games')

const use = {
    username: 'Testuser',
    currentGames: games[1],
    completedGames: games[0]
}

const users = await UserProfileModel.insertMany(use)
console.log('Updated users')

dbClose()
