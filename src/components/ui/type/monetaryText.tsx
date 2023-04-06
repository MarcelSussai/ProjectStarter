import * as P from '@/styles/parts'
import * as I from './interfaces'
import * as U from './utils'
import styled from 'styled-components'

export const MonetaryTextStyled = styled.span<I.IMonetaryText>`
  ${({color}) => P.doCssColor(`${color}`, '825', 'c1')}
  ${({color}) => P.doCssColor(`${color}`, '800', 'c1')}
  ${({color}) => P.doCssColor(`${color}`, '050', 'c1', '-8')}
  ${({color}) => P.doCssColor(`${color}`, '025', 'c1', '-3')}
  ${ P.ShowTransition }
  ${ P.TransitionDefault }
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-overflow: ellipsis;
  overflow: hidden;
  z-index: 2;
  cursor: text;
  font-size: clamp(${P.fontSizes[2]}, 3vw, ${P.fontSizes[4]});
  width: 100%;
  height: calc(100% + 0px);
  min-height: 32px;
  padding: 0 8px;
  font-weight: 400;
  line-height: 1;
  position: relative;
  font-family: var(--font-mono);
  color: var(--c1-825);
  ${({status}) => status !== 'normal' ? `background: var(--c1-050-8);` : `background: var(--c1-025-3);`}
  
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