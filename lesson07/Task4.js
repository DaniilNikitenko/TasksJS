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

const getAveragePriceGoods = (cashBox) => {
  const totalCount = cashBox.reduce(
    (sum, current) => [sum[0] + current[0], sum[1] + current[1]],
    [0, 0]
  );
  const result = totalCount.reduce((sum, current) => Math.floor(current / sum));
  return result;
};

console.log(getAveragePriceGoods(allCashbox));
