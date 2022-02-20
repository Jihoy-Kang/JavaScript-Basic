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
  
  //map 문제
  //모든 이름을 대문자로 바꾸어서 출력하시오.
names.forEach((item)=> {
console.log(item.toUpperCase())
})
  //성을제외한 이름만 출력하시오. (예-[“Steven”,“Bill”,“Mark”,“Elon”…])
names.forEach((item)=> {
console.log(item.split(' ')[0]) //split함수는 조건 기준으로 어레이로 반환
})
  //이름의 이니셜만 출력하시오. (예-[“SPU”,“BG”,“MEZ”,“EM”…])

let initialName = names.map((item)=>{
    let splitName = item.split(" ")
    let initOnly = ""
    splitName.forEach((item2)=>{
        initOnly += item2[0]
    })
    return initOnly
})
console.log(initialName)

//filter 문제
//이름에 a를 포함한 사람들을 출력하시오.

let fil = names.filter((item)=>{
    return item.includes("a")
})
console.log(fil)

//이름에 같은 글자가 연속해서 들어간 사람을 출력하시오. (예-tt,ff,ll 이런 글자들)

let sameStr = names.filter((item)=>{
    let splitItem = item.split("")
    return splitItem.some((letter, index) =>
        letter == splitItem[index+1])
})
console.log(sameStr)


//some 문제
//전체 이름의 길이가 20자 이상인 사람이 있는가?

let ifSome = names.some((item)=>{
    return item.length >= 20
})
console.log(ifSome)
//성을 제외한 이름에 p를 포함한 사람이 있는가?(대소문자 상관 no)
let ifSome = names.some((item)=>{
    return item.includes("p" || "P")
})
console.log(ifSome)