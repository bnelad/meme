'use strict'

var gElCanvas
var gCtx

function onInit() {
    gElCanvas = document.querySelector('#my-canvas')
    gCtx = gElCanvas.getContext('2d')
    renderMeme()
    renderGallery()
}

function renderMeme() {
    const meme = getMeme()
    const memeId = meme.selectedImgId
    const img = new Image()
    img.src = `images/${memeId}.jpg`
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        console.log(meme.lines[0])
        drawText(meme.lines[0].txt, 250,  50)    
    }
}

function drawText(txt, x, y) {
    gCtx.beginPath()
    gCtx.textBaseline = 'middle'
    gCtx.textAlign = 'center'
    gCtx.lineWidth = 1
    gCtx.font = '40px david'
    gCtx.fillStyle = 'yellow'
    gCtx.fillText(txt, x, y)
    gCtx.strokeStyle = 'green'
    gCtx.strokeText(txt, x, y)
    gCtx.closePath()
}

function onSetText(txt){
    setLineTxt(txt)
    renderMeme()
}