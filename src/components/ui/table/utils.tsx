import * as I from "./interfaces"
import { transformSizesofColumns } from "./useTable"

interface IRefineStringSizes {
  showCheck?: boolean
  showExpandableCell?: boolean
  showExtraColumn?: boolean
  columnExtraSize?: I.IsizeOfColumn
}
export const RefineStringSizes = ({
  showCheck, showExpandableCell, showExtraColumn,
  columnExtraSize
}: IRefineStringSizes, sizesString: string | undefined) => {
  let rawSizeCheck = `minmax(40px, 40px)`
  let check = showCheck ? rawSizeCheck : ''

  let rawExpandableCell = `minmax(32px, 32px)`
  let expandableCell = showExpandableCell ? rawExpandableCell : ''

  let rawExtraColumn = transformSizesofColumns(columnExtraSize || {min: '40px'})
  let extraColumn = showExtraColumn ? rawExtraColumn : ''

  return ` ${expandableCell} ${extraColumn} ${check} ${sizesString}`

}