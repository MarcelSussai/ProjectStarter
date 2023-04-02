import * as P from '@/styles/parts'
import * as I from './interfaces'
import styled from 'styled-components'

export const DateTextStyled = styled.span<I.IDateText>`
  ${({color}) => P.doCssColor(`${color}`, '700', 'c1')}
  ${ P.ShowTransition }
  ${ P.TransitionDefault }
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-overflow: ellipsis;
  overflow: hidden;
  z-index: 2;
  cursor: text;
  font-size: clamp(${P.fontSizes[2]}, 3vw, ${P.fontSizes[3]});
  width: 100%;
  height: 100%;
  margin: 0 8px;
  font-weight: 400;
  line-height: 1;
  position: relative;
  font-family: var(--font-mono);
  color: var(--c1-700);
`
interface DateText extends I.IDateText { children?: React.ReactNode }
export default function DateText({children, color = 'grey'}: DateText) {
  return (
    <DateTextStyled color={color}>{children}</DateTextStyled>
  )
}