import * as P from '@/styles/parts'
import * as I from './interfaces'
import styled from 'styled-components'

export const HeadTitleSty = styled.h1<I.IHeadTitles>`
  ${({color}) => P.doCssColor(`${color}`, '025', 'c1', '-8')}
  ${({color}) => P.doCssColor(`${color}`, '750', 'c1')}
  ${ P.ShowTransition }
  ${ P.TransitionDefault }
  display: flex;
  justify-content: ${({alignment}) => alignment};
  align-items: center;
  width: 100%;
  font-size: clamp(${P.fontSizes[10]}, 7.2vw, ${P.fontSizes[14]});
  font-weight: 900;
  line-height: 1;
  color: var(--c1-750);
`

interface HeadTitles extends I.IHeadTitles {
  children?: React.ReactNode
  as?: string
}
export default function HeadTitles({children, color = 'grey', alignment = 'center'}: HeadTitles) {
  return (
    <HeadTitleSty alignment={alignment} color={color}>
      {children}
    </HeadTitleSty>
  )
}