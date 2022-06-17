const express = require('express')
const app = express()


// Middleware
app.use(express.static("public"))

const PORT = 5001

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}.`)
})