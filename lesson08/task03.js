const generator = (count, n, m, parity) => {
  const allNumbers = [];
  if (n < m && n > 0 && m > 0) {
    for (let i = 0; i < count; i++) {
      allNumbers.push(Math.floor(n + Math.random() * (m - n)));
    }
    if (parity === "even") {
      const evenNumbers = allNumbers.filter((even) => even % 2 === 0);
      return evenNumbers;
    }

    if (parity === "odd") {
      const oddNumbers = allNumbers.filter((odd) => odd % 2 !== 0);
      return oddNumbers;
    }
  }
  return "Введите корректные значения";
};

console.log(generator(100, 10, 30, "odd"));
