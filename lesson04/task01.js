const getConverter = (money) => {
  let resultMoney = money;
  resultMoney *= 73 / 1.2;
  return Math.round(resultMoney);
};

const result = getConverter(200);
console.log(`${result} рублей`);
