import { connectToDb, dbClose  } from './db.js'
import { GameModel } from './models/GameModel.js'
import { ReviewModel } from './models/ReviewModel.js'
import { RatingModel } from './models/RatingModel.js'
import { PlatformModel } from './models/PlatformModel.js'
import { GenreModel } from './models/GenreModel.js'
import { UserModel } from './models/UserModel.js'

connectToDb()

// deleting data before seeing
await UserModel.deleteMany()
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
    {name: 'MOBA'},
    {name: 'shooter'}
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
    description: "Unleash the power of the Gods and embark on a merciless quest as Kratos, an ex-Spartan warrior driven to destroy Ares, the God of War. Armed with lethal double chainblades, Kratos must carve through mythology's darkest creatures including Medusa, Cyclops, the Hydra and more, while solving intricate puzzles in breathtaking environments. Driven by pure revenge, nothing can stop Kratos from achieving absolution.",
    platform: plats[0],
    multiplayer: false,
    image:'https://media.rawg.io/media/games/1aa/1aa4ca34a8a6bb57a2e065c8332dc230.jpg',
},
{
    name: 'League of Legends',
    description: "League of Legends is a fast-paced, competitive online game that blends the speed and intensity of an RTS with RPG elements. Two teams of powerful champions, each with a unique design and playstyle, battle head-to-head across multiple battlefields and game modes. With an ever-expanding roster of champions, frequent updates and a thriving tournament scene, League of Legends offers endless replayability for players of every skill level.",
    genre: gens[5],
    platform: plats[2],
    multiplayer: true,
    image: 'https://media.rawg.io/media/games/78b/78bc81e247fc7e77af700cbd632a9297.jpg',
},
{
    name: 'Pokemon Scarlet',
    genre: gens[1],
    description: "The Pokémon Scarlet and Pokémon Violet games, the newest chapters in the Pokémon series, are coming to Nintendo Switch later this year. With these new titles, the Pokémon series takes a new evolutionary step, allowing you to explore freely in a richly expressed open world.",
    platform: plats[3],
    multiplayer: true,
    image: 'https://media.rawg.io/media/games/5ab/5abb8e4af55eb8c867410c3a740355b9.jpg',
},
{
    name: "Grand Theft Auto V",
    description: "Rockstar Games went bigger, since their previous installment of the series. You get the complicated and realistic world-building from Liberty City of GTA4 in the setting of lively and diverse Los Santos, from an old fan favorite GTA San Andreas. 561 different vehicles (including every transport you can operate) and the amount is rising with every update.Simultaneous storytelling from three unique perspectives:Follow Michael, ex-criminal living his life of leisure away from the past, Franklin, a kid that seeks the better future, and Trevor, the exact past Michael is trying to run away from.",
    released: gens[1],
    platform: [plats[0], plats[1], plats[2]],
    multiplayer: false,
    image: "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",

},
{
    name: "payday-2",
    description: "The gang is back, and they have bigger and better plans. Objective based cooperative FPS became more complicated. The classic group of Hoxton, Dallas, Chains and Wolf got reinforcement, and now Payday Gang consists of 21 heisters, some of which are based on movie characters or even Youtubers. Players will be able to customize their own private arsenal, their masks, and skills, to complete the missions in their own way, be it stealthy sneak-in or full frontal assault. After completing missions, players will receive EXP points, money and a chance to get a special item that can be a gun modification, mask or a safe containing weapon skins. Payday 2 is a multiplayer game, meaning, that even during offline missions players will be followed by AI characters, whose loadouts, masks and perks can be customized as well. This game has been supported by the developers for many years, and amount of DLC speaks plenty of their dedication to the player base.",
    released: gens[6],
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
    completedGames: games[0],
    name: 'greg',
    password: 'greg123'

}

const users = await UserModel.insertMany(use)
console.log('Updated users')

dbClose()
