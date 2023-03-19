import { Router } from 'express'
import { loggedIn } from '../middlewares/loggedIn.js'
const router = Router()

router.all('/', loggedIn)

router.post('/', (req, res) => {
  // do the login stuff, return the token an so on
})

export default router
