const sum = (elem) => {
  let result = 0;
  for (const i of elem) {
    result += i;
  }
  return result;
};

const getAverageValue = (allCach) => Math.floor(sum(allCach) / allCach.length);

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

console.log(getAverageValue(allCashbox));
