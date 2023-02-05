import app from './app.js'
import request from 'supertest'

describe('App tests', () => {
    test('Get homepage', async () => {
        const res = await request(app).get('/') // simulating a network request without actually doing a real one
        expect(res.status).toBe(200)
        expect(res.headers['content-type']).toMatch(/json/i) // this is done before any json specific requests so it fails before attempting others reliant on res being JSON
        expect(res.body.info).toBeDefined() // This line is good for checking if a key  exists. Seems redundant but will give more information to the developer of where it fails.
        expect(res.body.info).toBe('Backloggo')
    })

    test('Get games',  async () => {
        const res = await request(app).get('/games')
        expect(res.status).toBe(200)

    })
})
    
    // test('Add a game to user profile currently playing', async () => {
    //     const res = await request(app).patch('/users/playing').send({
    //         gameId: '63d142d3c1778b1046219bdf',
    //         userId: '63d142d3c1778b1046219be3'
    //     })
    //     })
    //     expect(res.status).toBe(200)
    //     expect(res.headers['content-type']).toMatch(/json/i)
    //     expect(res._id).toBeDefined()
    //     // expect(res.body.content).toBeDefined()
    //     expect(res.body).toBeDefined()
    //     // expect(res.body.category).toBe('Work')
    //     // expect(res.body.content).toBe('Just Testing G')
    // })

    // describe('Get games list', () => {
    //     let res

    //     beforeEach(async () => {
    //         res = await request(app).get( '/games')
    //         expect(res.status).toBe(200)
    //         expect(res.headers['Content-Type']).toMatch(/json/i)
    //     })

    //     it('Has an element with the correct structure and data', () => {
    //         res.body.forEach(el => {
    //             expect(el._id).toBeDefined()
    //             expect(el.name).toBeDefin ed()
    //             expect(el.genre).toBeDefined()
    //             expect(el.platform).toBeDefined()
    //             expect(el._id.length).toBe(24)  
    //             expect(el.genre.length).toBe(24)
    //             expect(el.platform).toBe(24)
    //         })
    //         expect(res.body[0].name).toBe('God of War')
    //     })
    // })

    //     test('Create ')
    