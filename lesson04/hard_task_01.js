const getNod = (a, b) => {
  let ostatok = 0;
  let max = a > b ? a : b;
  let min = b < a ? b : a;
  let bool = true;
  while (bool) {
    ostatok = max % min;
    if (max % min === 0) {
      bool = false;
      ostatok = min;
    }
    max = min;
    min = ostatok;
  }
  return ostatok;
};

console.log(getNod(84, 90));
