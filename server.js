const express = require('express')
const app = express()
const PORT = 3000
const MongoClient = require('mongodb').MongoClient
const mongo = 'mongodb+srv://misko9251:rangers30@cluster0.pnhtctz.mongodb.net/?retryWrites=true&w=majority'
let db

MongoClient.connect(mongo, { useUnifiedTopology: true}) 
    .then(client=>{
        console.log('Connected to Database')
        db = client.db('hockeytracker')        
})

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.get('/', (request, response)=>{
    response.render('main.ejs')
})

app.get('/enterInfo', (request, response)=>{
    db.collection('home').find().toArray().then(results=>{
        db.collection('away').find().toArray().then(results2 => {
            response.render('index.ejs', {name: results, name2: results2})
        })
    })
})

app.post('/homeTeam', (request, response)=>{
    db.collection('home').insertOne({homeTeam: request.body.homeTeam})
    .then(result =>{
        response.redirect('/')
    })
    .catch(error => console.log(error))
})

app.delete('/deleteHomeTeam', (request, response) => {
    db.collection('home').deleteOne({homeTeam: request.body.teamToDelete})
    .then(result => {
        console.log('Team Deleted')
        console.log(request.body)
        response.json('OK')
    })
    .catch(error => console.error(error))

})

app.post('/awayTeam', (request, response)=>{
    db.collection('away').insertOne({awayTeam: request.body.awayTeam})
    .then(result =>{
        response.redirect('/')
    })
    .catch(error => console.log(error))
})

app.delete('/deleteAwayTeam', (request, response) => {
    db.collection('away').deleteOne({awayTeam: request.body.teamToDelete2})
    .then(result => {
        console.log('Team Deleted')
        console.log(request.body)
        response.json('OK')
    })
    .catch(error => console.error(error))

})

app.listen(PORT, () =>{
    console.log(`Connected to port ${PORT}`)
})