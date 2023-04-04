
export const refineOptionsOfRow = (
  showCheck: boolean, showOptionsCell: boolean,
  sizesString: string | undefined
) => {
  if (showOptionsCell && showCheck) {
    return ` minmax(24px, 24px) minmax(40px, 40px) ${sizesString} `
  }
  if (!showOptionsCell && showCheck) {
    return ` minmax(40px, 40px) ${sizesString} `
  }
  if (showOptionsCell && !showCheck) {
    return ` minmax(24px, 24px) ${sizesString} `
  }
  if (!showOptionsCell && !showCheck) return sizesString
}
