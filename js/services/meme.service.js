'use strict'

const memes = ['I like it', 'Nice one', 'Not bad my friend', 'Great thing', 'Smart choice', 'Brilliant decision', 'Spectacular show', 'Tell me about it', 'Tell me more', 'We can do it']
const colors = ['white', 'aqua', 'red', 'black', 'blue', 'pink', 'yellow']

var gKeywordSearchCountMap = {'funny': 12,'cat': 16, 'baby': 2}

var gMeme = {
    selectedImgId: 2,
    selectedLineIdx: 0,
    lines: [
        {   
        txt: 'Edit text',
        size: 35,
        align: 'center',
        color: 'white',
        y: 50
        } 
    ]
}

function getMeme() {
    return gMeme
}

function setImg(imgId) {
    gMeme.selectedImgId = imgId
}

function setLineTxt(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt
}

function setNextLine() {
    gMeme.selectedLineIdx++
    if (gMeme.selectedLineIdx === 1) {
        const newLine = {   
            txt: '',
            size: 35,
            align: 'center',
            color: 'white',
            y: 500
            }
        gMeme.lines.push(newLine)
    } else {
        const newLine = {   
            txt: '',
            size: 35,
            align: 'center',
            color: 'white',
            y: 300
            }
        gMeme.lines.push(newLine)
    }
}

function setSwitchLine() {
    if (gMeme.selectedLineIdx === gMeme.lines.length - 1)
        gMeme.selectedLineIdx = 0
    else 
        gMeme.selectedLineIdx++
}

function changeFont(sizeChange) {
    gMeme.lines[gMeme.selectedLineIdx].size += sizeChange
}

function changeAlignment(newAlignment) {
    gMeme.lines[gMeme.selectedLineIdx].align = newAlignment
}

function changeColor(newColor) {
    gMeme.lines[gMeme.selectedLineIdx].color = newColor
}

function changeLocation(locationChange) {
    gMeme.lines[gMeme.selectedLineIdx].y += locationChange
}

function makeRandomMeme() {
    if (document.querySelector('.editor').classList.contains('hidden')) changingSectionView()
    const randomMeme = getRandomMeme()
    console.log('randomMeme111: ', randomMeme)
    renderRandomMeme(randomMeme)
}

function getRandomMeme() {
    const memeId = getRandomIntInclusive(1, 18)
    const linesNum = getRandomIntInclusive(1, 2)
    const color = colors[getRandomIntInclusive(0, 6)]
    console.log('linesNum:', linesNum)
    if (linesNum === 1) {
        const line = memes[getRandomIntInclusive(0, 9)]
        const color = colors[getRandomIntInclusive(0, 6)]
        const textSize = getRandomIntInclusive(32, 55)
        const randomMeme = {
            selectedImgId: memeId,
            selectedLineIdx: 0,
            lines: [
                {   
                txt: line,
                size: textSize,
                align: 'center',
                color: color,
                y: 50
                } 
            ]
        }
        console.log('randomMeme: ', randomMeme)
        gMeme = randomMeme
    } else {
        console.log('wwwww')
        const line1 = memes[getRandomIntInclusive(0, 9)]
        const line2 = memes[getRandomIntInclusive(0, 9)]
        const color1 = colors[getRandomIntInclusive(0, 6)]
        const color2 = colors[getRandomIntInclusive(0, 6)]
        const textSize1 = getRandomIntInclusive(32, 55)
        const textSize2 = getRandomIntInclusive(32, 55)
        const randomMeme = {
            selectedImgId: memeId,
            selectedLineIdx: 0,
            lines: [
                {   
                txt: line1,
                size: textSize1,
                align: 'center',
                color: color1,
                y: 50
                },
                {   
                txt: line2,
                size: textSize2,
                align: 'center',
                color: color2,
                y: 500
                },
            ]
        }
        console.log('randomMeme: ', randomMeme)
        gMeme = randomMeme
    }  
    return gMeme
}
