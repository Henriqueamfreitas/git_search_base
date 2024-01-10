const baseURL = 'https://api.github.com'
export async function getAll(){
    const allUsers = await fetch(`${baseURL}/users`, {
        method: 'GET'
    })

    .then(res => {
        return res.json()
    })
}
getAll()