//i=i+1와 i++는 같다


for(let i=0;i<=10;i++){
    if(i%2==0){
    console.log("야호", i)
    }
}

for(let j=0;j<=10;j+=2){
    console.log("야호", j)
}

//구구단
for(let a = 2; a<=9; a++){
    for(let b = 1; b<=9; b++){
    console.log(a+'*'+b+'='+a*b)
    }
}

//while  범위가 명확하지 않을 때 사용
let s =2
while(s<10){
    console.log("while문실행", s)
    s++
}


//for와 배열
let fruit=["banana","mango","grape","watermelon"]
console.log(fruit)

for(let i=0;i<fruit.length;i++){
    console.log(fruit[i])
}

//문제
//1부터 100까지 더하는 for문을 만들고 결과를 출력하시오.
let sum = 0
for(let a=1;a<=100;a++){
    sum += a
}
console.log(sum)

//1부터 100까지 홀수만 출력하자.
for(let a=1;a<=100;a++){
    if(a%2==1){
        console.log(a)
    }
}

//1부터 50까지 369결과를 프린트하자.
for(let i=1;i<=50;i++){
    let sv = i.toString()
    let result = ""
    for(j=0;j<sv.length;j++){
    if(sv[j]==3 || sv[j]==6 || sv[j]==9)
    result += "짝"
    }
    console.log(result.length>0? result:i)
}

//주어진 숫자가 소수이면 true 아니면 false를 출력하는 프로그램을 짜시오.
let n = 11
let prime = true

if(n === 1){
    prime = false
}

for(let i=2;i<n;i++){
    if(n%i == 0){
        prime = false    
    }
}
console.log(prime)