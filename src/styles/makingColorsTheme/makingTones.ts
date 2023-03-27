import { listOfColors } from "./colorsMakeScheme"

type typeOfColor = string | undefined
export interface ImakeColorsTone {
  c025?: typeOfColor,
  c050?: typeOfColor,
  c075?: typeOfColor,
  c100?: typeOfColor,
  c125?: typeOfColor,
  c150?: typeOfColor,
  c175?: typeOfColor,
  c200?: typeOfColor,
  c225?: typeOfColor,
  c250?: typeOfColor,
  c275?: typeOfColor,
  c300?: typeOfColor,
  c325?: typeOfColor,
  c350?: typeOfColor,
  c400?: typeOfColor,
  c450?: typeOfColor,
  c500?: typeOfColor,
  c550?: typeOfColor,
  c600?: typeOfColor,
  c650?: typeOfColor,
  c675?: typeOfColor,
  c700?: typeOfColor,
  c725?: typeOfColor,
  c750?: typeOfColor,
  c775?: typeOfColor,
  c800?: typeOfColor,
  c825?: typeOfColor,
  c850?: typeOfColor,
  c875?: typeOfColor,
  c900?: typeOfColor,
  c925?: typeOfColor,
  c950?: typeOfColor,
  c975?: typeOfColor,
}
export const makingTonesGiant = (color: string): ImakeColorsTone => {
  let colorList = listOfColors(color, 16, 16)
  return {
    c025: colorList.lightColors[15],
    c050: colorList.lightColors[14],
    c075: colorList.lightColors[13],
    c100: colorList.lightColors[12],
    c125: colorList.lightColors[11],
    c150: colorList.lightColors[10],
    c175: colorList.lightColors[9],
    c200: colorList.lightColors[8],
    c225: colorList.lightColors[7],
    c250: colorList.lightColors[6],
    c275: colorList.lightColors[5],
    c300: colorList.lightColors[4],
    c325: colorList.lightColors[3],
    c350: colorList.lightColors[2],
    c400: colorList.lightColors[1],
    c450: colorList.lightColors[0],
    c500: colorList.mainColor,
    c550: colorList.darkColors[0],
    c600: colorList.darkColors[1],
    c650: colorList.darkColors[2],
    c675: colorList.darkColors[3],
    c700: colorList.darkColors[4],
    c725: colorList.darkColors[5],
    c750: colorList.darkColors[6],
    c775: colorList.darkColors[7],
    c800: colorList.darkColors[8],
    c825: colorList.darkColors[9],
    c850: colorList.darkColors[10],
    c875: colorList.darkColors[11],
    c900: colorList.darkColors[12],
    c925: colorList.darkColors[13],
    c950: colorList.darkColors[14],
    c975: colorList.darkColors[15],
  }
}

export const makingTonesLargest = (color: string): ImakeColorsTone => {
  let colorList = listOfColors(color, 12, 12)
  return {
    c025: colorList.lightColors[11],
    c050: colorList.lightColors[10],
    c075: colorList.lightColors[9],
    c100: colorList.lightColors[8],
    c125: colorList.lightColors[7],
    c150: colorList.lightColors[6],
    c200: colorList.lightColors[5],
    c250: colorList.lightColors[4],
    c300: colorList.lightColors[3],
    c350: colorList.lightColors[2],
    c400: colorList.lightColors[1],
    c450: colorList.lightColors[0],
    c500: colorList.mainColor,
    c550: colorList.darkColors[0],
    c600: colorList.darkColors[1],
    c650: colorList.darkColors[2],
    c700: colorList.darkColors[3],
    c750: colorList.darkColors[4],
    c800: colorList.darkColors[5],
    c850: colorList.darkColors[6],
    c875: colorList.darkColors[7],
    c900: colorList.darkColors[8],
    c925: colorList.darkColors[9],
    c950: colorList.darkColors[10],
    c975: colorList.darkColors[11],
  }
}

export const makingTonesLarge = (color: string): ImakeColorsTone => {
  let colorList = listOfColors(color)
  return {
    c050: colorList.lightColors[8],
    c100: colorList.lightColors[7],
    c150: colorList.lightColors[6],
    c200: colorList.lightColors[5],
    c250: colorList.lightColors[4],
    c300: colorList.lightColors[3],
    c350: colorList.lightColors[2],
    c400: colorList.lightColors[1],
    c450: colorList.lightColors[0],
    c500: colorList.mainColor,
    c550: colorList.darkColors[0],
    c600: colorList.darkColors[1],
    c650: colorList.darkColors[2],
    c700: colorList.darkColors[3],
    c750: colorList.darkColors[4],
    c800: colorList.darkColors[5],
    c850: colorList.darkColors[6],
    c900: colorList.darkColors[7],
    c950: colorList.darkColors[8],
  }
}

export const makingTonesSmall = (color: string): ImakeColorsTone => {
  let colorList = listOfColors(color, 2, 2)
  return {
    c300: colorList.lightColors[1],
    c400: colorList.lightColors[0],
    c500: colorList.mainColor,
    c600: colorList.darkColors[0],
    c700: colorList.darkColors[1],
  }
}

export const makingTonesClassic = (color: string): ImakeColorsTone => {
  let colorList = listOfColors(color, 4, 4)
  return {
    c100: colorList.lightColors[3],
    c200: colorList.lightColors[2],
    c300: colorList.lightColors[1],
    c400: colorList.lightColors[0],
    c500: colorList.mainColor,
    c600: colorList.darkColors[0],
    c700: colorList.darkColors[1],
    c800: colorList.darkColors[2],
    c900: colorList.darkColors[3],
  }
}

export const makingTonesBig = (color: string): ImakeColorsTone => {
  let colorList = listOfColors(color, 6, 6)
  return {
    c100: colorList.lightColors[5],
    c150: colorList.lightColors[4],
    c200: colorList.lightColors[3],
    c300: colorList.lightColors[2],
    c350: colorList.lightColors[1],
    c400: colorList.lightColors[0],
    c500: colorList.mainColor,
    c550: colorList.darkColors[0],
    c600: colorList.darkColors[1],
    c700: colorList.darkColors[2],
    c750: colorList.darkColors[3],
    c800: colorList.darkColors[4],
    c900: colorList.darkColors[5],
  }
}

