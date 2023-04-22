const generator = (count, n, m, parity = "") => {
  const allNumbers = [];
  const range = Math.abs(n - m);
  const min = Math.min(n, m);
  for (let i = 0; i < count; ) {
    randomNumber = Math.floor(Math.random() * range) + min;

    if (parity === "even" && randomNumber % 2 === 0) {
      allNumbers.push(randomNumber);
      i++;
    }

    if (parity === "odd" && randomNumber % 2 !== 0) {
      allNumbers.push(randomNumber);
      i++;
    }

    if (parity !== "even" && parity !== "odd") {
      allNumbers.push(randomNumber);
      i++;
    }
  }

  return allNumbers;
};

console.log(generator(100, 100, 5, "odd"));
