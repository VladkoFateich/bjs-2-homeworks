function Student(name, gender, age) {
<<<<<<< HEAD
    this.name = name
    this.gender = gender
    this.age = age
    
=======
  this.name = name;
  this.gender = gender;
  this.age = age;
>>>>>>> 2b485fe8271126d3f1164cb9c7cca372d3832347
}
const firstStudent = new Student('Vasia', 'male', 37)
const secondStudent = new Student('Mikolia', 'male', 30)
const thirdStudent = new Student('Olia', 'female', 32)
const fourthStudent = new Student('Sam', 'male', 39)

Student.prototype.setSubject = function (subjectName) {
<<<<<<< HEAD
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
=======
  this.subject = subjectName;
};

Student.prototype.addMark = function (subjectMark) {
  if (this.mark === undefined) {
    this.marks = [subjectMark];
  } else {
    const newArr = [...this.marks, subjectMark];
    this.marks = newArr;
  }
};
Student.prototype.addMarks = function (...mark) {
  const newMarks = [...this.marks, ...mark];
  this.marks = newMarks;
};

Student.prototype.getAverage = function () {
  const newArray = this.marks;
  let sum = 0;
  newArray.forEach((element) => {
    sum += element;
  });
  let average = sum / newArray.length;
  this.average = average;
};

Student.prototype.exclude = function (reason) {
  this.exclude = reason;
  delete this.subject;
  delete this.marks;
};

const firstStudent = new Student("Vasia", "male", 37);
firstStudent.setSubject("Algebra");
firstStudent.addMark(3);
firstStudent.addMarks(4, 5);
firstStudent.addMarks(1, 2);
firstStudent.getAverage();
console.log(firstStudent);
firstStudent.exlude("low grades");
const secondStudent = new Student("Mikolia", "male", 30);
console.log(secondStudent);
const thirdStudent = new Student("Olia", "female", 32);
console.log(thirdStudent);
const fourthStudent = new Student("Sam", "male", 39);
console.log(fourthStudent);
>>>>>>> 2b485fe8271126d3f1164cb9c7cca372d3832347
