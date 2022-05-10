function solveEquation(a, b, c) {
  if (typeof a !== "number") return [];
  if (typeof b !== "number") return [];
  if (typeof c !== "number") return [];
  const d = b ** 2 - 4 * a * c;
  const xOne = -b / (2 * a);
  const xTwo = (-b + Math.sqrt(d)) / (2 * a);
  const xThree = (-b - Math.sqrt(d)) / (2 * a);
  if (d < 0) return [];
  if (d === 0) return [xOne];
  return [xTwo, xThree];
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
