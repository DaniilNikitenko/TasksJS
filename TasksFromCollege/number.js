const numberToText = (num) => {
  let resultNum = num;

  //Массив с числами от 1 до 9
  const ones = [
    "",
    "один",
    "два",
    "три",
    "четыре",
    "пять",
    "шесть",
    "семь",
    "восемь",
    "девять",
  ];
  //Массив с числами от 10 до 19
  const teens = [
    "десять",
    "одиннадцать",
    "двенадцать",
    "тринадцать",
    "четырнадцать",
    "пятнадцать",
    "шестнадцать",
    "семнадцать",
    "восемнадцать",
    "девятнадцать",
  ];
  //Массив с числами от 20 до 90
  const tens = [
    "",
    "",
    "двадцать",
    "тридцать",
    "сорок",
    "пятьдесят",
    "шестьдесят",
    "семьдесят",
    "восемьдесят",
    "девяносто",
  ];

  //Массив с сотнями
  const hundreds = [
    "",
    "сто",
    "двести",
    "триста",
    "четыреста",
    "пятьсот",
    "шестьсот",
    "семьсот",
    "восемьсот",
    "девятьсот",
  ];
  //Массив с тысячами
  const thousands = ["", "тысяча", "тысячи", "тысяч"];
  //Если введенное число 0
  if (resultNum === 0) {
    return "ноль";
  }

  let text = "";
  //Если минус
  if (resultNum < 0) {
    text += "минус ";
    resultNum = Math.abs(resultNum);
  }

  if (resultNum < 10) {
    text += ones[resultNum];
  } else if (resultNum < 20) {
    text += teens[resultNum - 10];
  } else if (resultNum < 100) {
    text += tens[Math.floor(resultNum / 10)] + " " + ones[resultNum % 10];
  } else if (resultNum < 1000) {
    text += hundreds[Math.floor(resultNum / 100)] + " ";
    if (resultNum % 100 >= 10 && resultNum % 100 < 20) {
      text += teens[resultNum % 10];
    } else {
      text +=
        tens[Math.floor((resultNum % 100) / 10)] + " " + ones[resultNum % 10];
    }
  } else {
    let count = 0;
    while (resultNum > 0) {
      const remainder = resultNum % 1000;
      if (remainder > 0) {
        const str = numberToText(remainder);
        if (count == 0) {
          text = str;
        } else {
          text = str + " " + thousands[count] + " " + text;
        }
      }
      resultNum = Math.floor(resultNum / 1000);
      count++;
    }
  }

  return text.trim();
};

let user = +prompt("Введите число");

alert(numberToText(user));
