import mongoose from 'mongoose'


async function dbClose(){
    await mongoose.connection.close();
    console.log("Database disconnected!");
}

// connect to a MongoDB via Mongoose
async function connectToDb() {
    mongoose.set('strictQuery', true)

    try {
        const m =  await mongoose.connect(process.env.ATLAS_DB_URL) // can use await at the top level without wrapping in an async function
        console.log(m.connection.readyState === 1 ? 'Mongoose connected!' : 'Mongoose failed to connect')  // This is good for de-bugging reasons - m is the resolved value returned by connect, is arbitrary name
      }
      catch (err) {
        console.log(err)
      }
}



export { dbClose, connectToDb }