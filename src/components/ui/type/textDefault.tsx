import styled from 'styled-components'
import * as I from './interfaces'
import * as P from '@/styles/parts'

export const TextDefaultStyled = styled.p<I.ITextDefault>`
  ${({color}) => P.doCssColor(`${color}`, '800', 'c1')}
  ${ P.ShowTransition }
  ${ P.TransitionDefault }
  width: 100%;
  font-size: ${P.fontSizes[3]};
  font-weight: 500;
  line-height: 1.4;
  padding: 0px 8px;
  color: var(--c1-800);
  cursor: text;
`
export const BoldTextDefault = styled.span`
  font-weight: 700;
`
interface TextDefault extends I.ITextDefault { children?: React.ReactNode }
export default function TextDefault({children, color = 'grey'}: TextDefault) {
  return (
    <TextDefaultStyled color={color}>{children}</TextDefaultStyled>
  )
}

