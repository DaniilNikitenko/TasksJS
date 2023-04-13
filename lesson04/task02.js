const getString = (str) => {
  str = str.trim().toLowerCase();
  return str[0].toUpperCase() + str.slice(1);
};
console.log(getString(" привет Мир"));
