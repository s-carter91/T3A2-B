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
    {name: 'Shooter'}
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

//Seeding games
const allgames = [{
    name: 'God of War',
    genre: gens[1],
    description: "Unleash the power of the Gods and embark on a merciless quest as Kratos, an ex-Spartan warrior driven to destroy Ares, the God of War. Armed with lethal double chainblades, Kratos must carve through mythology's darkest creatures including Medusa, Cyclops, the Hydra and more, while solving intricate puzzles in breathtaking environments. Driven by pure revenge, nothing can stop Kratos from achieving absolution.",
    platform: plats[0],
    image:'https://media.rawg.io/media/games/1aa/1aa4ca34a8a6bb57a2e065c8332dc230.jpg',
},
{
    name: 'League of Legends',
    description: "League of Legends is a fast-paced, competitive online game that blends the speed and intensity of an RTS with RPG elements. Two teams of powerful champions, each with a unique design and playstyle, battle head-to-head across multiple battlefields and game modes. With an ever-expanding roster of champions, frequent updates and a thriving tournament scene, League of Legends offers endless replayability for players of every skill level.",
    genre: gens[5],
    platform: plats[2],
    image: 'https://media.rawg.io/media/games/78b/78bc81e247fc7e77af700cbd632a9297.jpg',
},
{
    name: 'Pokemon Scarlet',
    genre: gens[1],
    description: "The Pokémon Scarlet and Pokémon Violet games, the newest chapters in the Pokémon series, are coming to Nintendo Switch later this year. With these new titles, the Pokémon series takes a new evolutionary step, allowing you to explore freely in a richly expressed open world.",
    platform: plats[3],
    image: 'https://media.rawg.io/media/games/5ab/5abb8e4af55eb8c867410c3a740355b9.jpg',
},
{
    name: "Grand Theft Auto V",
    description: "Rockstar Games went bigger, since their previous installment of the series. You get the complicated and realistic world-building from Liberty City of GTA4 in the setting of lively and diverse Los Santos, from an old fan favorite GTA San Andreas. 561 different vehicles (including every transport you can operate) and the amount is rising with every update.Simultaneous storytelling from three unique perspectives:Follow Michael, ex-criminal living his life of leisure away from the past, Franklin, a kid that seeks the better future, and Trevor, the exact past Michael is trying to run away from.",
    genre: gens[1],
    platform: [plats[0], plats[1], plats[2]],
    image: "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",

},
{
    name: "Payday 2",
    description: "The gang is back, and they have bigger and better plans. Objective based cooperative FPS became more complicated. The classic group of Hoxton, Dallas, Chains and Wolf got reinforcement, and now Payday Gang consists of 21 heisters, some of which are based on movie characters or even Youtubers. Players will be able to customize their own private arsenal, their masks, and skills, to complete the missions in their own way, be it stealthy sneak-in or full frontal assault. After completing missions, players will receive EXP points, money and a chance to get a special item that can be a gun modification, mask or a safe containing weapon skins. Payday 2 is a multiplayer game, meaning, that even during offline missions players will be followed by AI characters, whose loadouts, masks and perks can be customized as well. This game has been supported by the developers for many years, and amount of DLC speaks plenty of their dedication to the player base.",
    genre: gens[6],
    platform: plats[2],
    image: 'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',

},
{
    name: "Hogwarts Legacy",
    description: "Hogwarts Legacy is an immersive, open-world action RPG set in the world first introduced in the Harry Potter books. Now you can take control of the action and be at the center of your own adventure in the wizarding world. Embark on a journey through familiar and new locations as you explore and discover fantastic beasts, customize your character and craft potions, master spell casting, upgrade talents, and become the wizard you want to be.",
    genre: gens[1],
    platform: plats[0],
    image: 'https://media.rawg.io/media/games/044/044b2ee023930ca138deda151f40c18c.jpg',

},
{
    name: "S.T.A.L.K.E.R. 2: Heart of Chornobyl",
    description: "S.T.A.L.K.E.R. 2 is a brand-new entry in the legendary series, enjoyed by millions of players worldwide. The explosive combination of first-person shooter, immersive sim and horror is back. It’s the ultimate S.T.A.L.K.E.R. experience of unprecedented scale, advanced graphics, freedom of choices and the thickest atmosphere of a deadly adventure. Welcome to The Zone — an area of exclusion around the Chernobyl Nuclear Power Plant. Full of radiation, mutants and anomalies, it keeps drawing adventurers from beyond the perimeter. Bounty hunters dwell deep into the Zone, driven by its treasures and mysteries. These people are known as stalkers. Are you ready to become one of them?",
    genre: gens[2],
    platform: plats[2],
    image: 'https://media.rawg.io/media/games/3e8/3e81585ecda204d4f4b80a041b069adb.jpg',

},
{
    name: 'Elden Ring',
    genre: gens[0],
    description: "The Golden Order has been broken.<br>Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.<br> <br>In the Lands Between ruled by Queen Marika the Eternal, the Elden Ring, the source of the Erdtree, has been shattered.<br> Marika's offspring, demigods all, claimed the shards of the Elden Ring known as the Great Runes, and the mad taint of their newfound strength triggered a war: The Shattering. A war that meant abandonment by the Greater Will.<br>And now the guidance of grace will be brought to the Tarnished who were spurned by the grace of gold and exiled from the Lands Between. Ye dead who yet live, your grace long lost, follow the path to the Lands Between beyond the foggy sea to stand before the Elden Ring.",
    platform: plats[0],
    image: 'https://media.rawg.io/media/games/5ec/5ecac5cb026ec26a56efcc546364e348.jpg',
},
{
    name: 'Stray',
    genre: gens[1],
    description: "Lost, alone and separated from family, a stray cat must untangle an ancient mystery to escape a long-forgotten city. Stray is a third-person cat adventure game set amidst the detailed, neon-lit alleys of a decaying cybercity and the murky environments of its seedy underbelly. Roam surroundings high and low, defend against unforeseen threats and solve the mysteries of this unwelcoming place inhabited by curious droids and dangerous creatures.",
    platform: [plats[0], plats[3]],
    image: 'https://media.rawg.io/media/games/cd3/cd3c9c7d3e95cb1608fd6250f1b90b7a.jpg',
},
{
    name: 'Horizon Forbidden West',
    genre: gens[1],
    description: "Explore distant lands, fight bigger and more awe-inspiring machines, and encounter astonishing new tribes as you return to the far-future, post-apocalyptic world of Horizon. The land is dying. Vicious storms and an unstoppable blight ravage the scattered remnants of humanity, while fearsome new machines prowl their borders. Life on Earth is hurtling towards another extinction, and no one knows why. It's up to Aloy to uncover the secrets behind these threats and restore order and balance to the world. Along the way, she must reunite with old friends, forge alliances with warring new factions and unravel the legacy of the ancient past – all the while trying to stay one step ahead of a seemingly undefeatable new enemy.",
    platform: plats[0],
    image: 'https://media.rawg.io/media/games/bf7/bf73b105ccbba42107986bbcd96fcada.jpg',
},
{
    name: 'Tunic',
    genre: gens[0],
    description: "Explore a land filled with lost legends, ancient powers, and ferocious monsters in TUNIC, an isometric action game about a small fox on a big adventure. Stranded on a mysterious beach, armed with only your own curiosity, you will confront colossal beasts, collect strange and powerful items, and unravel long-lost secrets.",
    platform: plats[2],
    image: 'https://media.rawg.io/media/games/2c1/2c1984e128ac48b89953ed4de4904a3b.jpg',
},
{
    name: 'Mario Kart 8',
    genre: gens[2],
    description: "Hit the road with the definitive version of Mario Kart 8 and play anytime, anywhere! Race your friends or battle them in a revised battle mode on new and returning battle courses. Play locally in up to 4-player multiplayer in 1080p while playing in TV Mode. Every track from the Wii U version, including DLC, makes a glorious return. Plus, the Inklings appear as all-new guest characters, along with returning favorites, such as King Boo, Dry Bones, and Bowser Jr.!",
    platform: plats[3],
    image: 'https://media.rawg.io/media/games/7df/7dfbdcb58a03fcddc68479454fc1f7de.jpg',
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
