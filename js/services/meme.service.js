'use strict'

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