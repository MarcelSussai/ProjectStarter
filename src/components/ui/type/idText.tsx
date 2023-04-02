import * as P from '@/styles/parts'
import * as I from './interfaces'
import styled from 'styled-components'

export const IdTextStyled = styled.span<I.IIdText>`
  ${({color}) => P.doCssColor(`${color}`, '150', 'c1', '-6')}
  ${({color}) => P.doCssColor(`${color}`, '175', 'c1', '-10')}
  ${({color}) => P.doCssColor(`${color}`, '800', 'c1')}
  ${ P.ShowTransition }
  ${ P.TransitionDefault }
  display: flex;
  justify-content: flex-end;
  align-items: center;
  justify-content: flex-end;
  text-overflow: ellipsis;
  overflow: hidden;
  z-index: 2;
  cursor: text;
  font-size: clamp(${P.fontSizes[1]}, 3vw, ${P.fontSizes[2]});
  width: 100%;
  font-weight: 500;
  padding: 6px;
  line-height: 1;
  position: relative;
  font-family: var(--font-mono);
  color: var(--c1-800);
  background: var(--c1-150-6);
  border: solid 1px var(--c1-175-10);
`
interface IdText extends I.IIdText { children?: React.ReactNode }
export default function IdText({children, color = 'grey'}: IdText) {
  return (
    <IdTextStyled color={color}>{children}</IdTextStyled>
  )
}