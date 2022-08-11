'use strict'

var gImgs = [{id: 2, url: 'images/2.jpg', keywords: ['funny', 'cat']},
             {id: 3, url: 'images/3.jpg', keywords: ['funny', 'cat']},
             {id: 4, url: 'images/4.jpg', keywords: ['funny', 'cat']},
             {id: 5, url: 'images/5.jpg', keywords: ['funny', 'cat']}]


function renderGallery() {
    console.log('gallery')
    const images = getImages()
    console.log('images:', images)
    let strHTMLs = ''
    strHTMLs = images.map(image => {
        return `<img onclick="onImgSelect(${image.id})" src="${image.url}">`
    })
    document.querySelector('.gallery').innerHTML = strHTMLs.join('')
}

function changingSectionView() {
    document.querySelector('.gallery').classList.toggle('hidden')
    document.querySelector('.editor').classList.toggle('hidden')
    console.log('change')
}

function getImages() {
    return gImgs
}

function onImgSelect(imgId) {
    console.log('ttt')
    setImg(imgId)
    renderMeme()
    changingSectionView()
}