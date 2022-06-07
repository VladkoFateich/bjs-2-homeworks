function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
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
