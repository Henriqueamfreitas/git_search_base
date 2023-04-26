const userName = JSON.parse(localStorage.getItem('UserName'))
const avatarURL = JSON.parse(localStorage.getItem('avatarURL'))
const repository = await getRepositoryByUserName(userName)


async function createCard(array){
    // Creating the HTML elements
    const div = document.createElement('div')
    const h2 = document.createElement('h2')
    const p = document.createElement('p')
    const button = document.createElement('button')
    
    // Establishing the hierarchy between elements
    div.append(h2,p,button)

    // Assigning value to the elements
    h2.innerHTML = array.name
    p.innerHTML = array.description
    button.innerHTML = 'Repositório'

    // Assigning classes to the elements
    div.classList = 'divCards__card'
    h2.classList = 'card__h2 title-4'
    p.classList = 'card__p text-8'
    button.classList = 'card__button text-7'

    return div
}

async function render(array){
    // Creating the HTML elements
    const body = document.querySelector('.body__profile')
    const divTopPart = document.createElement('div')
    const divUser = document.createElement('div')
    const h1 = document.createElement('h1')
    const img = document.createElement('img')
    const button = document.createElement('button')
    const divCards = document.createElement('div')

    // Establishing the hierarchy between elements
    body.append(divTopPart, divCards)
    divTopPart.append(divUser, button)
    divUser.append(img, h1)

    // Assigning value to the elements
    h1.innerHTML = userName
    img.src = avatarURL
    button.innerHTML = 'Trocar de usuário'

    // Assigning classes to the elements
    body.classList = 'body__profile'
    divTopPart.classList = 'divTopPart'
    divUser.classList = 'divUser'
    h1.classList = 'h1 title-3'
    img.classList = 'img'
    button.classList = 'backButton text-6'
    divCards.classList = 'divCards'

    button.addEventListener('click', () => {
        window.location.replace('/')        
    })

    array.forEach(async (element) => {
        const card = await createCard(element)
        console.log(card)
        divCards.append(card)
    });
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

render(repository)
