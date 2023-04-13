const getMin = (a, b) => {
  return (a < b) * a + (a > b) * b;
};

console.log(getMin(54, 144));
