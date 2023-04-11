const income = +prompt("Введите заработок:");
let tax = 0;
let ostatok = income;

if (ostatok > 50000) {
  tax += (ostatok - 50000) * 0.3;
  ostatok = 50000;
}

if (ostatok > 15000) {
  tax += (ostatok - 15000) * 0.2;
  ostatok = 15000;
}

if (ostatok > 0) {
  tax += (ostatok - 0) * 0.13;
  ostatok = 0;
}

console.log(`Налог: ${tax}`);
