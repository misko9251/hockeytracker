const deleteTeamOne = document.querySelectorAll('.deleteTeam1')

Array.from(deleteTeamOne).forEach((element)=>{
    element.addEventListener('click', deleteHomeTeam)
})

async function deleteHomeTeam(){
    const teamName = this.parentNode.childNodes[1].innerText
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

const deleteTeamTwo = document.querySelectorAll('.deleteTeam2')

Array.from(deleteTeamTwo).forEach((element)=>{
    element.addEventListener('click', deleteAwayTeam)
})

async function deleteAwayTeam(){
    const teamName2 = this.parentNode.childNodes[1].innerText
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
    const gPlayed = this.parentNode.childNodes[1]
    console.log(gPlayed)
    // const sName = this.parentNode.childNodes[1].innerText
    // const bName = this.parentNode.childNodes[3].innerText
    // const tLikes = Number(this.parentNode.childNodes[5].innerText)
    // try{
    //     const response = await fetch('addOneLike', {
    //         method: 'put',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify({
    //           'stageNameS': sName,
    //           'birthNameS': bName,
    //           'likesS': tLikes
    //         })
    //       })
    //     const data = await response.json()
    //     console.log(data)
    //     location.reload()

    // }catch(err){
    //     console.log(err)
    // }
}