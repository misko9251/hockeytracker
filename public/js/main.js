let faq = document.querySelectorAll('.accordion')

Array.from(faq).forEach((element)=>{
    element.addEventListener('click', toggle)
})

function toggle() {
    this.classList.toggle('active')
    let panel = this.nextElementSibling
    if(panel.style.display === 'block'){
        panel.style.display = 'none';
    }else{
        panel.style.display = 'block'
    }
}



// Add name of home team

const deleteTeamOne = document.querySelectorAll('.deleteTeam1')

Array.from(deleteTeamOne).forEach((element)=>{
    element.addEventListener('click', deleteHomeTeam)
})

async function deleteHomeTeam(){
    const teamName = this.parentNode.childNodes[3].innerText
    console.log(teamName)
    try{
        const response = await fetch('deleteHomeTeam', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'teamToDelete': teamName
              })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

// Delete name of away team

const deleteTeamTwo = document.querySelectorAll('.deleteTeam2')

Array.from(deleteTeamTwo).forEach((element)=>{
    element.addEventListener('click', deleteAwayTeam)
})

async function deleteAwayTeam(){
    const teamName2 = this.parentNode.childNodes[3].innerText
    console.log(teamName2)
    try{
        const response = await fetch('deleteAwayTeam', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'teamToDelete2': teamName2
              })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

// Remove player from roster

const deletePlayerName = document.querySelectorAll('.trashCan')

Array.from(deletePlayerName).forEach((element)=>{
    element.addEventListener('click', deletePlayer)
})

async function deletePlayer(){
    const playerName = this.parentNode.innerText
    console.log(playerName)
    try{
        const response = await fetch('deletePlayer', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'playerNameS': playerName
              })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

// Add game played

const addOneGP = document.querySelectorAll('.addGP')

Array.from(addOneGP).forEach(element=>{
    element.addEventListener('click', addGP)
})

async function addGP(){
    const playerName = this.parentNode.parentNode.childNodes[1].innerText
    const gPlayed = +this.parentNode.childNodes[1].data
    const g = +this.parentNode.parentNode.childNodes[5].childNodes[1].data
    const a = +this.parentNode.parentNode.childNodes[7].childNodes[1].data
    const p = +this.parentNode.parentNode.childNodes[9].childNodes[1].data
    const pim = +this.parentNode.parentNode.childNodes[11].childNodes[1].data
    const ppg = +this.parentNode.parentNode.childNodes[13].childNodes[1].data
    const ppp = +this.parentNode.parentNode.childNodes[15].childNodes[1].data
    console.log(gPlayed)
    try{
        const response = await fetch('addGP', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'playerNameS': playerName,
              'gamesPlayed': gPlayed,
              'goalsScored': g,
              'assists': a,
              'points': p,
              'penaltyMinutes': pim,
              'powerPlayGoals': ppg,
              'powerPlayPoints': ppp
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

// Remove game played

const removeOneGP = document.querySelectorAll('.removeGP')

Array.from(removeOneGP).forEach(element=>{
    element.addEventListener('click', removeGP)
})

async function removeGP(){
    const playerName = this.parentNode.parentNode.childNodes[1].innerText
    const gPlayed = +this.parentNode.childNodes[1].data
    const g = +this.parentNode.parentNode.childNodes[5].childNodes[1].data
    const a = +this.parentNode.parentNode.childNodes[7].childNodes[1].data
    const p = +this.parentNode.parentNode.childNodes[9].childNodes[1].data
    const pim = +this.parentNode.parentNode.childNodes[11].childNodes[1].data
    const ppg = +this.parentNode.parentNode.childNodes[13].childNodes[1].data
    const ppp = +this.parentNode.parentNode.childNodes[15].childNodes[1].data
    console.log(typeof playerName)
    try{
        const response = await fetch('removeGP', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'playerNameS': playerName,
              'gamesPlayed': gPlayed,
              'goalsScored': g,
              'assists': a,
              'points': p,
              'penaltyMinutes': pim,
              'powerPlayGoals': ppg,
              'powerPlayPoints': ppp
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

// Add goal scored

const addOneGoal = document.querySelectorAll('.addG')

Array.from(addOneGoal).forEach(element=>{
    element.addEventListener('click', addGoal)
})

async function addGoal(){
    const playerName = this.parentNode.parentNode.childNodes[1].innerText
    const gPlayed = +this.parentNode.parentNode.childNodes[3].childNodes[1].data
    const g = +this.parentNode.parentNode.childNodes[5].childNodes[1].data
    const a = +this.parentNode.parentNode.childNodes[7].childNodes[1].data
    const p = +this.parentNode.parentNode.childNodes[9].childNodes[1].data
    const pim = +this.parentNode.parentNode.childNodes[11].childNodes[1].data
    const ppg = +this.parentNode.parentNode.childNodes[13].childNodes[1].data
    const ppp = +this.parentNode.parentNode.childNodes[15].childNodes[1].data
    console.log(g)
    try{
        const response = await fetch('addGoal', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'playerNameS': playerName,
              'gamesPlayed': gPlayed,
              'goalsScored': g,
              'assists': a,
              'points': p,
              'penaltyMinutes': pim,
              'powerPlayGoals': ppg,
              'powerPlayPoints': ppp
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

// Remove goal scored

const removeOneGoal = document.querySelectorAll('.removeG')

Array.from(removeOneGoal).forEach(element=>{
    element.addEventListener('click', removeGoal)
})

async function removeGoal(){
    const playerName = this.parentNode.parentNode.childNodes[1].innerText
    const gPlayed = +this.parentNode.parentNode.childNodes[3].childNodes[1].data
    const g = +this.parentNode.parentNode.childNodes[5].childNodes[1].data
    const a = +this.parentNode.parentNode.childNodes[7].childNodes[1].data
    const p = +this.parentNode.parentNode.childNodes[9].childNodes[1].data
    const pim = +this.parentNode.parentNode.childNodes[11].childNodes[1].data
    const ppg = +this.parentNode.parentNode.childNodes[13].childNodes[1].data
    const ppp = +this.parentNode.parentNode.childNodes[15].childNodes[1].data
    console.log(g)
    try{
        const response = await fetch('removeGoal', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'playerNameS': playerName,
              'gamesPlayed': gPlayed,
              'goalsScored': g,
              'assists': a,
              'points': p,
              'penaltyMinutes': pim,
              'powerPlayGoals': ppg,
              'powerPlayPoints': ppp
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

// Add assist

const addOneAssist = document.querySelectorAll('.addA')

Array.from(addOneAssist).forEach(element=>{
    element.addEventListener('click', addAssist)
})

async function addAssist(){
    const playerName = this.parentNode.parentNode.childNodes[1].innerText
    const gPlayed = +this.parentNode.parentNode.childNodes[3].childNodes[1].data
    const g = +this.parentNode.parentNode.childNodes[5].childNodes[1].data
    const a = +this.parentNode.parentNode.childNodes[7].childNodes[1].data
    const p = +this.parentNode.parentNode.childNodes[9].childNodes[1].data
    const pim = +this.parentNode.parentNode.childNodes[11].childNodes[1].data
    const ppg = +this.parentNode.parentNode.childNodes[13].childNodes[1].data
    const ppp = +this.parentNode.parentNode.childNodes[15].childNodes[1].data
    console.log(g)
    try{
        const response = await fetch('addAssist', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'playerNameS': playerName,
              'gamesPlayed': gPlayed,
              'goalsScored': g,
              'assists': a,
              'points': p,
              'penaltyMinutes': pim,
              'powerPlayGoals': ppg,
              'powerPlayPoints': ppp
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

// Remove assist

const removeOneAssist = document.querySelectorAll('.removeA')

Array.from(removeOneAssist).forEach(element=>{
    element.addEventListener('click', removeAssist)
})

async function removeAssist(){
    const playerName = this.parentNode.parentNode.childNodes[1].innerText
    const gPlayed = +this.parentNode.parentNode.childNodes[3].childNodes[1].data
    const g = +this.parentNode.parentNode.childNodes[5].childNodes[1].data
    const a = +this.parentNode.parentNode.childNodes[7].childNodes[1].data
    const p = +this.parentNode.parentNode.childNodes[9].childNodes[1].data
    const pim = +this.parentNode.parentNode.childNodes[11].childNodes[1].data
    const ppg = +this.parentNode.parentNode.childNodes[13].childNodes[1].data
    const ppp = +this.parentNode.parentNode.childNodes[15].childNodes[1].data
    console.log(g)
    try{
        const response = await fetch('removeAssist', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'playerNameS': playerName,
              'gamesPlayed': gPlayed,
              'goalsScored': g,
              'assists': a,
              'points': p,
              'penaltyMinutes': pim,
              'powerPlayGoals': ppg,
              'powerPlayPoints': ppp
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

// Add PIM

const addPenMins = document.querySelectorAll('.addPIM')

Array.from(addPenMins).forEach(element=>{
    element.addEventListener('click', addPenaltyInfractionMin)
})

async function addPenaltyInfractionMin(){
    const playerName = this.parentNode.parentNode.childNodes[1].innerText
    const gPlayed = +this.parentNode.parentNode.childNodes[3].childNodes[1].data
    const g = +this.parentNode.parentNode.childNodes[5].childNodes[1].data
    const a = +this.parentNode.parentNode.childNodes[7].childNodes[1].data
    const p = +this.parentNode.parentNode.childNodes[9].childNodes[1].data
    const pim = +this.parentNode.parentNode.childNodes[11].childNodes[1].data
    const ppg = +this.parentNode.parentNode.childNodes[13].childNodes[1].data
    const ppp = +this.parentNode.parentNode.childNodes[15].childNodes[1].data
    console.log(g)
    try{
        const response = await fetch('addPenaltyInfractionMin', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'playerNameS': playerName,
              'gamesPlayed': gPlayed,
              'goalsScored': g,
              'assists': a,
              'points': p,
              'penaltyMinutes': pim,
              'powerPlayGoals': ppg,
              'powerPlayPoints': ppp
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

// Remove PIM

const removePenMins = document.querySelectorAll('.removePIM')

Array.from(removePenMins).forEach(element=>{
    element.addEventListener('click', removePenaltyInfractionMin)
})

async function removePenaltyInfractionMin(){
    const playerName = this.parentNode.parentNode.childNodes[1].innerText
    const gPlayed = +this.parentNode.parentNode.childNodes[3].childNodes[1].data
    const g = +this.parentNode.parentNode.childNodes[5].childNodes[1].data
    const a = +this.parentNode.parentNode.childNodes[7].childNodes[1].data
    const p = +this.parentNode.parentNode.childNodes[9].childNodes[1].data
    const pim = +this.parentNode.parentNode.childNodes[11].childNodes[1].data
    const ppg = +this.parentNode.parentNode.childNodes[13].childNodes[1].data
    const ppp = +this.parentNode.parentNode.childNodes[15].childNodes[1].data
    console.log(g)
    try{
        const response = await fetch('removePenaltyInfractionMin', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'playerNameS': playerName,
              'gamesPlayed': gPlayed,
              'goalsScored': g,
              'assists': a,
              'points': p,
              'penaltyMinutes': pim,
              'powerPlayGoals': ppg,
              'powerPlayPoints': ppp
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

// Add PPG

const addPPGs = document.querySelectorAll('.addPPG')

Array.from(addPPGs).forEach(element=>{
    element.addEventListener('click', addPPGPoints)
})

async function addPPGPoints(){
    const playerName = this.parentNode.parentNode.childNodes[1].innerText
    const gPlayed = +this.parentNode.parentNode.childNodes[3].childNodes[1].data
    const g = +this.parentNode.parentNode.childNodes[5].childNodes[1].data
    const a = +this.parentNode.parentNode.childNodes[7].childNodes[1].data
    const p = +this.parentNode.parentNode.childNodes[9].childNodes[1].data
    const pim = +this.parentNode.parentNode.childNodes[11].childNodes[1].data
    const ppg = +this.parentNode.parentNode.childNodes[13].childNodes[1].data
    const ppp = +this.parentNode.parentNode.childNodes[15].childNodes[1].data
    console.log(g)
    try{
        const response = await fetch('addPPGPoints', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'playerNameS': playerName,
              'gamesPlayed': gPlayed,
              'goalsScored': g,
              'assists': a,
              'points': p,
              'penaltyMinutes': pim,
              'powerPlayGoals': ppg,
              'powerPlayPoints': ppp
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

// Remove PPG

const removePPGs = document.querySelectorAll('.removePPG')

Array.from(removePPGs).forEach(element=>{
    element.addEventListener('click', removePPGPoints)
})

async function removePPGPoints(){
    const playerName = this.parentNode.parentNode.childNodes[1].innerText
    const gPlayed = +this.parentNode.parentNode.childNodes[3].childNodes[1].data
    const g = +this.parentNode.parentNode.childNodes[5].childNodes[1].data
    const a = +this.parentNode.parentNode.childNodes[7].childNodes[1].data
    const p = +this.parentNode.parentNode.childNodes[9].childNodes[1].data
    const pim = +this.parentNode.parentNode.childNodes[11].childNodes[1].data
    const ppg = +this.parentNode.parentNode.childNodes[13].childNodes[1].data
    const ppp = +this.parentNode.parentNode.childNodes[15].childNodes[1].data
    console.log(g)
    try{
        const response = await fetch('removePPGPoints', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'playerNameS': playerName,
              'gamesPlayed': gPlayed,
              'goalsScored': g,
              'assists': a,
              'points': p,
              'penaltyMinutes': pim,
              'powerPlayGoals': ppg,
              'powerPlayPoints': ppp
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

// Add PPPs

const addPPPs = document.querySelectorAll('.addPPP')

Array.from(addPPPs).forEach(element=>{
    element.addEventListener('click', addPPPPoints)
})

async function addPPPPoints(){
    const playerName = this.parentNode.parentNode.childNodes[1].innerText
    const gPlayed = +this.parentNode.parentNode.childNodes[3].childNodes[1].data
    const g = +this.parentNode.parentNode.childNodes[5].childNodes[1].data
    const a = +this.parentNode.parentNode.childNodes[7].childNodes[1].data
    const p = +this.parentNode.parentNode.childNodes[9].childNodes[1].data
    const pim = +this.parentNode.parentNode.childNodes[11].childNodes[1].data
    const ppg = +this.parentNode.parentNode.childNodes[13].childNodes[1].data
    const ppp = +this.parentNode.parentNode.childNodes[15].childNodes[1].data
    console.log(g)
    try{
        const response = await fetch('addPPPPoints', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'playerNameS': playerName,
              'gamesPlayed': gPlayed,
              'goalsScored': g,
              'assists': a,
              'points': p,
              'penaltyMinutes': pim,
              'powerPlayGoals': ppg,
              'powerPlayPoints': ppp
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

// Remove PPPs

const removePPPs = document.querySelectorAll('.removePPP')

Array.from(removePPPs).forEach(element=>{
    element.addEventListener('click', removePPPPoints)
})

async function removePPPPoints(){
    const playerName = this.parentNode.parentNode.childNodes[1].innerText
    const gPlayed = +this.parentNode.parentNode.childNodes[3].childNodes[1].data
    const g = +this.parentNode.parentNode.childNodes[5].childNodes[1].data
    const a = +this.parentNode.parentNode.childNodes[7].childNodes[1].data
    const p = +this.parentNode.parentNode.childNodes[9].childNodes[1].data
    const pim = +this.parentNode.parentNode.childNodes[11].childNodes[1].data
    const ppg = +this.parentNode.parentNode.childNodes[13].childNodes[1].data
    const ppp = +this.parentNode.parentNode.childNodes[15].childNodes[1].data
    console.log(g)
    try{
        const response = await fetch('removePPPPoints', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'playerNameS': playerName,
              'gamesPlayed': gPlayed,
              'goalsScored': g,
              'assists': a,
              'points': p,
              'penaltyMinutes': pim,
              'powerPlayGoals': ppg,
              'powerPlayPoints': ppp
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

// Delete Play

const deletePlayTrashButton = document.querySelectorAll('.gameFlowDelete')

Array.from(deletePlayTrashButton).forEach((element)=>{
    element.addEventListener('click', deleteGameFlowPlay)
})

async function deleteGameFlowPlay(){
    const playToDelete = this.parentNode.childNodes[1].textContent
    console.log(playToDelete)
    try{
        const response = await fetch('deleteGameFlowPlay', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'gameflowInfoS': playToDelete
              })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}