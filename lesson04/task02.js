const getString = (str) => {
  let resultString = str;
  const newStr =
    resultString[0].toUpperCase() + resultString.slice(1).toLowerCase();
  return newStr;
};
console.log(getString("привет Мир"));
