'use strict'
import { radioPlayerInit } from "./radioPlayer.js";
import { videoPlayerInit } from "./videoPlayer.js";
import { musicPlayerInit } from "./musicPlayer.js";

radioPlayerInit()
videoPlayerInit()

const playerBtn = document.querySelectorAll('.player-btn'),
    playerBlock = document.querySelectorAll('.player-block'),
    temp = document.querySelector('.temp')

const deactivatianPlayer = () => {
    temp.style.display = 'none'
    playerBtn.forEach(item => {
        item.classList.remove('active')
    })
    playerBlock.forEach(item => {
        item.classList.remove('active')
    })
}

playerBtn.forEach((btn, index) => {
    btn.addEventListener('click', event => {
        deactivatianPlayer()
        btn.classList.add('active')
        playerBlock[index].classList.add('active')
    })
})