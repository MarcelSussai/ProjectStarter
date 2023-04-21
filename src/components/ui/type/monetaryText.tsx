import * as P from '@/styles/parts'
import * as I from './interfaces'
import * as U from './utils'
import styled from 'styled-components'

export const MonetaryTextStyled = styled.span<I.IMonetaryText>`
  ${({color}) => P.doCssColor(`${color}`, '775', 'c1')}
  ${({color}) => P.doCssColor(`${color}`, '800', 'c1')}
  ${({color}) => P.doCssColor(`${color}`, '875', 'c1')}
  ${({color}) => P.doCssColor(`${color}`, '075', 'c1', '-10')}
  ${({color}) => P.doCssColor(`${color}`, '050', 'c1', '-12')}
  ${ P.ShowTransition }
  ${ P.TransitionFn({}) }
  ${ P.TextClamp({start: 3, mid: '1.6vw', end: 3}) }
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-overflow: ellipsis;
  overflow: hidden;
  z-index: 2;
  cursor: text;
  border-radius: ${P.roundeds[0]};
  width: calc(100% - 8px);
  height: calc(100% - 8px);
  padding: 0 8px;
  font-weight: 400;
  line-height: 1;
  position: relative;
  font-family: var(--font-mono);
  color: var(--c1-875);
  ${({status}) => status !== 'normal' ? `background: var(--c1-075-10);` : `background: var(--c1-050-12);`}
  
  &::before {
    content: 'R$';
    position: absolute;
    left: 8px;
    font-weight: 200;
    font-size: ${P.fontSizes[4]};
    font-family: var(--font-default);
    user-select: none;
    color: var(--c1-800);
    cursor: default;
  }
`
interface IMonetaryText extends I.IMonetaryText { children?: React.ReactNode }
export default function MonetaryText({children, color = 'grey', status = 'normal'}: IMonetaryText) {
  return (
    <MonetaryTextStyled color={ U.changeStatusToColorName(status, color) } status={status}>{children}</MonetaryTextStyled>
  )
}