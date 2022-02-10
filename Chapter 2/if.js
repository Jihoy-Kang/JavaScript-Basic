//if(조건문){
//  조건이 충족되면 할 일들
//}

if(false){
    console.log("조건은 참입니다.")
} else{
    console.log("조건은 거짓입니다.")
}

let age = 17
if(age>=20){
console.log("운전 가능")
} else if(age>=18){
console.log("오토바이 가능")
}else{
console.log("운전 불가능")
}

let age2 = 20
if(age2>=18 && age2 < 20){
console.log("오토바이 가능")
}else if(age2>=20){
console.log("운전 가능") 
}else{
console.log("운전 불가능")
}

let licence = false
if(age2 >= 20){
if(licence != true){
    console.log("운전가능")
}else{
    console.log("면허를 따라")
}
}else{
console.log("운전 불가능")
}

//문제
//유저가 입력하는 숫자가 0인지 음성인지 양성인지 판단하는 프로그램을 만드시오.
let number = 0
if(number > 0){
    console.log("양수입니다.")
}else if(number < 0){
    console.log("음수입니다.")
}else{
    console.log("0입니다.")
}
//나는 대학교 교수다. 레포트 점수에따라 등급을 매기는 프로그램을 만드시오.
//90~100 : A
//80~89 : B
//70~79 : C
//60~69 : D
//less than 59 : F

let score = 59
if(score >=90){
    console.log("A")
} else if(score >= 80){
    console.log("B")
} else if(score >= 70){
    console.log("C")
} else if(score >= 60){
    console.log("D")
} else {
    console.log("F")
}

//한 지원자가 우리회사에 지원을했다. 지원자가 사용가능한 스킬은 배열에 제공이 된다
//let skills = ["HTML","CSS","Javascript","React"]
//Javascript와 React 둘다 할줄 안다면 “합격!” Javascript와 React 둘중 하나만 할줄 안다면 “예비”, 두 스킬이 없다면 “탈락” 을 보여주는 프로그램을 짜시오

let skills = ["HTML","CSS","Javascript","React"]

if(skills.includes("Javascript") && skills.includes("React")){
    console.log("합격")
} else if(skills.includes("Javascript") || skills.includes("React")){
    console.log("예비")
} else{
    console.log("불합격")
}