

let chances = 5
let gameOver = false
let playButton = document.getElementById("play-button")
let resultArea = document.getElementById("result-area")

playButton.addEventListener('click',play)

function play(){
    chances--
    resultArea.textContent = `${chances}번 남았습니다.`

    if(chances<1){
        gameOver = true
    }

    if(gameOver == true){
        playButton.disabled=true
    }

    if(userValue>computerNum){
        resultArea.textContent = "Down"
    }else if(userValue<computerNum){
        resultArea.textContent = "Up"
    }else if(userValue == computerNum){
        resultArea.textContent = "정답"
    }

}