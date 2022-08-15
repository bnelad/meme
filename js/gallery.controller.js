'use strict'

function renderGallery() {
    const images = getImages()
    let strHTMLs = ''
    strHTMLs = images.map(image => {
        return `<img class="pic" onclick="onImgSelect(${image.id})" src="${image.url}">`
    })
    document.querySelector('.gallery').innerHTML = strHTMLs.join('')
}

function getImages() {
    return gImgs
}

function onImgSelect(imgId) {
    setImg(imgId)
    renderMeme()
    changingSectionView()
}

function onPressGalleryButton() {
    changeToGalleryview()
}
