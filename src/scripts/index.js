import { render } from "./render.js"

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

export async function getUserByUserName (userName) {
    const user = await fetch(`https://api.github.com/users/${userName}`, {
        method: 'GET'
    })

    .then(res => {
        if(res.ok){
            window.location.replace('src/pages/profile.html')
            return res.json()
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

async function getRepositoryByUserName (userName) {
    const repository = await fetch(`https://api.github.com/users/${userName}/repos`, {
        method: 'GET'
    })

    .then(res => {
        if(res.ok){
            return res.json()
        } else{
            throw new Error()
        }
    })

    .catch(error => {
        console.log(error)
    })

    return repository
}


const input = document.querySelector('.mainForm__input')
const button =document.querySelector('.mainForm__button')

button.addEventListener('click', async (event) => {
    event.preventDefault()
    localStorage.setItem('UserName', JSON.stringify(input.value));    
    const userName = await getUserByUserName(input.value)
    const avatarURL = userName.avatar_url
    localStorage.setItem('avatarURL', JSON.stringify(avatarURL));    
})







