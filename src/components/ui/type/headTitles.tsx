import * as P from '@/styles/parts'
import * as I from './interfaces'
import styled from 'styled-components'

export const HeadTitleSty = styled.h1<I.IHeadTitles>`
  ${({color}) => P.doCssColor(`${color}`, '750', 'c1')}
  ${ P.ShowTransition }
  ${ P.TransitionDefault }
  ${ P.CenterFlex }
  width: 100%;
  font-size: ${P.fontSizes[8]};
  font-weight: 900;
  padding: 8px;
  color: var(--c1-750);
`

interface HeadTitles extends I.IHeadTitles { children?: React.ReactNode }
export default function HeadTitles({children, color = 'grey'}: HeadTitles) {
  return (
    <HeadTitleSty color={color}>{children}</HeadTitleSty>
  )
}