function problem5(money) {
  const bill50000 = exchangeTo50000(money);
  money %= 50000;

  const bill10000 = exchangeTo10000(money);
  money %= 10000;

  const bill5000 = exchangeTo5000(money);
  money %= 5000;

  const bill1000 = exchangeTo1000(money);
  money %= 1000;

  const bill500 = exchangeTo500(money);
  money %= 500;

  const bill100 = exchangeTo100(money);
  money %= 100;

  const bill50 = exchangeTo50(money);
  money %= 50;

  const bill10 = exchangeTo10(money);
  money %= 10;

  const bill1 = exchangeTo1(money);
  money %= 1;
  
  return [bill50000, bill10000, bill5000, bill1000, bill500, bill100, bill50, bill10, bill1];
}

function exchangeTo50000(money) {
  const FIFTYTHOUSAND = 50000;
  return Math.floor(money/FIFTYTHOUSAND);
}

function exchangeTo10000(money) {
  const TENTHOUSAND = 10000;
  return Math.floor(money/TENTHOUSAND);
}

function exchangeTo5000(money) {
  const FIVETHOUSAND = 5000;
  return Math.floor(money/FIVETHOUSAND);
}

function exchangeTo1000(money) {
  const THOUSAND = 1000;
  return Math.floor(money/THOUSAND);
}

function exchangeTo500(money) {
  const FIVEHUNDRED = 500;
  return Math.floor(money/FIVEHUNDRED);
}

function exchangeTo100(money) {
  const HUNDRED = 100;
  return Math.floor(money/HUNDRED);
}

function exchangeTo50(money) {
  const FIFTY = 50;
  return Math.floor(money/FIFTY);
}

function exchangeTo10(money) {
  const TEN = 10;
  return Math.floor(money/TEN);
}

function exchangeTo1(money) {
  return money
}

module.exports = problem5;
