import * as P from '@/styles/parts'
import * as I from './interfaces'
import styled from 'styled-components'

export const MonetaryTextStyled = styled.span<I.IMonetaryText>`
  ${({color}) => P.doCssColor(`${color}`, '825', 'c1')}
  ${({color}) => P.doCssColor(`${color}`, '300', 'c1')}
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
  color: var(--c1-825);
  
  &::before {
    content: 'R$';
    position: absolute;
    left: 0;
    font-weight: 300;
    font-size: ${P.fontSizes[6]};
    font-family: var(--font-default);
    user-select: none;
    color: var(--c1-300);
    cursor: default;
  }
`
interface IMonetaryText extends I.IMonetaryText { children?: React.ReactNode }
export default function MonetaryText({children, color = 'grey'}: IMonetaryText) {
  return (
    <MonetaryTextStyled color={color}>{children}</MonetaryTextStyled>
  )
}