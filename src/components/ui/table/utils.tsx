
export const refineOptionsOfRow = (
  showCheck: boolean, showOptionsCell: boolean, sizesString: string | undefined, maxOptionCellSize = '.1fr'
) => {
  if (showOptionsCell && showCheck) return ` minmax(32px, ${maxOptionCellSize}) minmax(40px, 40px) ${sizesString} `
  if (!showOptionsCell && showCheck) return ` minmax(40px, 40px) ${sizesString} `
  if (showOptionsCell && !showCheck) return ` minmax(32px, ${maxOptionCellSize}) ${sizesString} `
  if (!showOptionsCell && !showCheck) return sizesString
}