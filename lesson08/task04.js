const generateLeapYears = (n, m) => {
  const min = Math.min(n, m);
  const max = Math.max(n, m);
  const leapYears = [];
  const startYear = min < 0 ? 0 : min;
  for (let year = startYear; year <= max; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      leapYears.push(year);
    }
  }
  return leapYears;
};

console.log(generateLeapYears(1524, 1300));
