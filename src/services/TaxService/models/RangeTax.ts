export type RangeTax = {
  taxRange: [number, number];
  taxableIncome: number;
  percent: number;
  withheld: number;
  restRange: number;
};
