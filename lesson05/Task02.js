const isPrime = (num) => {
  count = 1;

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      count++;
    }
  }

  if (count > 2 || count === 1) {
    return false;
  }

  if (count === 2) {
    return true;
  }
};

const user = +prompt("Введите число");

if (user > 0) {
  console.log(isPrime(user));
} else {
  console.log("Введите корректное значение");
}
