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
  max?: string | undefined
}


export interface ITable<T> {
  data: ITableData | undefined
  configColumns: ICollunnsConfig<T>[]
  color1?: string | 'default'
  colorG1?: string | 'main'
  colorG2?: string | 'second'
  title?: string
  showTitle?: boolean
  showCheck?: boolean
  showExpandableCell?: boolean
  maxOptionCellSize?: string
  componentOptionsCell?: (row: T) => JSX.Element
  alternateBg?: boolean
  onChangeSelecteds?: (selecteds: string[]) => void
  onChangeClicked?: (rowId: string) => void
  isLoading?: boolean
  expandableComponent?: (props: IValueComponent<T>) => JSX.Element
  sortByHeader?: boolean
  opts?: {
    optColumns?: boolean
    optFilters?: boolean
    optPrint?: boolean
    optDownload?: boolean
    optSearch?: boolean
  }
}

export interface IColorsTable {
  color1: string | 'default'
  colorG1: string | 'main'
  colorG2: string | 'second'
  sizesString?: string | undefined
  isDarkTheme?: boolean
}

export interface ISizesAndDarkTheme {
  sizesString?: string | undefined
  isDarkTheme?: boolean
  isFirst?: boolean
  isLast?: boolean
}

export interface IAll extends IColorsTable {}
export interface IStyTableHeader extends ISizesAndDarkTheme {}
export interface ITableRow extends ISizesAndDarkTheme { alternateBg?: boolean }
export interface ICellHeader extends ISizesAndDarkTheme {
  sortByHeader?: boolean
}
export interface ICellRow extends ISizesAndDarkTheme {}

export interface IIconOption {
  zIndex?: string
  opened?: boolean
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
export interface IAllTableOptions extends ITableTitle {}

export interface IExapandableWrapper {
  isOpen?: boolean
  elementHeight?: string
}
export interface IExapandableItem {
  ExpandThis: React.ReactNode
  showExpandable: boolean
}
