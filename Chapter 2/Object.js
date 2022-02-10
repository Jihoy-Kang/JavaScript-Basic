//Array = []
//object = {} - key와 value를 갖고있는 정보

let patient = {
    name : "jimin",
    age : 17,
    disease : "cold"
}

console.log(patient)
console.log(patient.name)
console.log(patient["age"])
patient.name = "jk"
console.log(patient)
patient.age = 22
console.log(patient)

let patientlist = [{name:"jimin", age:17}, {name:"jk", age:22},{name:"jhope", age:25}]

console.log(patientlist)
console.log("첫번째 환자는 : ",patientlist[0])
console.log("첫번째 환자의 나이는 : ",patientlist[0].age)
console.log("첫번째 환자의 나이는 : ",patientlist[0]["age"])