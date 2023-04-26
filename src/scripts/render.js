// function createCard(){
//     const div = 
// }

 export function render(array){
    const body = document.querySelector('.body__index')
    // const body = document.querySelector('.body__profile')
    const divTopPart = document.createElement('div')
    const divUser = document.createElement('div')
    const h1 = document.createElement('h1')
    const img = document.createElement('img')
    const button = document.createElement('button')

    body.append(divTopPart)
    divTopPart.append(divUser, button)
    divUser.append(h1, img)

    h1.innerHTML = array.name
    img.src = array.avatar_url
    button.innerHTML = 'Trocar de usuário'
}