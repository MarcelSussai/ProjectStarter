import { makingTonesGiant } from './makingTones'
import * as I from './interfaces'


export interface IColors {
  default: I.ImakeColorsTone
  main: I.ImakeColorsTone
  second: I.ImakeColorsTone
  grey: I.ImakeColorsTone
  greyAzure?: I.ImakeColorsTone
  limeGreen?: I.ImakeColorsTone
  green?: I.ImakeColorsTone
  leaf?: I.ImakeColorsTone
  paleGreen?: I.ImakeColorsTone
  teal?: I.ImakeColorsTone
  cyan?: I.ImakeColorsTone
  blue?: I.ImakeColorsTone
  greyBlue?: I.ImakeColorsTone
  greyPurple?: I.ImakeColorsTone
  purple?: I.ImakeColorsTone
  wine?: I.ImakeColorsTone
  paleRed?: I.ImakeColorsTone
  pink?: I.ImakeColorsTone
  red?: I.ImakeColorsTone
  strongRed?: I.ImakeColorsTone
  brown?: I.ImakeColorsTone
  orange?: I.ImakeColorsTone
  strongYellow?: I.ImakeColorsTone
  yellow?: I.ImakeColorsTone
  gold?: I.ImakeColorsTone
  cream?: I.ImakeColorsTone
}
// valores dos alphas em dois digitos hexadecimais a ser acrescido na cor
const alphas = ['08', '12', '16', '24', '32', '48', '64', '80', '96', 'A0', 'B0', 'C0', 'D0', 'E0']
// criando o objecto com as escalas
const theme_colors_default: IColors = {
  default:        makingTonesGiant('#888888'),
  main:           makingTonesGiant('#3C90E5'),
  second:         makingTonesGiant('#3ce579'),
  grey:           makingTonesGiant('#A3ABBD'),
  greyAzure:      makingTonesGiant('#a5b9cd'),
  limeGreen:      makingTonesGiant('#a8e53c'),
  green:          makingTonesGiant('#2AA071'),
  leaf:           makingTonesGiant('#00755D'),
  paleGreen:      makingTonesGiant('#6C9F76'),
  teal:           makingTonesGiant('#008796'),
  cyan:           makingTonesGiant('#3ce4e5'),
  blue:           makingTonesGiant('#3B6AFF'),
  greyBlue:       makingTonesGiant('#3D4372'),
  greyPurple:     makingTonesGiant('#555480'),
  purple:         makingTonesGiant('#913ce5'),
  wine:           makingTonesGiant('#904B72'),
  paleRed:        makingTonesGiant('#BB767D'),
  pink:           makingTonesGiant('#D92884'),
  red:            makingTonesGiant('#E53C3B'),
  strongRed:      makingTonesGiant('#990F09'),
  brown:          makingTonesGiant('#6D563F'),
  orange:         makingTonesGiant('#E5913C'),
  strongYellow:   makingTonesGiant('#e5cd3c'),
  yellow:         makingTonesGiant('#F9F871'),
  gold:           makingTonesGiant('#FFDE82'),
  cream:          makingTonesGiant('#FFEDCB'),
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

let colorsToTable: any = []
Object.entries(theme_colors_default).map((item, i1) => {
  colorsToTable.push({id: i1, nameColor: item[0], tones: item[1]})
})
export {colorsToTable}

// criando a string crua que contém todas as cores transformadas em variáveis css
let rawStringAllCssVars = ''
Object.entries(FinalColors).map((colorGroup, i1) => {
  Object.entries(colorGroup[1]).map((v2, i2) => {
    rawStringAllCssVars += `
    --color-${colorGroup[0]}-${v2[0].substring(1)}: ${v2[1]};`
  })
})

let rawColorsKeysValues: any = []
Object.entries(theme_colors_default).map((colorGroup, i1) => {
  let raw: any = []
  Object.entries(colorGroup[1]).map((v2, i2) => { raw.push(v2) })
  rawColorsKeysValues.push({ colorName: colorGroup[0], colors: raw })
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


export { rawStringAllCssVars, rawColorsKeysValues }
export default colors