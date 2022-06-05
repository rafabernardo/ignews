export const getStripeCurrency = (value: number) => (isNaN(value) ? 0 : value / 100)

export const currencyFormat = (value: number) => {
  if (value) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value)
  }
  return '$0.00'
}
