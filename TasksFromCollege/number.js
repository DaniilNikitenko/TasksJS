function numberToText(num) {
  var ones = [
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
  var teens = [
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
  var tens = [
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
  var hundreds = [
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
  var thousands = ["", "тысяча", "тысячи", "тысяч"];

  if (num == 0) {
    return "ноль";
  }

  var text = "";

  if (num < 0) {
    text += "минус ";
    num = Math.abs(num);
  }

  if (num < 10) {
    text += ones[num];
  } else if (num < 20) {
    text += teens[num - 10];
  } else if (num < 100) {
    text += tens[Math.floor(num / 10)] + " " + ones[num % 10];
  } else if (num < 1000) {
    text += hundreds[Math.floor(num / 100)] + " ";
    if (num % 100 >= 10 && num % 100 < 20) {
      text += teens[num % 10];
    } else {
      text += tens[Math.floor((num % 100) / 10)] + " " + ones[num % 10];
    }
  } else {
    var count = 0;
    while (num > 0) {
      var remainder = num % 1000;
      if (remainder > 0) {
        var str = numberToText(remainder);
        if (count == 0) {
          text = str;
        } else {
          text = str + " " + thousands[count] + " " + text;
        }
      }
      num = Math.floor(num / 1000);
      count++;
    }
  }

  return text.trim();
}

for (let i = 0; i < 12000; i++) {
  console.log(numberToText(i));
}
