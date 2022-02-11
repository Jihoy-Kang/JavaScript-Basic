//연습
function makeburger(type){
    console.log("빵두기")
    console.log("상추두기")
    if(type == "불고기"){
    console.log("고기패티두기")
    } else if(type == "새우"){
    console.log("새우패티두기")
    }
    console.log("뚜껑덮기")
}
makeburger("새우")


function servecoke(type,size,num){
    if(size == "L"){
    console.log("콜라컵(L) 준비")
    }else{
    console.log("콜라컵M 준비")
    }
    console.log("얼음담기")
    if(type == "제로"){
    console.log("제로콜라담기")
    }else{
    console.log("코카콜라담기")
    }
    console.log(type+"콜라",size+"사이즈",num+"개 준비완료")
    
    return "완료되었습니다."
}
  //순차적으로 처리하다가 return을 만나면 바로 함수 종료 됨

let result = servecoke("제로","M",2)
console.log("콜라 주문결과 :",result)

function servefrenchfries(){
    console.log("감튀박스준비")
    console.log("감튀담기")
}

function makeset(){
    makeburger("새우")
    servefrenchfries()
    servecoke("제로","M",1)

}
makeset()

//문제풀이
function greet(name){
    console.log("안녕 내 이름은", name+"야")
    return name
}

function meetAt(yy,mm,dd){
    let year = yy ;
    let month = mm ;
    let day = dd;

    if (day){
    return `${yy}/${mm}/${dd}`
    }
    if (month){
    return `${yy}년 ${mm}월`
    }
    if(year){
    return `${yy}년`
    }
}

console.log(meetAt(2022))