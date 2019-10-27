export const findBestTransaction = days => {
  let bestBuy = days[0];
  let bestSell = days[1];
  let potentialProfit = 0;
  let profit = bestSell - bestBuy;

  days.forEach((currentPrice, ndx) => {
    if (ndx === 0) return;

    potentialProfit = currentPrice - bestBuy;

    if (potentialProfit > profit) {
      profit = potentialProfit;
      bestSell = currentPrice;
    }

    if (currentPrice < bestBuy) {
      bestBuy = currentPrice;
    }
  });

  return profit;
};