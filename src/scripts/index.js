import { render } from "./render.js"


// getting all users 
const getAllGithubUsers = async () => {
    const allUsers = await fetch('https://api.github.com/users', {
        method: 'GET'
    })

    .then((res) => {
        if(res.ok){
            return res.json()
        } else{
            throw new Error('URL inválida')
        }
    })
    .catch((error) => {
        console.log(error)
    })

    return allUsers
}


// getting user information by name
async function getUserByUserName (userName) {
    const user = await fetch(`https://api.github.com/users/${userName}`, {
        method: 'GET'
    })

    .then(res => {
        if(res.ok){
            return res.json('Username não encontrado')
        } else{
            window.location.replace('src/pages/error.html')
            // throw new Error()
        }
    })

    .catch(error => {
        console.log(error)
    })

    return user
}


// getting the user's repository
async function getRepositoryByUserName (userName) {
    const repository = await fetch(`https://api.github.com/users/${userName}/repos`, {
        method: 'GET'
    })

    .then(res => {
        if(res.ok){
            return res.json()
        } else{
            // window.location.replace('src/pages/error.html')
            throw new Error()
        }
    })

    .catch(error => {
        console.log(error)
    })

    return repository
}


// Custmizing the serach button
const input = document.querySelector('.mainForm__input')
const button =document.querySelector('.mainForm__button')
// console.log(button)
button.addEventListener('click', async (event) => {
    event.preventDefault()
    const userName = await getUserByUserName(input.value)    
    render(userName)    
})




const allUsers = await getAllGithubUsers()
// const userName = await getUserByUserName('mojombo')
const repository = await getRepositoryByUserName('mojombo')

// console.log(allUsers)
// console.log(userName)
// console.log(repository)


