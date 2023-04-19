const leapYears = (n, m) => {
  let leapYearsArr = [];
  if (n > 0 && m > 0) {
    for (let year = n; year <= m; year++) {
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        leapYearsArr.push(year);
      }
    }
    return leapYearsArr;
  }
  return "Число меньше 0";
};

console.log(leapYears(1300, 2024));
