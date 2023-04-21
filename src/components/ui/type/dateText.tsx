import * as P from '@/styles/parts'
import * as I from './interfaces'
import styled from 'styled-components'

export const DateTextStyled = styled.span<I.IDateText>`
  ${({color}) => P.doCssColor(`${color}`, '050', 'c1', '-12')}
  ${({color}) => P.doCssColor(`${color}`, '875', 'c1')}
  ${ P.ShowTransition }
  ${ P.TransitionFn({}) }
  ${ P.CenterFlex }
  ${ P.TextClamp({start: 3, mid: '1.6vw', end: 3}) }
  text-overflow: ellipsis;
  overflow: hidden;
  z-index: 2;
  cursor: text;
  border-radius: ${P.roundeds[0]};
  width: calc(100% - 8px);
  height: calc(100% - 8px);
  padding: 0;
  font-weight: 400;
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