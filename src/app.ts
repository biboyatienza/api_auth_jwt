import express, { Request, Response, NextFunction, Express }  from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import createHttpError from 'http-errors'
import { Server } from 'http'
import AuthRoute from './Routes/Auth.route'
import startMongoDb from './Helpers/Mongodb.helper'

dotenv.config()
startMongoDb()


const app: Express = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))

const createdBy: String = '-- Bboy 22.Feb.2022 Ejs x TS'

app.get('/check', (req: Request, res: Response, next: NextFunction) => {
  res.send({
    status: 200,
    message: `All OK! ${createdBy}`
  })
})

app.use('/auth', AuthRoute)

app.use((req: Request, res: Response, next: NextFunction) => {
  next(new createHttpError.NotFound())
})

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status = err.status || 500
  res.send({
    status: res.status,
    message: err.message
  })
})

const PORT: Number = Number(process.env.PORT) || 3000
const server: Server = app.listen(PORT, () => {
  console.log(`Game! ${createdBy}`)
})
