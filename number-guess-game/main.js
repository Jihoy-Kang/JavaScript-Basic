//랜덤번호지정
//유저번호입력하고 go 버튼 누름
//만약에 유저가 번호를 맞추면 "맞췄습니다."
//랜덤번호가 유저번호보다 작다 " Down"
//랜던번호가 유저번호보다 크다 "Up"
//리셋버튼을 누르면 게임이 리셋된다
//5번의 기회를 다쓰면 게임이 끝난다. 더이상 추측불가(go버튼 disable)
//유저가 1-100번위 밖의 숫자를 입력하면 알려주는다. 기회를 깍지않는다.
//유저가 이미 입력한 숫자를 입력하면 기회를 깍지 않는다.

let computerNum = 0
let playButton = document.getElementById("play-button")
let userInput = document.getElementById("user-input")
let resultArea = document.getElementById("result-area")
let resetButton = document.getElementById("reset-button")
let chanceArea = document.getElementById("chance-area")
let history = []
let chances = 5
let gameOver = false

playButton.addEventListener("click",play)
resetButton.addEventListener("click",reset)
userInput.addEventListener("focus",function(){userInput.value = ""})


function PickRandomNum(){
    computerNum = Math.floor(Math.random() * 100)+1; //Math.random 은 0-1사이의 숫자를 불러옴 1도 포함을 안하기때문에 +1을해줘야한다.
    console.log("정답",computerNum);
}


function play(){
    let userValue = userInput.value
    
    if(userValue<1 || userValue>100){
        resultArea.textContent = "1과 100사이 숫자를 입력해주세요"
        return;
    }
    if(history.includes(userValue)){
        resultArea.textContent = "이미 입력한 숫자입니다 다른숫자를 넣어주세요 "
        return
    }
    chances--
    chanceArea.textContent = `남은기회 : ${chances}번`
    console.log("찬스",chances)
    
    if(userValue < computerNum){
        resultArea.textContent = "Up"
    } else if(userValue>computerNum){
        resultArea.textContent = "Down"
    } else if(userValue == computerNum){
        resultArea.textContent = "정답"
        gameOver = true
    }

    history.push(userValue)
    console.log(history)

    if(chances<1){
        gameOver = true
    }
    if(gameOver == true){
        playButton.disabled = true
    }
    
}




function reset(){
    userInput.value = ""
    PickRandomNum()
    resultArea.textContent = "결과값이 여기 나옵니다."
}