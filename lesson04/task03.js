const calculate = (sum, count, promo) => {
  let resultSum = sum;

  if (count > 10) {
    resultSum *= 0.97;
  }
  if (resultSum > 30000) {
    resultSum *= 0.85;
  }

  if (promo === "METHED") {
    resultSum *= 0.9;
  }

  if (promo === "G3H2Z1" && resultSum > 2000) {
    resultSum -= 500;
  }

  return Math.round(resultSum);
};

console.log(calculate(32000, 11, "METHED"));
