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