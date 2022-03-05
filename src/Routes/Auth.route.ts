import { Router, Request, Response, NextFunction } from 'express'

const router: Router = Router()

router.post('/register', (req: Request, res: Response, next: NextFunction) => {
  res.send(' Auth register route.')
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