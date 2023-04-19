const generator = (count) => {
  const allNumbers = [];
  for (let i = 0; i < count; i++) {
    allNumbers.push(Math.floor(Math.random() * count));
  }
  return allNumbers;
};

console.log(generator(100));
