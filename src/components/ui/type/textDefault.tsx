import styled from 'styled-components'
import * as I from './interfaces'
import * as P from '@/styles/parts'

export const TextDefaultStyled = styled.p<I.ITextDefault>`
  ${({color}) => P.doCssColor(`${color}`, '875', 'c1')}
  ${ P.ShowTransition }
  ${ P.TransitionDefault }
  width: ${({fit}) => fit ? 'fit-content' : '100%'};
  font-size: clamp(${P.fontSizes[2]}, 1.4vw, ${P.fontSizes[2]});
  font-weight: 500;
  line-height: 1.4;
  padding: 8px 8px;
  color: var(--c1-875);
  cursor: text;
`

interface TextDefault extends I.ITextDefault { children?: React.ReactNode }
export default function TextDefault({children, color = 'grey', fit = false}: TextDefault) {
  return (
    <TextDefaultStyled fit={fit} color={color}>{children}</TextDefaultStyled>
  )
}

