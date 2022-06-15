const parseCount = (str) => {
    let count = Number.parseInt(str);
    if (isNaN(count) === true) {
      throw new Error("Невалидное значение");
    } else {
      return count;
    }
  };
  
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
  