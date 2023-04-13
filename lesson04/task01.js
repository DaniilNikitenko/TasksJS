const getConverter = (money) => Math.round((money * 73) / 1.2);
const user = +prompt("Введите сумму в евро: ");
console.log(`${getConverter(user)} рублей`);
