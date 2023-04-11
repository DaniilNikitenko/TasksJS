const calculate = (sum, count, promo) => {
  let resultSum = sum;
  let resultCount = count;
  let resultPromo = promo;
  if (resultCount > 10) {
    resultSum *= 0.97;
  }
  if (resultSum > 30000) {
    resultSum *= 0.85;
  }

  if (resultPromo === "METHED") {
    resultSum *= 0.9;
  }

  if (resultPromo === "G3H2Z1" && resultSum > 2000) {
    resultSum -= 500;
  }

  return Math.round(resultSum);
};

console.log(calculate(32000, 11, "METHED"));
