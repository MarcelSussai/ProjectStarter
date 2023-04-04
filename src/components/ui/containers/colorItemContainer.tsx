import * as P from '@/styles/parts'
import styled from 'styled-components'

interface IColorBox {
  color?: string
  isMainColor?: boolean
}
export const ColorBox: any = styled.div.attrs(props => ({
  style: {background: props.color}
}))<IColorBox>`
  ${P.TransitionDefault}
  ${P.ShowTransition}
  ${P.CenterFlex}
  width: 64px;
  height: 64px;
  color: #FFF;
  border-left: solid 2px ${({isMainColor}) => isMainColor ? '#FFF' : '#FFFFFF00'} ;
  border-right: solid 2px ${({isMainColor}) => isMainColor ? '#FFF' : '#FFFFFF00'} ;
  font-size: ${P.fontSizes[2]};
  font-family: var(--font-mono);
  line-height: 1;
  font-weight: 600;
  text-shadow:
    0 0 4px #000, 0 0 6px #000,
    0 0 8px #000, 0 0 12px #000,
    0 0 16px #000
  ;
  cursor: text;
`

export const ContainerAllColors = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 0;
  gap: 0;
  width: 100%;
  height: 100%;
`