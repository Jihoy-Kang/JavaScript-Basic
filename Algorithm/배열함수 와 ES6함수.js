//함수의 진화

//기존함수
function array(){
    console.log("haha")
}

//살짝 업그레이드
let array2 = () =>{
    return "haha"
}
console.log(array2())

//완전체 
let array3 = () => "haha" //중괄호{}와 return 생략가능




//배열함수 array함수
let names = [
    "Steven Paul Jobs",
    "Bill Gates",
    "Mark Elliot Zuckerberg",
    "Elon Musk",
    "Jeff Bezos",
    "Warren Edward Buffett",
    "Larry Page",
    "Larry Ellison",
    "Tim Cook",
    "Lloyd Blankfein",
];

let ceoList = [
    {name:"Johnny", age:20, ceo=true},
    {name:"Rong", age:24, ceo=true},
    {name:"Hoon", age:12, ceo=false}
]
//forEach (기본)

function printName(item){
    console.log(item)
}

names.forEach(printName)

//forEach (심화)
names.forEach(function(item){
    console.log(item)
})

//forEach (심화++) ES6문법 적용 ()=>{}
names.forEach((item) => {console.log(item)})

//forEach (INDEX)
names.forEach((item, index) => {console.log(item, index)})

//map 반드시 반환(return)하는 값이 있다. / 객체에 필요한 정보 받아올 때 주로사용

let data = ceoList.map((item)=>{
    return item.name
})
console.log(data)


//filter 조건을 넣어서 true인 값만 받는다
let data = ceoList.filter((item)=>{
    return item.age == 12
})
console.log(data)

let data = names.filter((item)=>{
    return item.startsWith("L")
})
console.log(data)

//some 리스트 안에 조건에 맞는 아이템이 1개라도 있는지 True / False로 반환한다.
let data = names.some((item)=>{
    return item.startsWith("L")
})
console.log(data)

//every 모든 아이템이 조건에 맞는지 True / False로 반환한다.
let data = names.every((item)=>{
    return item.startsWith("L")
})
console.log(data)

