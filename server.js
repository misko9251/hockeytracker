const express = require('express')
const app = express()
const PORT = 2121
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
            db.collection('players').find().toArray().then(results3 =>{
                response.render('index.ejs', {name: results, name2: results2, data: results3})
            })
        })
    })
})

app.post('/homeTeam', (request, response)=>{
    db.collection('home').insertOne({homeTeam: request.body.homeTeam})
    .then(result =>{
        response.redirect('/enterInfo')
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
        response.redirect('/enterInfo')
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

app.post('/addPlayer', (request, response)=>{
    db.collection('players').insertOne({playerName: request.body.playerName, gp: 0, g: 0, a: 0, p: 0, pim: 0, ppg: 0, ppp: 0})
    .then(result=>{
        response.redirect('/enterInfo')
    })
    .catch(error => console.log(error))
})

app.delete('/deletePlayer',(request, response)=>{
    db.collection('players').deleteOne({playerName: request.body.playerNameS})
    .then(result => {
        console.log('Player deleted')
        response.json('Player deleted')
    })
    .catch(error => console.log(error))
})

app.put('/addGP', (request, response)=>{
    db.collection('players').updateOne({playerName: request.body.playerName, gp: request.body.gamesPlayed, g: request.body.goalsScored, a: request.body.assists, p: request.body.points, pim: request.body.penaltyMinutes, ppg: request.body.powerPlayGoals, ppp: request.body.powerPlayPoints}, {
        $set: {
            gp:request.body.gamesPlayed + 1
          }
    },{
        sort: {_id: -1},
        upsert: true
    })
    .then(result => {
        console.log('Added One GP')
        response.json('GP Added')
    })
    .catch(error => console.error(error))
})


app.listen(PORT, () =>{
    console.log(`Connected to port ${PORT}`)
})