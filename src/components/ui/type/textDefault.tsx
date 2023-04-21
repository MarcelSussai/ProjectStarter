import styled from 'styled-components'
import * as I from './interfaces'
import * as P from '@/styles/parts'

export const TextDefaultStyled = styled.span<I.ITextDefault>`
  ${({color}) => P.doCssColor(`${color}`, '050', 'c1', '-10')}
  ${({color}) => P.doCssColor(`${color}`, '875', 'c1')}
  ${ P.ShowTransition }
  ${ P.TransitionFn({}) }
  ${ P.TextClamp({}) }
  display: flex;
  align-items: center;
  width: ${({fit}) => fit ? 'fit-content' : 'calc(100% - 8px)'};
  ${ ({fit}) => fit ? 'margin-left: 4px;' : '' }
  height: calc(100% - 8px);
  background: var(--c1-050-10);
  font-weight: 400;
  line-height: 1.4;
  padding: 0px 8px;
  color: var(--c1-875);
  cursor: text;
`

interface TextDefault extends I.ITextDefault { children?: React.ReactNode }
export default function TextDefault({children, color = 'grey', fit = false}: TextDefault) {
  return (
    <TextDefaultStyled fit={fit} color={color}>{children}</TextDefaultStyled>
  )
}

