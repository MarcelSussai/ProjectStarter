import * as P from '@/styles/parts'
import * as U from './utils'
import * as I from './interfaces'
import styled from 'styled-components'

export const PercentTextStyle = styled.span<I.IPercentText>`
  ${({color}) => P.doCssColor(`${color}`, '050', 'c1', '-12')}
  ${({color}) => P.doCssColor(`${color}`, '875', 'c1')}
  ${ P.ShowTransition }
  ${ P.TransitionFn({}) }
  ${ P.CenterFlex }
  ${ P.TextClamp({start: 3, mid: '1.6vw', end: 3}) }
  ${ P.TextEllipsis }
  z-index: 2;
  cursor: text;
  border-radius: ${P.roundeds[0]};
  font-weight: 400;
  line-height: 1;
  position: relative;
  font-family: var(--font-mono);
  color: var(--c1-875);
  width: calc(100% - 8px);
  height: calc(100% - 8px);
  background: var(--c1-050-12);
`
interface PercentText extends I.IPercentText { children?: React.ReactNode }
export default function PercentText({children, color = 'grey'}: PercentText) {
  return (
    <PercentTextStyle color={color}>{children}</PercentTextStyle>
  )
}