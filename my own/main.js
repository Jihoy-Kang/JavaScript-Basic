//랜덤숫자설정

//유저숫자입력
//유저숫자가 랜덤숫자보다 높으면 다운, 낮으면 업, 맞으면 정답

//리셋버튼 누루면 초기화

//5번의 기회 지나면 버튼 disabled
// 범위밖에 숫자입력시 다시입력하세요
// 이미 입력한 번호 입력시 "이미 입력한번호입니다. 다시입력하세요"

let computerNum = 0
let chances = 5
let gameOver = false
let arr = []

let userInput = document.getElementById("user-input")
let playButton = document.getElementById("play-button")
let resultArea = document.getElementById("result-area")
let countArea = document.getElementById("count-area")
let resetButton = document.getElementById("reset-button")

playButton.addEventListener('click',play)
resetButton.addEventListener('click',reset)
userInput.addEventListener('focus',function(){userInput.value=''})

function randomNum(){
    computerNum = Math.floor(Math.random()*100)+1
    console.log('정답', computerNum)
}
randomNum()

function reset(){
    chances = 5
    userInput.value = ''
    arr = []
    playButton.disabled=false
    resultArea.textContent = '1 - 100사이 번호를 입력하세요.'
    countArea.textContent = `${chances}번 남았습니다.`
    randomNum()
}



function play(){
    let userValue = userInput.value

    if (arr.includes(userValue)){
        resultArea.textContent = "이미 입력한 번호입니다."
        return
    }

    if(100<userValue || 1>userValue){
        resultArea.textContent = "1 - 100사이 번호를 입력하세요."
        return
    }
    
    
    chances --
    countArea.textContent = `${chances}번 남았습니다.`

    if (userValue>computerNum){
        resultArea.textContent = "Down"
    }else if(userValue<computerNum){
        resultArea.textContent = "Up"
    }else if(userValue == computerNum){
        resultArea.textContent = "정답"
        gameOver = true
    }

    arr.push(userValue)
    console.log(arr)

    if(chances < 1){
        gameOver = true
    }

    if(gameOver == true){
        playButton.disabled = true
    }
}
