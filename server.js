const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
dotenv.config({
    path: path.join('.env')
})
const cors = require('cors')
const router = require('./app/routes/cookies')



const app = express()


app.use(express.json())
app.use(cors())

app.use('/api/v1', router)

app.listen(process.env.PORT,() => {
    console.log('server listing on ' + process.env.PORT)
})