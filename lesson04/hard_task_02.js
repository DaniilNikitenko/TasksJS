const getMin = (a, b) => {
  return (a + b - Math.abs(a - b)) / 2;
};

console.log(getMin(54, 144));
