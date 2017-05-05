"use strict";

const imgArr = [
    'url(img/Home_0009s_0001_Layer-14.png)',
    'url(img/background2.jpg)',
    'url(img/background3.jpg)',
    'url(img/background4.jpg)'
]
const slideArea = document.querySelector('.masthead')
const delay = 3500
let start = 0


let Show = () => {
    start = (start + 1) % imgArr.length
    slideArea.style.backgroundImage = imgArr[start]
    slideArea.style.transitionDuration = '2.5s'

}
setInterval(Show, delay)



