const parseCount = (str) => {
  let count = Number.parseInt(str)
    if (isNaN(count) === true) {
      throw new Error("Невалидное значение");
    } else {
      return count;
    }
  };

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

