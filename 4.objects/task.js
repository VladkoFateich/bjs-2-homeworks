function Student(name, gender, age) {
    this.name = name
    this.gender = gender
    this.age = age
    
}
const firstStudent = new Student('Vasia', 'male', 37)
const secondStudent = new Student('Mikolia', 'male', 30)
const thirdStudent = new Student('Olia', 'female', 32)
const fourthStudent = new Student('Sam', 'male', 39)

Student.prototype.setSubject = function (subjectName) {
  return(`Name: ${this.name}`)
}

// Student.prototype.addMark = function (subjectMark) {
//   return(`Mark: ${this.mark}`)
// if (this.mark === undefined) {

// }
// }

console.log(firstStudent)
console.log(secondStudent)
console.log(thirdStudent)
console.log(fourthStudent)