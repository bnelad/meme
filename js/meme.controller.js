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
        drawText()     
    }
}

function renderRandomMeme(randomMeme) {
    const memeId = randomMeme.selectedImgId
    const img = new Image()
    img.src = `images/${memeId}.jpg`
    
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        console.log('randomMeme lines: ', randomMeme.lines)
        console.log('aaaaaaaa11')
        console.log(randomMeme)
        drawRandomText(randomMeme)     
    }
}

function drawRandomText(randomMeme) {
    const lines = randomMeme.lines
    lines.forEach((line, idx) => {
        gCtx.beginPath()
        gCtx.textBaseline = 'middle'
        gCtx.textAlign = 'center'
        gCtx.lineWidth = 1
        const fontSize = randomMeme.lines[idx].size
        gCtx.font = `${fontSize}px david`
        const colorTxt = randomMeme.lines[idx].color
        gCtx.fillStyle = colorTxt
        if (randomMeme.selectedLineIdx === idx)
            gCtx.strokeStyle = 'red'
        else
            gCtx.strokeStyle = 'black'
        switch (randomMeme.lines[idx].align) {
            case 'left':
                gCtx.fillText(line.txt, 120, line.y)
                gCtx.strokeText(line.txt, 120, line.y)
                break
            case 'center':
                gCtx.fillText(line.txt, 300, line.y)
                gCtx.strokeText(line.txt, 300, line.y)
                break
            case 'right':
                gCtx.fillText(line.txt, 450, line.y)
                gCtx.strokeText(line.txt, 450, line.y)
                break
            default:
        }
        gCtx.closePath()
    })
}

function drawText() {
    const lines = getMeme().lines
    lines.forEach((line, idx) => {
        gCtx.beginPath()
        gCtx.textBaseline = 'middle'
        gCtx.textAlign = 'center'
        gCtx.lineWidth = 1
        const fontSize = gMeme.lines[idx].size
        gCtx.font = `${fontSize}px david`
        const colorTxt = gMeme.lines[idx].color
        gCtx.fillStyle = colorTxt
        if (gMeme.selectedLineIdx === idx)
            gCtx.strokeStyle = 'red'
        else
            gCtx.strokeStyle = 'black'
        switch (gMeme.lines[idx].align) {
            case 'left':
                gCtx.fillText(line.txt, 120, line.y)
                gCtx.strokeText(line.txt, 120, line.y)
                break
            case 'center':
                gCtx.fillText(line.txt, 300, line.y)
                gCtx.strokeText(line.txt, 300, line.y)
                break
            case 'right':
                gCtx.fillText(line.txt, 450, line.y)
                gCtx.strokeText(line.txt, 450, line.y)
                break
            default:
        }
        gCtx.closePath()
    })
}

function onSetText(txt){
    setLineTxt(txt)
    renderMeme()
}

function drawText4(txt, x, y) {
    const lines = getMeme().lines
    lines.forEach((line, idx) => {
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
    })
}

function onNextLine() {
    setNextLine()
}

function onSwitchLine() {
    setSwitchLine()
    renderMeme()
}

function onChangeFont(sizeChange) {
    changeFont(sizeChange)
    renderMeme()
}

function onChangeAlignment(newAlignment) {
    changeAlignment(newAlignment)
    renderMeme()
}

function onChangeColor(newColor) {
    changeColor(newColor)
    renderMeme()
}

function onChangeLocation(locationChange) {
    changeLocation(locationChange)
    renderMeme()
}

function onMakeRandomMeme() {
    makeRandomMeme()
}
