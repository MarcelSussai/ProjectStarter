import * as P from '@/styles/parts'
import * as I from './interfaces'
import styled from 'styled-components'

export const SrcTextStyled = styled.div<I.IIdText>`
  ${({color}) => P.doCssColor(`${color}`, '100', 'c1', '-10')}
  ${({color}) => P.doCssColor(`${color}`, '875', 'c1')}
  ${({color}) => P.doCssColor(`${color}`, '075', 'c1')}
  ${({color}) => P.doCssColor(`${color}`, '975', 'c1', '-7')}
  ${({color}) => P.doCssColor(`${color}`, '025', 'c1')}
  ${ P.ShowTransition }
  ${ P.TransitionDefault }
  ${ P.CenterFlex }
  text-align: ${({alignment}) => alignment};
  text-overflow: ellipsis;
  overflow: hidden;
  z-index: 2;
  cursor: text;
  font-size: clamp(${P.fontSizes[2]}, 1.6vw, ${P.fontSizes[3]});
  width: ${({fit}) => fit ? 'fit-content' : '100%'};
  font-weight: 300;
  padding: 8px 16px;
  line-height: 1;
  position: relative;
  font-weight: 300;
  font-family: var(--font-mono);
  color: var(--c1-025);
  background: var(--c1-875);
  min-height: 32px;
  border-radius: ${P.roundeds[3]};
  /* border: solid 2px var(--c1-075); */
  /* box-shadow: 0 0 8px var(--c1-975-7); */
`
interface SrcText extends I.ISrcText { children?: React.ReactNode }
export default function SrcText({children, color = 'grey', alignment = 'flex-end', fit = true}: SrcText) {
  return (
    <SrcTextStyled fit={fit} alignment={alignment} color={color}>{children}</SrcTextStyled>
  )
}