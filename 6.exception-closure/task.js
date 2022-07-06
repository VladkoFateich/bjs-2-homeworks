const parseCount = (str) => {
<<<<<<< HEAD
  let count = Number.parseInt(str)
=======
    let count = Number.parseInt(str);
>>>>>>> 768c25dacdbc34ca1fa0dce6ba65ee7f47de03f6
    if (isNaN(count) === true) {
      throw new Error("Невалидное значение");
    } else {
      return count;
    }
  };
<<<<<<< HEAD

const validateCount = (str) => {
  try {
    return parseCount(str)
  } catch (error) {
    return error
  }
}

class Triangle {
  constructor(firstSide, secondSide, thirdSide) {
    this.firstSide = firstSide
    this.secondSide = secondSide
    this.thirdSide = thirdSide
  }
  getPerimeter () {
const perimeter = this.firstSide + this.secondSide + this.thirdSide
  return perimeter
}
  }

=======
  
  const validateCount = (str) => {
    try {
      return parseCount(str);
    } catch (error) {
      return error;
    }
  };
  
  console.log(parseCount("23"));
  
  class Triangle {
    constructor(firstSide, secondSide, thirdSide) {
      this.firstSide = firstSide;
      this.secondSide = secondSide;
      this.thirdSide = thirdSide;
    }
    check() {
      const checkTriangle = (value) => {
        if (this.firstSide + this.secondSide < this.thirdSide) {
          throw new Error("Треугольник с такими сторонами не существует");
        }
      };
    }
    getPerimeter() {
      const perimeter = this.firstSide + this.secondSide + this.thirdSide;
      return this.perimeter;
    }
    getArea(S) {
      let p = (1 / 2) * (this.firstSide + this.secondSide + this.thirdSide);
      const S = Math.sqrt(
        p * (p - this.firstSide) * (p - this.secondSide) * (p - this.thirdSide)
      );
    }
  }
  
>>>>>>> 768c25dacdbc34ca1fa0dce6ba65ee7f47de03f6
