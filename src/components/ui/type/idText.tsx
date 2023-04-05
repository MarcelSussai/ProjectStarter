import * as P from '@/styles/parts'
import * as I from './interfaces'
import styled from 'styled-components'

export const IdTextStyled = styled.span<I.IIdText>`
  ${({color}) => P.doCssColor(`${color}`, '100', 'c1', '-10')}
  ${({color}) => P.doCssColor(`${color}`, '100', 'c1', '-8')}
  ${({color}) => P.doCssColor(`${color}`, '800', 'c1')}
  ${ P.ShowTransition }
  ${ P.TransitionDefault }
  display: flex;
  justify-content: flex-end;
  align-items: center;
  justify-content: ${({alignment}) => alignment};
  text-overflow: ellipsis;
  overflow: hidden;
  z-index: 2;
  cursor: text;
  font-size: clamp(${P.fontSizes[1]}, 3vw, ${P.fontSizes[2]});
  width: ${({fit}) => fit ? 'fit-content' : '100%'};
  height: calc(100% - 16px);
  border-radius: ${P.roundeds[1]};
  font-weight: 500;
  padding: 6px;
  margin: 8px;
  line-height: 1;
  position: relative;
  font-family: var(--font-mono);
  color: var(--c1-800);
  background: var(--c1-100-8);
  border: solid 1px var(--c1-100-10);
  backdrop-filter: blur(2px);
`
interface IdText extends I.IIdText { children?: React.ReactNode }
export default function IdText({children, color = 'grey', alignment = 'flex-end', fit = false}: IdText) {
  return (
    <IdTextStyled fit={fit} alignment={alignment} color={color}>{children}</IdTextStyled>
  )
}