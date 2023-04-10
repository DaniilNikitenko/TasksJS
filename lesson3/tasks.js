// Вторая задача
const rain = Math.random();
console.log(Math.round(rain));
if (Math.round(rain) === 1) {
  console.log("Пошёл дождь. Возьмите зонт");
} else if (Math.round(rain) === 0) {
  console.log("Дождя нет!");
}

// Третья задача

const firstExam = +prompt("Введите кол-во баллов по математике: "),
  thirdExam = +prompt("Введите кол-во баллов по русскому языку: "),
  secondExam = +prompt("Введите кол-во баллов по информатике: "),
  sumExam = firstExam + thirdExam + secondExam;

console.log(sumExam);

if (sumExam < 265) {
  console.log("Вы не набрали нужно количества баллов");
} else if (sumExam >= 265) {
  console.log("Поздравляю, вы поступили на бюджет!");
}

// Четвёртая задача задача

const money = prompt("Сколько денег хотите снять?");

if (Number.isNaN(money)) {
  console.log("Введите корректные данные");
} else if (money % 100 === 0) {
  console.log(`Вот ваши деньги ${money}`);
} else {
  console.log("Такая сумма не может быть выдана");
}
