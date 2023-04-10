const income = +prompt("Введите заработок:");
let tax = 0;

if (income > 50000) {
  tax += income * 0.3;
}

if (income > 15000 && income <= 50000) {
  tax += income * 0.2;
}

if (income > 0 && income <= 15000) {
  tax += income * 0.13;
}

console.log(`Налог: ${tax}`);
