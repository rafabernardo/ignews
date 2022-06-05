export const getStripeCurrency = (value: number) => (isNaN(value) ? 0 : value / 100)

export const currencyFormat = (value: number) => {
  console.log('🚀 ~ file: helpers.ts ~ line 4 ~ currencyFormat ~ value', value)
  if (value) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value)
  }
  return '$0.00'
}
