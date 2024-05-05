export const moneyFormatter = new Intl.NumberFormat('en', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 0,
});

export const percentFormatter = new Intl.NumberFormat('en', {
  style: 'percent',
  minimumFractionDigits: 0,
});
