const income = prompt("Введите заработок:");

if (income <= 15000) {
  console.log("Налог 13%: " + income * 0.13);
} else if (income > 15000 && income <= 50000) {
  console.log("Налог 20%: " + income * 0.2);
} else if (income > 50000) {
  console.log("Налог 30%: " + income * 0.3);
}
