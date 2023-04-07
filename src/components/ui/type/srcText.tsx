import * as P from '@/styles/parts'
import * as I from './interfaces'
import styled from 'styled-components'

export const SrcTextStyled = styled.span<I.IIdText>`
  ${({color}) => P.doCssColor(`${color}`, '100', 'c1', '-10')}
  ${({color}) => P.doCssColor(`${color}`, '875', 'c1')}
  ${({color}) => P.doCssColor(`${color}`, '025', 'c1')}
  ${ P.ShowTransition }
  ${ P.TransitionDefault }
  text-align: ${({alignment}) => alignment};
  text-overflow: ellipsis;
  overflow: hidden;
  z-index: 2;
  cursor: text;
  font-size: clamp(${P.fontSizes[1]}, 3vw, ${P.fontSizes[2]});
  width: ${({fit}) => fit ? 'fit-content' : '100%'};
  border-radius: ${P.roundeds[1]};
  font-weight: 300;
  padding: 4px 8px;
  line-height: 1;
  position: relative;
  font-family: var(--font-mono);
  color: var(--c1-025);
  background: var(--c1-875);
`
interface SrcText extends I.ISrcText { children?: React.ReactNode }
export default function SrcText({children, color = 'grey', alignment = 'flex-end', fit = true}: SrcText) {
  return (
    <SrcTextStyled fit={fit} alignment={alignment} color={color}>{children}</SrcTextStyled>
  )
}