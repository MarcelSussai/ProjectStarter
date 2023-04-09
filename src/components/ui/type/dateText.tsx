import * as P from '@/styles/parts'
import * as I from './interfaces'
import styled from 'styled-components'

export const DateTextStyled = styled.span<I.IDateText>`
  ${({color}) => P.doCssColor(`${color}`, '050', 'c1', '-12')}
  ${({color}) => P.doCssColor(`${color}`, '875', 'c1')}
  ${ P.ShowTransition }
  ${ P.TransitionDefault }
  display: flex;
  justify-content: center;
  align-items: center;
  text-overflow: ellipsis;
  overflow: hidden;
  z-index: 2;
  cursor: text;
  font-size: clamp(${P.fontSizes[3]}, ${P.fontSizes[3]}, ${P.fontSizes[3]});
  border-radius: ${P.roundeds[16]};
  width: calc(100% - 16px);
  padding: 6px 0;
  font-weight: 600;
  line-height: 1;
  font-family: var(--font-mono);
  position: relative;
  color: var(--c1-875);
  background: var(--c1-050-12);
`
interface DateText extends I.IDateText { children?: React.ReactNode }
export default function DateText({children, color = 'grey'}: DateText) {
  return (
    <DateTextStyled color={color}>{children}</DateTextStyled>
  )
}