
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
    h2.classList = 'card__h2'
    p.classList = 'card__p'
    button.classList = 'card__button'

    return div
}

 export async function render(array){
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
    divUser.append(h1, img)

    // Assigning value to the elements
    h1.innerHTML = array.name
    img.src = array.avatar_url
    button.innerHTML = 'Trocar de usuário'

    // Assigning classes to the elements
    body.classList = 'body__profile'
    divTopPart.classList = 'divTopPart'
    divUser.classList = 'divUser'
    h1.classList = 'h1'
    img.classList = 'img'
    button.classList = 'button'
    divCards. classList = 'divCards'

    array.forEach((element) => {
        createCard(element)
        divCards.append()
    });
}