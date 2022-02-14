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

function findSmallestElement (arr){
    let result = arr[0]
    if (arr.length === 0){
    return 0
    }else{
    for(let i = 1;i <= arr.length; i++){
        if(result > arr[i]){
        result = arr[i]
        }
    }
    }
    return result
}

console.log(findSmallestElement([10,2,3,4,5]))

//동전 세기
function money(amount){
    let cnt = amount
    let a = 0
    let b = 0
    let c = 0
    let d = 0
    let e = 0
    let f = 0
    a = parseInt(cnt/50000) //parseInt는 몫만 구할 수 있는 함수
    cnt = cnt-50000*a
    b = parseInt(cnt/10000)
    cnt = cnt-10000*b
    c = parseInt(cnt/5000)
    cnt = cnt-5000*c
    d = parseInt(cnt/1000)
    cnt = cnt-1000*d
    e = parseInt(cnt/500)
    cnt = cnt-500*e
    f = parseInt(cnt/100)
    cnt = cnt-100*f

    return `50000 x ${a} \n10000 x ${b}\n5000 x ${c}\n1000 x ${d}\n500 x ${e}\n100 x ${f}`
}

console.log(money(282800))


let unit = [50000,10000,5000,1000,500,100]

function change(money){
    for(let i = 0; i < unit.length;i++){
    let num = Math.floor(money/unit[i]) //Math.floor 는 소수점을 버려주는 역할을 한다.
    money = money - (unit[i]*num)
    console.log(`${unit[i]} x ${num}`)
    }
}
change(12300)
