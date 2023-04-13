import * as I from "./interfaces"
import { transformSizesofColumns } from "./useTable"

interface IRefineStringSizes {
  showCheck?: boolean
  showExpandableCell?: boolean
  showExtraColumn?: boolean
  columnExtraSize: I.IsizeOfColumn
}
export const RefineStringSizes = ({
  showCheck, showExpandableCell, showExtraColumn,
  columnExtraSize
}: IRefineStringSizes, sizesString: string | undefined) => {
  let rawSizeCheck = transformSizesofColumns({min: '40px', max: '40px'})
  let check = showCheck ? rawSizeCheck : ''

  let rawExpandableCell = transformSizesofColumns({min: '24px', max: '24px'})
  let expandableCell = showExpandableCell ? rawExpandableCell : ''

  let rawExtraColumn = transformSizesofColumns(columnExtraSize)
  // let rawExtraColumn = transformSizesofColumns(columnExtraSize)
  let extraColumn = showExtraColumn ? rawExtraColumn : ''

  return ` ${expandableCell} ${check} ${extraColumn} ${sizesString} `

}