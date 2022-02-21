let name = "Johnny"
let age = 17

let person{name,age} // 변수를 키값으로 가지고와서 

console.log(person) // 키가 가지고있는 벨류를 불러옴




let bts = {
    name2 : "방탄소년단",
    num : 7
}
let name2 = bts.name2
let num = bts.num

let {name2, num} = bts // bts라는 객체의 name2과 num이라는 키값을  외부변수로 선언

console.log(name2,num) // 선언된 변수의 밸류를 나타낼 수 있음




//백틱(``)

let name3 = Johnny
let age3 = 18
console.log(`제이름은${name3}이고, ${age}살입니다.`)

let array = [1,2,3]

let let [a,b,c] = array //배열의 값을 변수 a,b,c에 넣는다
let let [a,...rest] = array // a변수에 첫번째 값만 넣고rest변수에는 나머지 넣는다. (...변수명)

console.log(a,b,c)




let a =[1,2]
let b =[3,4]
let c =[5,6]

let result = [...a,...b,...c] // 변수 a,b,c 내용을 전부 가지고와서 result에 넣는다.
console.log(result)




function foo (){
    console.log(hello)
}

let foo = ()=>{
    console.log(hello)
} //위 함수와 같은 구조
// 하지만 화살표 함수구조에는 this가 없다.

let age5 = 17
let person= {
    name = "hoho",
    age5 = 20,
    getInfo:function(){
        console.log(this.age5) // this는 이 person안에 있는 자신을 가르키며,객체 안의 age를 의미한다.
    }
}

person.getInfo() // this가 없으면 전역변수의 age5를 불러옴

//function에서 this는 객체자신을 의미
//화살표함수의 경우 this는 스스로 this를 생성할 수 없다. 즉, lexical scope(함수가 포함된 곳 윈도우를 의미)




//연습
//1. 다음의 코드를 es6 문법을 이용하여 재작성 하시오

//let name="noona's fruit store"
//let fruits = ["banana","apple","mango"]
//let location="Seoul"

//let store = {    name:name,    fruits:fruits,    location:location}
//console.log(store)

let name="noona's fruit store"
let fruits = ["banana","apple","mango"]
let location="Seoul"

let store = {name,fruits,location}
console.log(store)

//2. es6 문법을 이용하여 다음과 같이 출력하시오
//제 가게 이름은 noona's fruit store 입니다. 위치는 Seoul 에 있습니다

console.log(`제 가게 이름은 ${name}입니다. 위치는${location}에 있습니다.`)

//3. 다음 코드를 Destructoring을 이용하여 해결하시오

//function calculate(obj){    // 함수 안을 바꾸시오
//    return a+b+c
//}

//calculate({a:1,b:2,c:3})

function calculate(obj){
    let {a,b,c} = obj
    return a+b+c
}

//4. 다음 문제에 정답이 true가 나오게 하시오

//let name="noona store"
//let fruits = ["banana","apple","mango"]
//let address={
//    country:"Korea",
//    city:"Seoul"
//}

//function findStore(obj){
//    return name="noona store" && city == "Seoul"
//}
//console.log(findStore({name,fruits,address}))


let name="noona store"
let fruits = ["banana","apple","mango"]
let address={
    country:"Korea",
    city:"Seoul"
}

function findStore(obj){
  let {name,fruits,address:{city}} = obj
  return name=="noona store" && city == "Seoul"
}
console.log(findStore({name,fruits,address}))

//5. 다음과같이 프린트되게 코드를 바꾸시오
function getNumber(){
    let array = [1,2,3,4,5,6]    // 여기서부터 바꾸시오
    let [first,,third,,forth] = array
    return {first,third,forth}
}
console.log(getNumber()) //  결과값 { first: 1, third: 3, forth: 4 }

//6. 다음의 결과가 true가 되게 하시오
function getCalendar(first, ...rest) {
  return (
    first === "January" &&
    rest[0] === "Febuary" &&
    rest[1] === "March" &&
    rest[2] === undefined
  );
}
console.log(getCalendar('January','Febuary','March')); // 여기를 바꾸시오

//7. 두 어레이들중 최소값을 찾는 함수를 완성하시오
function getMinimum(){
    let a= [45,23,78]
    let b = [54,11,9]
    return Math.min(...a,...b) // 여기를 바꾸시오
}
console.log(getMinimum())

//8. 다음의 함수를 화살표 함수로 바꾸시오

function sumNumber() {
    // 여기서부터 바꾸시오
    const sum = (a,b) => a+b
    return sum(40, 10);
  }sum = (a,b) => a+b

  //9. 다음함수를 화살표 함수로 바꾸시오
function sumNumber() {
    //여기를 바꾸시오
    return addNumber(1)(2)(3);
    function addNumber(a) {
      return function (b) {
        return function (c) {
          return a + b + c;
        };
      };
    }
  } 


  let addNumber = (a) => (b) => (c) => a+b+c;
   console.log(sumNumber());



