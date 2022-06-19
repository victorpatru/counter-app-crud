const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
require('dotenv').config
const PORT = 5001

// Middleware
app.set('view engine', 'ejs')
app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



MongoClient.connect(process.env.DB_STRING, { useUnifiedTopology: true })
    .then(client => {
        const db = client.db('counter-app')
        
        app.get('/', (req, res) => {
            db.collection('counter').find().toArray()
                .then(result => {
                    res.render('index.ejs', {counter: result[0].counter})
                })
                .catch(err => console.log(err))
        })

        app.put('/increaseCounter', (req, res) => {
            db.collection('counter').updateOne({counter: req.body.counter }, { $set: { counter: req.body.counter + 1}})
            .then(result => {
               
                res.redirect('/')
            })
            .catch(err => console.log(err))
    })

        app.put('/decreaseCounter', (req, res) => {
            db.collection('counter').updateOne({counter: req.body.counter}, { $set: { counter: req.body.counter - 1} })
            .then(result => {
                res.redirect('/')
            })
            .catch(err => console.log(err))
        })

        app.put('/resetCounter', (req, res) => {
            db.collection('counter').updateOne({counter: req.body.counter}, { $set: { counter: 0} })
            .then(result => {
                res.redirect('/')
            })
            .catch(err => console.log(err))
        })

        app.listen(PORT, () => {
            console.log(`App running on port ${PORT}.`)
        })

    })