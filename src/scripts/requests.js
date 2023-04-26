////////////////////////// DEMO 24/04 - TERÇA-FEIRA //////////////////////////
const baseURL = 'https://api.github.com'
export async function getAll(){
    const allUsers = await fetch(`${baseURL}/users`, {
        method: 'GET'
    })

    .then(res => {
        return res.json()
    })
    // console.log(allUsers)
    // console.log(allUsers[0])
}

getAll()