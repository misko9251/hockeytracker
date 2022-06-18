const express = require('express')
const app = express()
const PORT = 2121
const MongoClient = require('mongodb').MongoClient
const mongo = 'MongoStr'
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

app.get('/FAQ', (request, response)=>{
    response.render('faq.ejs')
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

//Add player to roster

app.post('/addPlayer', (request, response)=>{
    db.collection('players').insertOne({playerName: request.body.playerName, gp: 0, g: 0, a: 0, p: 0, pim: 0, ppg: 0, ppp: 0})
    .then(result=>{
        response.redirect('/enterInfo')
    })
    .catch(error => console.log(error))
})

//Delete player from roster

app.delete('/deletePlayer',(request, response)=>{
    db.collection('players').deleteOne({playerName: request.body.playerNameS})
    .then(result => {
        console.log('Player deleted')
        response.json('Player deleted')
    })
    .catch(error => console.log(error))
})

// Add gamesplayed

app.put('/addGP', (request, response)=>{
    db.collection('players').updateOne({playerName: request.body.playerNameS, gp: request.body.gamesPlayed, g: request.body.goalsScored, a: request.body.assists, p: request.body.points, pim: request.body.penaltyMinutes, ppg: request.body.powerPlayGoals, ppp: request.body.powerPlayPoints}, {
        $set: {
            gp: request.body.gamesPlayed + 1
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

// Delete gamesplayed

app.put('/removeGP', (request, response)=>{
    db.collection('players').updateOne({playerName: request.body.playerNameS, gp: request.body.gamesPlayed, g: request.body.goalsScored, a: request.body.assists, p: request.body.points, pim: request.body.penaltyMinutes, ppg: request.body.powerPlayGoals, ppp: request.body.powerPlayPoints}, {
        $set: {
            gp: request.body.gamesPlayed - 1
          }
    },{
        sort: {_id: -1},
        upsert: true
    })
    .then(result => {
        console.log('Removed One GP')
        response.json('GP removed')
    })
    .catch(error => console.error(error))
})

// Add goals scored

app.put('/addGoal', (request, response)=>{
    db.collection('players').updateOne({playerName: request.body.playerNameS, gp: request.body.gamesPlayed, g: request.body.goalsScored, a: request.body.assists, p: request.body.points, pim: request.body.penaltyMinutes, ppg: request.body.powerPlayGoals, ppp: request.body.powerPlayPoints}, {
        $set: {
            g: request.body.goalsScored + 1,
            p: request.body.goalsScored + request.body.assists + 1
          }
    },{
        sort: {_id: -1},
        upsert: true
    })
    .then(result => {
        console.log('Added One G')
        response.json('G Added')
    })
    .catch(error => console.error(error))
})

// Remove goals scored

app.put('/removeGoal', (request, response)=>{
    console.log(request.body)
    db.collection('players').updateOne({playerName: request.body.playerNameS, gp: request.body.gamesPlayed, g: request.body.goalsScored, a: request.body.assists, p: request.body.points, pim: request.body.penaltyMinutes, ppg: request.body.powerPlayGoals, ppp: request.body.powerPlayPoints}, {
        $set: {
            g: request.body.goalsScored - 1,
            p: request.body.goalsScored + request.body.assists - 1
          }
    },{
        sort: {_id: -1},
        upsert: true
    })
    .then(result => {
        console.log('Removed One G')
        response.json('G removed')
    })
    .catch(error => console.error(error))
})

// Add assists

app.put('/addAssist', (request, response)=>{
    console.log(request.body)
    db.collection('players').updateOne({playerName: request.body.playerNameS, gp: request.body.gamesPlayed, g: request.body.goalsScored, a: request.body.assists, p: request.body.points, pim: request.body.penaltyMinutes, ppg: request.body.powerPlayGoals, ppp: request.body.powerPlayPoints}, {
        $set: {
            a: request.body.assists + 1,
            p: request.body.goalsScored + request.body.assists + 1
          }
    },{
        sort: {_id: -1},
        upsert: true
    })
    .then(result => {
        console.log('Added One A')
        response.json('A Added')
    })
    .catch(error => console.error(error))
})

// Remove assists

app.put('/removeAssist', (request, response)=>{
    console.log(request.body)
    db.collection('players').updateOne({playerName: request.body.playerNameS, gp: request.body.gamesPlayed, g: request.body.goalsScored, a: request.body.assists, p: request.body.points, pim: request.body.penaltyMinutes, ppg: request.body.powerPlayGoals, ppp: request.body.powerPlayPoints}, {
        $set: {
            a: request.body.assists - 1,
            p: request.body.goalsScored + request.body.assists - 1
          }
    },{
        sort: {_id: -1},
        upsert: true
    })
    .then(result => {
        console.log('Removed One A')
        response.json('A removed')
    })
    .catch(error => console.error(error))
})

// Add PIM

app.put('/addPenaltyInfractionMin', (request, response)=>{
    console.log(request.body)
    db.collection('players').updateOne({playerName: request.body.playerNameS, gp: request.body.gamesPlayed, g: request.body.goalsScored, a: request.body.assists, p: request.body.points, pim: request.body.penaltyMinutes, ppg: request.body.powerPlayGoals, ppp: request.body.powerPlayPoints}, {
        $set: {
            pim: request.body.penaltyMinutes + 1
          }
    },{
        sort: {_id: -1},
        upsert: true
    })
    .then(result => {
        console.log('Added One A')
        response.json('A Added')
    })
    .catch(error => console.error(error))
})

// Remove PIM

app.put('/removePenaltyInfractionMin', (request, response)=>{
    console.log(request.body)
    db.collection('players').updateOne({playerName: request.body.playerNameS, gp: request.body.gamesPlayed, g: request.body.goalsScored, a: request.body.assists, p: request.body.points, pim: request.body.penaltyMinutes, ppg: request.body.powerPlayGoals, ppp: request.body.powerPlayPoints}, {
        $set: {
            pim: request.body.penaltyMinutes - 1
          }
    },{
        sort: {_id: -1},
        upsert: true
    })
    .then(result => {
        console.log('Added One A')
        response.json('A Added')
    })
    .catch(error => console.error(error))
})

// Add PPG

app.put('/addPPGPoints', (request, response)=>{
    console.log(request.body)
    db.collection('players').updateOne({playerName: request.body.playerNameS, gp: request.body.gamesPlayed, g: request.body.goalsScored, a: request.body.assists, p: request.body.points, pim: request.body.penaltyMinutes, ppg: request.body.powerPlayGoals, ppp: request.body.powerPlayPoints}, {
        $set: {
            ppg: request.body.powerPlayGoals + 1
          }
    },{
        sort: {_id: -1},
        upsert: true
    })
    .then(result => {
        console.log('Added One A')
        response.json('A Added')
    })
    .catch(error => console.error(error))
})

// Remove PPG

app.put('/removePPGPoints', (request, response)=>{
    console.log(request.body)
    db.collection('players').updateOne({playerName: request.body.playerNameS, gp: request.body.gamesPlayed, g: request.body.goalsScored, a: request.body.assists, p: request.body.points, pim: request.body.penaltyMinutes, ppg: request.body.powerPlayGoals, ppp: request.body.powerPlayPoints}, {
        $set: {
            ppg: request.body.powerPlayGoals - 1
          }
    },{
        sort: {_id: -1},
        upsert: true
    })
    .then(result => {
        console.log('Added One A')
        response.json('A Added')
    })
    .catch(error => console.error(error))
})

// Add PPP

app.put('/addPPPPoints', (request, response)=>{
    console.log(request.body)
    db.collection('players').updateOne({playerName: request.body.playerNameS, gp: request.body.gamesPlayed, g: request.body.goalsScored, a: request.body.assists, p: request.body.points, pim: request.body.penaltyMinutes, ppg: request.body.powerPlayGoals, ppp: request.body.powerPlayPoints}, {
        $set: {
            ppp: request.body.powerPlayPoints + 1
          }
    },{
        sort: {_id: -1},
        upsert: true
    })
    .then(result => {
        console.log('Added One A')
        response.json('A Added')
    })
    .catch(error => console.error(error))
})

// Remove PPP

app.put('/removePPPPoints', (request, response)=>{
    console.log(request.body)
    db.collection('players').updateOne({playerName: request.body.playerNameS, gp: request.body.gamesPlayed, g: request.body.goalsScored, a: request.body.assists, p: request.body.points, pim: request.body.penaltyMinutes, ppg: request.body.powerPlayGoals, ppp: request.body.powerPlayPoints}, {
        $set: {
            ppp: request.body.powerPlayPoints - 1
          }
    },{
        sort: {_id: -1},
        upsert: true
    })
    .then(result => {
        console.log('Added One A')
        response.json('A Added')
    })
    .catch(error => console.error(error))
})

// Listen on port below

app.listen(PORT, () =>{
    console.log(`Connected to port ${PORT}`)
})