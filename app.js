const express = require('express')
const morgan = require('morgan')
const createError = require('http-errors')
const AuthRoute = require('./Routes/Auth_Route')
require('dotenv').config()

const app = express()
app.use(morgan('dev'))
app.get('/', async (req, res, next)=> {
    res.send("hello world")
})

app.use('/auth', AuthRoute),


app.use(async (res,res,next)=> {
    const error = new Error("Not Found")
    error.status = 404
    next(error)
})
const PORT = process.env.PORT || 3000

app.listen(PORT, ()=> {
    console.log('Server running on port ${PORT}')
})