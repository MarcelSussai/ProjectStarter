export type StatusType = 'normal' | 'ok' | 'warn' | 'alert' | 'info'
export interface ITexts {
  color?: string
  status?: StatusType
}
export interface IDateText extends ITexts {}
export interface IMonetaryText extends ITexts {}
export interface IEllipsisCell extends ITexts {}
export interface IPercentText extends ITexts {}
export interface ITextDefault extends ITexts {}
export interface IHeadTitles extends ITexts {
  alignment?: string
}
export interface IIdText extends ITexts {}