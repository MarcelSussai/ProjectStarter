
export interface IResults { id?: string | number }
export interface ITableData {
  status: number
  results?: IResults[]
}

export interface IuseTable { configColumns: ICollunnsConfig[] }
export interface ICellHeaderSelector {
  qtd?: string
}

export interface ICollunnsConfig {
  idKey: string
  name: string
  order: number
  ValueComponent?: (row: any, color?: string) => JSX.Element
  HeaderComponent?: (value: any, color?: string) => JSX.Element
  sizeOfColumn?: IsizeOfColumn | undefined
  hideByDefault?: boolean
}

export interface IsizeOfColumn {
  min: string
  max?: string | undefined
}

export interface ITable {
  data: ITableData | undefined
  configColumns: ICollunnsConfig[]
  color1?: string | 'default'
  colorG1?: string | 'main'
  colorG2?: string | 'second'
  title?: string
  showTitle?: boolean
  showCheck?: boolean
  showOptionsCell?: boolean
  maxOptionCellSize?: string
  componentOptionsCell?: (row: unknown) => JSX.Element
  alternateBg?: boolean
  onChangeSelecteds?: (selecteds: string[]) => void
  onChangeClicked?: (rowId: string) => void
  isLoading?: boolean
  expandableComponent?: (row: IResults) => JSX.Element
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
export interface ITableRow extends ISizesAndDarkTheme {
  alternateBg?: boolean
}
export interface ICellHeader extends ISizesAndDarkTheme {}
export interface ICellRow extends ISizesAndDarkTheme {
}

export interface IIconOption {
  zIndex?: string
  opened?: boolean
}

export interface ITableOptions {
  color?: string
  configColumns: ICollunnsConfig[]
  hiddens: ICollunnsConfig[]
  showOrHideColumn: (col: ICollunnsConfig) => void
}
