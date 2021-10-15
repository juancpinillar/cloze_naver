import express from 'express'
import api from './routes/api'

const app = express()

app.use(express.json())
app.use('/api', api)

app.get('*', (req, res) => {
    const errorMsg = 'Invalid API URL: ' + req.url
    console.log(errorMsg)
    res.status(404).json({ err: errorMsg })
})

const port = process.env.PORT || 5000
app.listen(port)

console.log(`Listening on ${port}`)