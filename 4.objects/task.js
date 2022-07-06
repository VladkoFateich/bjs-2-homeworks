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
  this.subject = subjectName
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.mark = [];
  } 
  this.marks.push(mark)
};

Student.prototype.addMarks = function (...addingMarks) {
  if(this.marks === undefined) {
    this.marks = []
  }
  addingMarks.forEach(mark => this.marks.push(mark))
};

Student.prototype.getAverage = function () {
  let sum = this.marks.reduce((a, b) => a + b);
  let average = sum / this.marks.length
  return average;
};

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};

