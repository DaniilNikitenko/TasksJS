const getConverter = (money) => {
  let resultMoney = money;
  resultMoney *= 73 / 1.2;
  return Math.round(resultMoney);
};
const user = +prompt("Введите сумму в евро: ");
const result = getConverter(user);
console.log(`${result} рублей`);
