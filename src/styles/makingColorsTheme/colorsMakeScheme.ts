import Color from "color"

const errorColor = '#FF1616'

export const rawHexColorToHexColor = (rawHexColor: string) => (
  rawHexColor.substring(0, 1) !== '#' ?
  '#' + rawHexColor : rawHexColor
)

export const hexColorToRawHexColor = (hex: string) => hex.substring(1, hex.length)

export const isValidHex = (color: string) => {

  if (color.substring(0, 1) === '#') color = color.substring(1)

  switch (color.length) {
    case 3: return /^[0-9A-F]{3}$/i.test(color)
    case 6: return /^[0-9A-F]{6}$/i.test(color)
    case 8: return /^[0-9A-F]{8}$/i.test(color)
    default: return false
  }
}

export const getColorsList = (
  colorsAmount: number,
  colorsShiftAmount: number,
  mixColor: string,
  rotate: number,
  saturation: number,
  mainColor: string,
) => {

  const colorsList = []

  const givenColor = isValidHex(rawHexColorToHexColor(mainColor)) ?
    rawHexColorToHexColor(mainColor) : errorColor

  let step
  for (step = 0; step < colorsAmount; step++) {
    if (isValidHex(rawHexColorToHexColor(mainColor))) {
      colorsList.push(
        Color(givenColor)
        .rotate((step + 1) / colorsAmount * -rotate)
        .saturate((step + 1) / colorsAmount * (saturation / 100))
        .mix(Color(mixColor), (colorsShiftAmount / 100) * (step + 1) / colorsAmount).hex()
      )
    } else {
      colorsList.push(errorColor)
    }
  }

  return colorsList
}

export const makingDarkColors = (
  darkColorsAmount: number,
  darkestAmount: number,
  darkColorsMixRotate: number,
  darkSaturation: number,
  mainColor: string
) => {
  return getColorsList(
    darkColorsAmount,
    darkestAmount,
    'black',
    darkColorsMixRotate,
    darkSaturation,
    mainColor
  ).map((color) => (color))
}

export const makingLightColors = (
  lightColorsAmount: number,
  lightestAmount: number,
  lightColorsMixRotate: number,
  lightSaturation: number,
  mainColor: string
) => {
  return getColorsList(
    lightColorsAmount,
    lightestAmount,
    'white',
    lightColorsMixRotate,
    lightSaturation,
    mainColor
  ).map((color) => (color))
}

export const listOfColors = (mainColor: string, amountD = 9, amountL = 9 ) => {

  const darkColorsAmount = amountD
  const darkestAmount = 86.4
  const darkColorsMixRotate = 0
  const darkSaturation = 100

  const darkColors = makingDarkColors(
    darkColorsAmount,
    darkestAmount,
    darkColorsMixRotate,
    darkSaturation,
    mainColor
  )

  const lightColorsAmount = amountL
  const lightestAmount = 92
  const lightColorsMixRotate = 0
  const lightSaturation = 100

  const lightColors = makingLightColors(
    lightColorsAmount,
    lightestAmount,
    lightColorsMixRotate,
    lightSaturation,
    mainColor,
  )
  const result = {lightColors, mainColor, darkColors}

  return result
}