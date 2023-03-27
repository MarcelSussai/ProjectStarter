import { makingTonesGiant } from './makingTones'

// valores dos alphas em dois digitos hexadecimais a ser acrescido na cor
const alphas = ['16', '24', '32', '48', '64', '80', '96', 'A0', 'B0', 'C0', 'D0', 'E0']
// criando o objecto com as escalas
const theme_colors_default = {
  main:           makingTonesGiant('#3C90E5'),
  second:         makingTonesGiant('#3ce579'),
  greyAzure:      makingTonesGiant('#a5b9cd'),
  grey:           makingTonesGiant('#A3ABBD'),
  limeGreen:      makingTonesGiant('#a8e53c'),
  green:          makingTonesGiant('#2AA071'),
  leaf:           makingTonesGiant('#00755D'),
  paleGreen:      makingTonesGiant('#6C9F76'),
  teal:           makingTonesGiant('#008796'),
  cyan:           makingTonesGiant('#3ce4e5'),
  blue:           makingTonesGiant('#3564FC'),
  greyBlue:       makingTonesGiant('#3D4372'),
  greyPurple:     makingTonesGiant('#555480'),
  purple:         makingTonesGiant('#913ce5'),
  wine:           makingTonesGiant('#904B72'),
  paleRed:        makingTonesGiant('#BB767D'),
  pink:           makingTonesGiant('#D92884'),
  red:            makingTonesGiant('#E53C3B'),
  strongRed:      makingTonesGiant('#990F09'),
  brown:          makingTonesGiant('#3e2710'),
  orange:         makingTonesGiant('#E5913C'),
  strongYellow:   makingTonesGiant('#e5cd3c'),
  yellow:         makingTonesGiant('#F9F871'),
  gold:           makingTonesGiant('#FFDE82'),
  cream:          makingTonesGiant('#FFEDCB'),
  default:        makingTonesGiant('#888888'),
}
// criando arrays de nomes das cores
export type themeRawColors = typeof theme_colors_default
export const colorsNames = Object.entries(theme_colors_default)
  .map((entrie, i1) => entrie[0])

// Exmandindo as cores com os valores de opacidade para cada cor da escala
export interface ColorValue { [key: string]: string; }
interface Colors { [key: string]: ColorValue; }
function expandColors(colors: any, weights: string[]): Colors {
  const newColors: Colors = {};
  Object.keys(colors).forEach((groupName) => {
    const group = colors[groupName];
    Object.keys(group).forEach((weightName) => {
      const colorValue = group[weightName];
      weights.forEach((extraWeight, i) => {
        const newWeightName = `${weightName}-${i + 1}`;
        const newColorValue = `${colorValue}${extraWeight}`;
        if (!newColors[groupName]) { newColors[groupName] = {}; }
        newColors[groupName][newWeightName] = newColorValue;
      });
      if (!newColors[groupName]) { newColors[groupName] = {}; }
      newColors[groupName][weightName] = colorValue;
    });
  });
  return newColors;
}
export const FinalColors = expandColors(theme_colors_default, alphas)

// criando a string crua que contém todas as cores transformadas em variáveis css
let rawStringAllCssVars = ''
Object.entries(FinalColors).map((colorGroup, i1) => {
  Object.entries(colorGroup[1]).map((v2, i2) => {
    rawStringAllCssVars += `
    --color-${colorGroup[0]}-${v2[0].substring(1)}: ${v2[1]};`
  })
})

// conseguindo todos os pesos que definem o tom de cada cor na escala da cor
export const rawWeights: any = []
Object.entries(FinalColors).map((colorGroup, i1) => {
  Object.entries(colorGroup[1]).map((color) => {
    if(!rawWeights.includes(color[0].substring(1, 4))) rawWeights.push(color[0].substring(1, 4))
  })
})


const colors = {
  ...FinalColors
}


export { rawStringAllCssVars }
export default colors