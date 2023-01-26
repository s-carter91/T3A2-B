import app from './app.js'
import request from 'supertest'

describe("App tests", () => {
    test('GET /', async () => {
        const res = await request(app).get('/')
        console.log(res)

    })
})