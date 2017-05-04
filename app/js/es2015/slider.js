"use strict";

const imgArr = [
    'url(img/Home_0009s_0001_Layer-14.png)',
    'url(img/background2.jpg)',
    'url(img/background3.jpg)',
    'url(img/background4.jpg)'
]
const slideArea = document.querySelector('.masthead')
const delay = 4000
let start=1



function Show() {
    start=(start+1)%imgArr.length
    slideArea.style.backgroundImage=imgArr[start]
    slideArea.style.transitionDuration='2s'

}
setInterval(Show,delay)



