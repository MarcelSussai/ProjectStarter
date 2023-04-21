import { StatusType } from '@/type/interfaces';
export interface IResults { id: string | number }
export interface ITableData {
  status: number
  results?: IResults[] | undefined
}

export interface IuseTable<T> { configColumns: ICollunnsConfig<T>[] }
export interface ICellHeaderSelector {
  qtd?: string
}

export interface IValueComponent<T> {
  row: T
  rowId?: string
  color?: string
}

export interface ICollunnsConfig<T> {
  idKey: string
  name: string
  order: number
  ValueComponent?: (props: IValueComponent<T>) => JSX.Element
  HeaderComponent?: (props: IValueComponent<T>) => JSX.Element
  sizeOfColumn?: IsizeOfColumn | undefined
  hideByDefault?: boolean
}

export interface IsizeOfColumn {
  min: string
  max?: string
}

export interface IFnSorterHeaderParams {
  headerId: string
  sortMode: boolean
}
export interface ITable<T> {
  data: ITableData | undefined
  configColumns: ICollunnsConfig<T>[]
  color1?: string | 'default'
  colorG1?: string | 'main'
  colorG2?: string | 'second'
  title?: string
  showTitle?: boolean
  columnExtraSize?: IsizeOfColumn
  showExtraColumn?: boolean
  showExpandableCell?: boolean
  showCheck?: boolean
  showTableHeaderOptions?: boolean
  showFooter?: boolean
  componentExtraCell?: (row: T) => JSX.Element
  componentFooter?: (rows: T[]) => JSX.Element
  fnStatusForRow?: (row: T) => StatusType
  alternateBg?: boolean
  onChangeSelecteds?: (selecteds: string[]) => void
  onChangeClicked?: (rowId: string) => void
  isLoading?: boolean
  expandableComponent?: (props: IValueComponent<T>) => JSX.Element
  sortByHeader?: boolean
  frSorterHeader?: (value: IFnSorterHeaderParams) => void
  paddingCell?: boolean
  opts?: {
    optColumns: boolean
    optFilters: boolean
    optPrint: boolean
    optDownload: boolean
    optSearch: boolean
    fns?: {
      fnFilter: (value: any) => void
      fnSearch: (value: any) => void
    }
  }
}

export interface IColorsTable {
  color1: string | 'default'
  colorG1: string | 'main'
  colorG2: string | 'second'
  sizesString?: string | undefined
  isDarkTheme?: boolean
  showTableHeaderOptions?: boolean
}

export interface ISizesAndDarkTheme {
  sizesString?: string | undefined
  isDarkTheme?: boolean
  isFirst?: boolean
  isLast?: boolean
  isLastRow?: boolean
  isFirstRow?: boolean
}

export interface IExtraCell extends ISizesAndDarkTheme {}
export interface IAll extends IColorsTable {}
export interface IAllScroll {
  isRadius?: boolean
}
export interface IStyTableHeader extends ISizesAndDarkTheme {
  showTableHeaderOptions?: boolean
}
export interface ITableRow extends ISizesAndDarkTheme {
  alternateBg?: boolean
  statusColor?: string
  altBg: boolean
}
export interface ICellHeader extends ISizesAndDarkTheme {
  sortByHeader?: boolean
}
export interface ICellRow extends ISizesAndDarkTheme {
  altBg: boolean
  statusColor?: string
  paddingCell?: boolean
}

export interface IExtraButton {
  zIndex?: string
  tipText?: string
}
export interface IIconOption {
  zIndex?: string
  opened?: boolean
  tipText?: string
}

export interface ITableOptions<T> extends ITableTitle {
  color?: string
  configColumns: ICollunnsConfig<T>[]
  hiddens: ICollunnsConfig<T>[]
  showOrHideColumn: (col: ICollunnsConfig<T>) => void
  opts?: {
    optColumns?: boolean
    optFilters?: boolean
    optPrint?: boolean
    optDownload?: boolean
    optSearch?: boolean
  }
}

export interface ITableTitle {
  showTitle: boolean
}
export interface IAllTableOptions extends ITableTitle {
  opened?: boolean
}

export interface IExapandableWrapper {
  isOpen?: boolean
  elementHeight?: string
}
export interface IExapandableItem {
  ExpandThis: React.ReactNode
  showExpandable: boolean
  color?: string
}