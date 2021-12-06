const states = {
    images: []
  }


const section = document.querySelector('.image-container')
const cardImgEl = document.querySelector('.image-card')

function getImagesFromServer(){
    return fetch("http://localhost:3000/images").then(function(response){
        return response.json()
        
})
}

function renderImages(){
    section.innerHTML = ''
    for (const stateImage of states.images){
    const articleEl = document.createElement('article')
    articleEl.setAttribute('class', 'image-card')

    const h2TextEl = document.createElement('h2')
    h2TextEl.textContent = stateImage.title

    const imageEl = document.createElement('img')
    imageEl.setAttribute('class', 'image')
    imageEl.setAttribute('src', stateImage.image)

    const likesDivEl = document.createElement('div')
    likesDivEl.setAttribute ('class', 'likes-section')

    const spanEL = document.createElement('span')
    spanEL.setAttribute('class', 'likes')
    spanEL.textContent = stateImage.likes

    const LikeBtnEl = document.createElement('button')
    LikeBtnEl.setAttribute('class', 'like-button')
    LikeBtnEl.textContent = '♥'

    const comentUlEl = document.createElement('ul')
    comentUlEl.setAttribute('class', 'comments')
    for (const comment of stateImage.comments){
        const comentLiEl = document.createElement('li')
        comentLiEl.textContent = comment.content
        comentUlEl.append(comentLiEl)
    }
    likesDivEl.append(spanEL, LikeBtnEl)
    articleEl.append(h2TextEl, imageEl, likesDivEl, comentUlEl)
    section.append(articleEl)
}
}

function render(){
    renderImages()
}
getImagesFromServer().then(function (imageDataFromServer){
    states.images = imageDataFromServer
    render()
})
render()

