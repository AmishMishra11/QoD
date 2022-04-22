// Given the Cost Price(CP) and the Selling Price(SP) of a product. Write a Program to Calculate the Profit or Loss

const calculateProfitLoss = (cp, sp) =>
  cp > sp ? console.log(cp - sp, "Loss") : console.log(sp - cp, "Profit");

calculateProfitLoss(1500, 2000);
calculateProfitLoss(3125, 1125);
