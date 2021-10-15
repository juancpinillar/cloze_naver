import express from 'express'
const router = express.Router()

router.post('/', (req, res) => {
  const body = req.body
  console.log('post received')
  console.log(body)
  res.send('ok post')
})

export default router