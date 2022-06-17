const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
require('dotenv').config
const PORT = 5001


// Middleware
app.use(express.static("public"))

MongoClient.connect(process.env.DB_STRING, () => {

})


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}.`)
})