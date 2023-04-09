export type StatusType = 'normal' | 'ok' | 'warn' | 'alert' | 'info'
export interface ITexts {
  color?: string
  status?: StatusType
  alignment?: string
  fit?: boolean
}
export interface IDateText extends ITexts {}
export interface IText extends ITexts {}
export interface IMonetaryText extends ITexts {}
export interface IEllipsisCell extends ITexts {}
export interface IPercentText extends ITexts {}
export interface ITextDefault extends ITexts {}
export interface IHeadTitles extends ITexts {
}
export interface IIdText extends ITexts {}
export interface ISrcText extends ITexts {}
export interface ICodeBlock extends ITexts{
  lang?: string
  text?: string
}