import { Router, Request, Response, NextFunction } from 'express'
import createHttpError  from 'http-errors'
import User from '../Models/User.model'

const router: Router = Router()

router.post('/register', async (req: Request, res: Response, next: NextFunction) => {
 try {
  const { email, password } = req.body
  if(!email || !password) throw new createHttpError.BadRequest() 

  const doesExists = await User.findOne({email: email})
  if(doesExists) throw new createHttpError.Conflict(`${email} already registered.`) 

  const user = new User({ email, password }) 
  const savedUser = await user.save()

  res.send(savedUser)

 } catch (error) {
   next(error)
 } 
})

router.post('/login', (req: Request, res: Response, next: NextFunction) => {
  res.send(' Auth login route.')
})

router.post('/refresh-token', (req: Request, res: Response, next: NextFunction) => {
  res.send(' Auth refresh-token route.')
})

router.delete('/logout', (req: Request, res: Response, next: NextFunction) => {
  res.send(' Auth logout route.')
})

export default router;