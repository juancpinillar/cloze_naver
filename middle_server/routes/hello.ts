import express from 'express'
import mongoose from 'mongoose'
import { createSample, getFirst } from '../db/htmlUpdates'
const router = express.Router()

router.post('/', (req, res) => {
  const body = req.body
  console.log('post received')
  console.log(body)
  res.send('ok post')
})

router.get('/', (req, res) => {
  console.log('get received')
  getFirst()
  res.send('ok get')
})

export default router