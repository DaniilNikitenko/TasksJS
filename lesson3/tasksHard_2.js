const income = prompt("Введите заработок:");
let tax;

if (income <= 15000) {
  tax = income * 0.13;
} else if (income > 15000 && income <= 50000) {
  tax = 15000 * 0.13 + (income - 15000) * 0.2;
} else {
  tax = 15000 * 0.13 + 35000 * 0.2 + (income - 50000) * 0.3;
}

console.log("Налог: " + tax);
