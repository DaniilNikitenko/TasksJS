const getAveragePriceGoods = (cashBox) => {
  let count = 0;
  let price = 0;
  for (let i = 0; i < cashBox.length; i++) {
    count += cashBox[i][0];
    price += cashBox[i][1];
  }
  return Math.floor(price / count);
};

const allCashbox = [
  [12, 4500],
  [7, 3210],
  [4, 650],
  [3, 1250],
  [9, 7830],
  [1, 990],
  [6, 13900],
  [1, 370],
];

console.log(getAveragePriceGoods(allCashbox));
