export interface ICheckbox {
  text?: string
  hideText?: boolean
  checked: boolean
  onChange: () => void
  color?: string
  fit?: boolean
  horizontalAlignment?: string
  noBg?: boolean
}


export interface IAll {
  color: string
  fit?: boolean
  horizontalAlignment?: string
  noBg?: boolean
  checked?: boolean
}

export interface IText { checked: boolean }
export interface IStyledCheckbox { checked: boolean }
