const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({
    extended : true
}))
const cors = require('cors')
const userRouter = require('./routes/user')
app.use(cors())
require('dotenv').config()
require('./db/client')


app.get('/', (req, res) => {
    res.send('Welcome to my API')
})

app.use('/api', userRouter)


app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})