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
    test('Add a game to user profile currently playing', async () => {
        const res = await request(app).patch('/users/playing').send({
            gameId: '63d14625a9c87120c737c102',
            userId: '63d14625a9c87120c737c106'
        })
        })
        expect(res.status).toBe(201)
        expect(res.headers['content-type']).toMatch(/json/i)
        expect(res._id).toBeDefined()
        // expect(res.body.content).toBeDefined()
        expect(res.body).toBeDefined()
        // expect(res.body.category).toBe('Work')
        // expect(res.body.content).toBe('Just Testing G')
    })
