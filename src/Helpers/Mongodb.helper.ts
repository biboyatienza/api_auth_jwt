import mongoose from 'mongoose'

async function startMongoDb() {
  try {
    await mongoose
    .connect(process.env.MONGODB_URI as string, {dbName: process.env.DB_NAME})
    .then(() => {
      console.log('mongodb connected.')
    })
    .catch((err) => { console.error(err.message)})
    } catch (e) {console.error(e)}
  
  mongoose.connection.on('error', (err) => {
    console.error(err);
  });

  mongoose.connection.on('disconnected', () => {
  console.warn('Mongoose connection was disconnected.');
  });

  process.on('SIGINT', async() => {
    await mongoose.connection.close()
    process.exit(0)
  })
}

export default startMongoDb
