'use strict'

var gKeywordSearchCountMap = {'funny': 12,'cat': 16, 'baby': 2}

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {   
        txt: 'I sometimes eat Falafel',
        size: 20,
        align: 'left',
        color: 'red'
        }
    ]
}

var gMeme = {
    selectedImgId: 2,
    selectedLineIdx: 0,
    lines: [
        {   
        txt: 'I sometimes eat Falafel',
        size: 20,
        align: 'left',
        color: 'red'
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