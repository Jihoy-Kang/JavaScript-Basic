//if
let menu = 3
if(menu == 1){
    console.log("물건 사")
}else if(menu == 2){
    console.log("잔고확인")
}else if(menu == 3){
    console.log("히스토리 확인")
}else{
    console.log("집에가")
}

//switch
switch (menu){
    case 1 : console.log("물건 사")
    break;
    case 2 : console.log("잔고확인")
    break;
    case 3 : console.log("히스토리 확인")
    break;
    default : console.log("집에가")
}
//switch는 값이 하나로 떨어질때만 한정적으로 사용가능함
//ex) menu = 1 && menu = 2 이렇게 안됨

//삼항연산식 조건?True일때 : False일때
let answer = menu <=3?"범위안 숫자" : "범위 밖 숫자"
console.log(answer)

let answer2 = menu <=3? menu : "범위 밖 숫자"
console.log(answer2)
//삼항연산식은 조건이 많지않고 리턴해야하는 값이 하나 일 때 사용