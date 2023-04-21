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
  ${ P.TransitionFn({}) }
  ${ P.CenterFlex }
  ${ P.TextEllipsis }
  ${ P.TextClamp({start: 2, mid: '1.6vw', end: 3}) }
  text-align: ${({alignment}) => alignment};
  z-index: 2;
  cursor: text;
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
`
interface SrcText extends I.ISrcText { children?: React.ReactNode }
export default function SrcText({children, color = 'grey', alignment = 'flex-end', fit = true}: SrcText) {
  return (
    <SrcTextStyled fit={fit} alignment={alignment} color={color}>{children}</SrcTextStyled>
  )
}