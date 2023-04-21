import * as P from '@/styles/parts'
import * as I from './interfaces'
import styled from 'styled-components'


export const EllipsisCellStyled = styled.div<I.IEllipsisCell>`
  ${ P.ShowTransition }
  ${ P.TransitionFn({}) }
  ${ P.TextEllipsis }
  ${ P.TextClamp({}) }
  line-height: 1;
  text-align: left;
  z-index: 2;
  cursor: text;
  padding: 8px;
`
interface EllipsisCell extends I.IEllipsisCell { children?: React.ReactNode }
export default function EllipsisCell({children, color = 'grey'}: EllipsisCell) {
  return (
    <EllipsisCellStyled color={color}>{children}</EllipsisCellStyled>
  )
}