const generator = (count, n, m) => {
  const allNumbers = [];
  if (n < m && n > 0 && m > 0) {
    for (let i = 0; i < count; i++) {
      allNumbers.push(Math.floor(n + Math.random() * (m - n)));
    }
    return allNumbers;
  }
  return "Введите корректные значения";
};

console.log(generator(100, 10, 30));
