import * as P from '@/styles/parts'
import * as U from './utils'
import * as I from './interfaces'
import styled from 'styled-components'

export const PercentTextStyle = styled.span<I.IPercentText>`
  ${({color}) => P.doCssColor(`${color}`, '050', 'c1', '-12')}
  ${({color}) => P.doCssColor(`${color}`, '875', 'c1')}
  ${ P.ShowTransition }
  ${ P.TransitionDefault }
  ${ P.CenterFlex }
  text-overflow: ellipsis;
  overflow: hidden;
  z-index: 2;
  cursor: text;
  font-size: clamp(${P.fontSizes[3]}, ${P.fontSizes[3]}, ${P.fontSizes[3]});
  border-radius: ${P.roundeds[0]};
  width: calc(100% - 8px);
  height: calc(100% - 8px);
  font-weight: 400;
  line-height: 1;
  position: relative;
  font-family: var(--font-mono);
  color: var(--c1-875);
  background: var(--c1-050-12);
`
interface PercentText extends I.IPercentText { children?: React.ReactNode }
export default function PercentText({children, color = 'grey'}: PercentText) {
  return (
    <PercentTextStyle color={color}>{children}</PercentTextStyle>
  )
}