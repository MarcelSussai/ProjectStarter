export const configMonetaryValue = (value: number | undefined) => {
  return value?.toLocaleString('pt-BR', {
    style: 'currency', currency: 'BRL'
  }).toString().replace('R$', '').trim()
}