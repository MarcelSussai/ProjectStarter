import styled from 'styled-components'
import * as I from './interfaces'
import * as P from '@/styles/parts'

export const TextStyled = styled.p<I.IText>`
  ${({color}) => P.doCssColor(`${color}`, '875', 'c1')}
  ${ P.ShowTransition }
  ${ P.TransitionDefault }
  width: ${({fit}) => fit ? 'fit-content' : '100%'};
  font-size: clamp(${P.fontSizes[3]}, 1.8vw, ${P.fontSizes[4]});
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

