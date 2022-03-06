import mongoose from 'mongoose'


async function db() {
  try {
    await mongoose
    .connect('mongodb://localhost:27017', {dbName: 'auth_by_ca'})
    .then(() => {
      console.log('mongodb connected.')
    })
    .catch((err) => { console.error(err.message)})
    } catch (e) {console.error(e)}  
}

export default db
