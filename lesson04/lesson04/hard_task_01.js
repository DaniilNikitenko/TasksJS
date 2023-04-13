const getNod = (a, b) => {
  let ostatok = 1;
  b > a && ([a, b] = [b, a]);

  while (ostatok) {
    ostatok = a % b;
    a = b;
    b = ostatok;
  }

  return a;
};

console.log(getNod(144, 12));
