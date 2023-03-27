export default function keepOrderInArray(
  origin: string[], destiny: string[]
): string[] {
  return origin.filter( (item) => destiny.indexOf(item) !== -1 )
}