export const findBestTransaction = (days) => {
  let minBuyPrice = days[0];
  let profit = days[0] - days[1];

  days.forEach(( currentPrice, ndx ) => {
    // пропускаем первый элемент
    if (ndx === 0) return;

    const potentialProfit = currentPrice - minBuyPrice;

    profit = Math.max(profit, potentialProfit);

    minBuyPrice = Math.min(minBuyPrice, currentPrice);
  });

  return profit;
}