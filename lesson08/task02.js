const generator = (count, n, m) => {
  const allNumbers = [];
  const range = Math.abs(n - m) + 1;
  const min = Math.min(n, m);
  for (let i = 0; i < count; i++) {
    allNumbers.push(Math.floor(Math.random() * range) + min);
  }
  return allNumbers;
};

console.log(generator(100, -5, 20));
