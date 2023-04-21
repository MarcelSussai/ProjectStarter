import styled from 'styled-components'
import * as I from './interfaces'
import * as P from '@/styles/parts'

export const TextStyled = styled.p<I.IText>`
  ${({color}) => P.doCssColor(`${color}`, '875', 'c1')}
  ${ P.ShowTransition }
  ${ P.TransitionFn({}) }
  ${ P.TextClamp({start: 3, mid: '1.8vw', end: 4}) }
  width: ${({fit}) => fit ? 'fit-content' : '100%'};
  font-weight: 400;
  line-height: 1.4;
  padding: 0px 4px;
  color: var(--c1-875);
  cursor: text;
`

interface Text extends I.IText { children?: React.ReactNode }
export default function Text({children, color = 'grey', fit = false}: Text) {
  return (
    <TextStyled fit={fit} color={color}>{children}</TextStyled>
  )
}

