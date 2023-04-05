import { IResults } from "@/components/ui/table/interfaces"

export interface ITableTestView {}
export interface IRowData extends IResults {
  description?: string
  percentage?: number | string
  date?: string
  monetaryValue?: number
}