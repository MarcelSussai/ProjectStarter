export interface IIcon extends ISvg {
}

export interface ISvg {
  color?: string
  show?: boolean
  mode?: 'up' | 'down' | 'left' | 'right' | undefined
  width?: string
  height?: string
}